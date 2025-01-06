const authorizRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            console.log("allowedRoles",allowedRoles)
            console.log("req.user.role",req.user.role)
            console.log("acces denied")
            return res.status(403).json({message:"acces denied"})
        }
        next()
        

    }
}
module.exports=authorizRoles