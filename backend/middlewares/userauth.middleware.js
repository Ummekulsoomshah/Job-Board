const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // req.cookie.token 
    let token
    let authHeader = req.headers.Authorization || req.headers.authorization
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(" ")[1]

        if (!token) {
            return res.status(401).json({ message: "Auth denied" })
        }
        try {
            const user = jwt.verify(token, 'secret')
            req.user = user
            next()
        } catch (err) {
            return res.status(400).json({ message: err })

        }
    }

}

module.exports=verifyToken