const express = require('express')
const router=express.Router()
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/userauth.middleware')
const authorizRoles=require('../middlewares/roleAuths.middleware')
const upload=require('../middlewares/upload.middleware')
router.post('/register',userController.register)
router.post('/login',userController.login)

router.post('/jobformcreation',authMiddleware,authorizRoles('employer'),userController.JobformCreation)

router.get('/applicantList/:jobId',authMiddleware,authorizRoles('employer'),userController.applicantsList)

router.get('/joblisting',authMiddleware,authorizRoles('employer','job_seeker'),userController.joblisting)
router.post('/JobApplysubmit/:jobId',authMiddleware,authorizRoles('employer','job_seeker'), upload.single('resume'),userController.JobApplysubmit)
module.exports=router