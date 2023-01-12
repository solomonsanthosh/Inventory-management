const jwt = require('jsonwebtoken');
exports.checkLogin = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    jwt.verify(token,process.env.ACCESSTOKEN,(err,user)=>{
        if(err) return res.sendStatus(401);
        req.user = user;
        next();
    })

}                                                    