class CommonController {
    test = (req, res, next)=>{
        return res.send("Hello World").status(200);
    }
}

module.exports = new CommonController();