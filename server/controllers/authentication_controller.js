const { where } = require("sequelize");
const db = require("../db/models/index");
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_HASH = Number(process.env.SALT_HASH);
const { v4: uuidv4 } = require("uuid");
const { JwtException } = require("../exceptions/exceptions/jwt_exception");
const {
  RegistrationException,
} = require("../exceptions/exceptions/registration_exception");
const {
  UserExistException,
} = require("../exceptions/exceptions/user_exist_exception");
const RefreshToken = require("../db/models/RefreshToken");
const { RefreshTokenExpireException } = require("../exceptions/exceptions/refresh_token_expire_exception");
const { UnknownException } = require("../exceptions/exceptions/unknown_exception");
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;
const REFRESH_TOKEN_LIFE = process.env.REFRESH_TOKEN_LIFE;

class AuthenticationController {
  generateToken = (id, username) => {
    return jwt.sign(
      {
        id: id,
        username: username,
      },
      SECRET_KEY,
      {
        expiresIn: `${ACCESS_TOKEN_LIFE}d`,
      }
    );
  };

  generateRefreshToken = (id, username) => {
    return jwt.sign(
      {
        id: id,
        username: username,
      },
      SECRET_KEY,
      {
        expiresIn: `${REFRESH_TOKEN_LIFE}d`,
      }
    );
  };

  generateRefreshTokenWithExpireDate = (id, username, expiresIn) => {
    return jwt.sign(
      {
        id: id,
        username: username,
      },
      SECRET_KEY,
      {
        expiresIn: expiresIn,
      }
    );
  }

  verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    token = token.substring(7);
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log.apply(err.message);
        const msg = err.message || "JWT Error";
        return res.status(401).json({
          message: msg,
          timestamp: Date.now(),
          status: 401,
          path: req.originalUrl
        })
      }
      else {
        req.username = decoded.username;
        req.id = decoded.id;
        next();
      }
    });
  };

  register = async (req, res, next) => {
    try {
      let user = req.body;
      db.User.count({
        where: {
          username: user.username,
        },
      }).then((result) => {
        if (result == 0) {
          bcrypt.genSalt(SALT_HASH).then((salt) => {
            bcrypt.hash(user.password, salt).then((hash) => {
              console.log(hash);
              db.User.create({
                id: uuidv4(),
                username: user.username,
                password: hash,
                email: user.email,
                fullName: user.fullName,
                dob: Date(user.dob),
                gender: user.gender,
                role: user.role,
                phoneNumber: user.phoneNumber,
                address: user.address,
                createdAt: Date(),
              }).then((newUser) => {
                let accesToken = this.generateToken(
                  newUser.id,
                  newUser.username
                );
                let refreshToken = this.generateRefreshToken(
                  newUser.id,
                  newUser.username
                );
                db.RefreshToken.create({
                  id: uuidv4(),
                  userId: newUser.id,
                  refreshToken: refreshToken,
                }).then((refreshToken) => {
                  return res.status(200).json({
                    accesToken: accesToken,
                    refreshToken: refreshToken.refreshToken,
                    type: "Bearer",
                    expiresIn: new Date().setDate(
                      new Date().getDate() + Number(ACCESS_TOKEN_LIFE)
                    ),
                  });
                });
              });
            });
          });
        } else {
          next(new UserExistException(user.username));
        }
      });
    } catch (err) {
      next(new RegistrationException());
    }
  };

  login = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    try {
      const user = await db.User.findOne({
        where: {
          username: username,
        },
      });
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          let role = user.role
          let accesToken = this.generateToken(user.id, user.username);
          let refreshToken = this.generateRefreshToken(
            user.id,
            user.username
          );
          db.RefreshToken.create({
            id: uuidv4(),
            userId: user.id,
            refreshToken: refreshToken,
          }).then((refreshToken) => {
            return res.status(200).json({
              accesToken: accesToken,
              refreshToken: refreshToken.refreshToken,
              role: role,
              type: "Bearer",
              expiresIn: new Date().setDate(
                new Date().getDate() + Number(ACCESS_TOKEN_LIFE)
              ),
            });
          });
        }
      });
    } catch (err) {
      next(new UserExistException(username));
    }
  };

  deleteRefreshToken = async (refreshToken) => {
    try {
      let oldRefreshToken = await db.RefreshToken.findOne({
        where: {
          refreshToken: refreshToken
        }
      })
      await oldRefreshToken.destroy();
    }
    catch (err) {
      console.log(err)
    }
  }

  refreshToken = async (req, res, next) => {
    let refreshToken = req.body.refreshToken;
    let expiresIn = '';
    let id = '';
    let username = '';
    if (!refreshToken) return res.status(404).json({ error: 'Missing refresh token' });

    jwt.verify(refreshToken, SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).json({ message: "Invalid" });
      }
      else {
        expiresIn = decode.exp;
        id = decode.id;
        username = decode.username;

      }
    });
    if (expiresIn * 1000 <= Date.now()) {
      // next(new RefreshTokenExpireException(refreshToken));
      return res.status(500).json({ message: "Expired" })
    }
    else {
      try {
        let oldRefreshToken = await db.RefreshToken.findOne({
          where: {
            refreshToken: refreshToken
          }
        })
        if (oldRefreshToken) {
          await oldRefreshToken.destroy();
        }
        else {
          return res.status(500).json({ message: "Can not found refresh token" });
        }
      }
      catch (err) {
        return res.status(500).json({ message: "Can not found refresh token" });
      }
      let accesToken = this.generateToken(
        id,
        username
      );
      let newRefreshToken = this.generateRefreshTokenWithExpireDate(
        id,
        username,
        expiresIn
      );
      db.RefreshToken.create({
        id: uuidv4(),
        userId: id,
        refreshToken: newRefreshToken,
      }).then((refreshToken) => {
        return res.status(200).json({
          accesToken: accesToken,
          refreshToken: refreshToken.refreshToken,
          type: "Bearer",
          expiresIn: new Date(expiresIn * 1000).toLocaleDateString(),
        })
      });

    }

  }

  logout = async (req, res, next) => {
    let token = req.body.refreshToken;
    await db.RefreshToken.destroy({
      where: {
        refreshToken: token
      }
    })
    return res.status(200).json({ message: "Logout Successfully" })
  }

  testAuth = (req, res, next) => {
    return res.status(200).json({
      message: "Success",
      id: req.id,
      username: req.username
    });
  }
}

module.exports = new AuthenticationController();
