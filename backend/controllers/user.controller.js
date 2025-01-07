const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const formModel = require('../models/form.model')
const candidateModel = require('../models/candidate.model')
const upload=require('../middlewares/upload.middleware')
module.exports.register = async (req, res, next) => {
    try {

        const { name, email, password, role } = req.body
        const hashedpassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            name,
            email,
            password: hashedpassword,
            role
        })
        const token = jwt.sign({ _id: user._id, role: user.role }, 'secret')
        res.cookie('token', token)
        res.status(201).json({
            message: 'User created successfully',
            user
        })
    } catch (error) {
        next(error);
    }
}

module.exports.login = async (req, res, next) => {
    try {

        const { password, email } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return next(err);
            }

            if (!result) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({
                message: 'Login successful',
                user,
                token
            });
        });
    } catch (error) {
        next(error);
    }

}

module.exports.JobformCreation = async (req, res, next) => {
    try {
        const { jobName, company, jobDescription } = req.body
        const form = await formModel.create({
            jobName,
            company,
            jobDescription
        })
        res.status(201).json({
            message: 'Form created successfully',
            form
        })
    }
    catch (error) {
        next(error)
    }

}

module.exports.joblisting = async (req, res, next) => {
    try {

        const jobs = await formModel.find()
        return res.status(200).json({ jobs })
    } catch (error) {
        next(error)
    }
}

module.exports.JobApplysubmit = async (req, res, next) => {
    try {
        const { name, email, skills } = req.body
        const resume = req.file.path;
        const newcandidate = await candidateModel.create({
            name,
            email,
            skills,
            resume
        })
        res.status(200).json({
            newcandidate,
            message: "candidtae created",
        })
    } catch (err) {
        next(err)
    }
}

