const authorizRoles=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"acces denied"})
        }
        next()
        

    }
}
module.exports=authorizRoles