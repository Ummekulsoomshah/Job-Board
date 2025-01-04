const express = require('express')
const router=express.Router()
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/userauth.middleware')
const authorizRoles=require('../middlewares/roleAuths.middleware')
router.post('/register',userController.register)
router.post('/login',userController.login)

router.post('/jobformcreation',authMiddleware,authorizRoles('employer'),userController.JobformCreation)

router.get('/job-seeker',authMiddleware,authorizRoles('employer','job-seeker'),(req,res)=>{
    res.json({message:"employerr welcom"})
})
module.exports=router