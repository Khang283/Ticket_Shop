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

  verifyToken = (req, res, next) => {
    let token = req.headers.authorization.substring(7);

    try {
      let decode = jwt.verify(token, SECRET_KEY);
      req.username = decode.username;
      req.id = decode.id;
      next();
    } catch (err) {
      next(new JwtException(token));
    }
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
                role: "user",
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
}

module.exports = new AuthenticationController();
