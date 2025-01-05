const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token= req.headers["authorization"]?.split(" ")[1]
    console.log("token",token)
    if (token) {
        const user = jwt.verify(token, 'secret')
                req.user = user
                next()
    } else {
        return res.status(401).json({ message: 'No token provided' });
    }
    // let authHeader = req.headers.Authorization || req.headers.authorization
    // if (authHeader && authHeader.startsWith('Bearer')) {
    //     token = authHeader.split(" ")[1]

    //     if (!token) {
    //         return res.status(401).json({ message: "Auth denied" })
    //     }
    //     try {
    //         const user = jwt.verify(token, 'secret')
    //         req.user = user
    //         next()
    //     } catch (err) {
    //         return res.status(400).json({ message: err })

    //     }
    // }else{
    //     return res.json({message:"error in authenitcating"})
    // }

}

module.exports=verifyToken