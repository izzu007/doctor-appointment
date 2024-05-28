import userModal from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Controller
const registerController = async (req, res) => {
    try{
        const existingUser = await userModal.findOne({email: req.body.email});
        if(existingUser){
            return res.status(200).send({
                message: 'User Already Exist',
                success: false
            })
        }
        const password = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = await userModal(req.body);
        newUser.save();
        res.status(201).send({
            success: true,
            message: "User created successfully"
        })
    } catch(error){
        res.status(500);
        res.send({
            success: true,
            message: `Register Message ${error.message}`
        });
    }
}

// Login Controller
const loginController = async (req, res) => {
    try{
        const user = await userModal.findOne({email: req.body.email});
        if(!user){
            return res.status(200).send({
                success: false,
                message: 'User not found'
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password!'
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).send({
            success: true,
            token,
            message: 'Login successfully'
        })
    }catch(error){
        console.log(error);
        res.status(505).send({
            message: false,
            message: 'Something went wrong'
        })
    }
    
}

const authController = async (req, res) => {
    try{
        const user = await userModal.findOne({_id: req.body.userId});
        if(!user){
            res.status(200).send({
                success: false,
                message: 'User not found'
            })
        } else {
            res.status(200).send({
                success: true,
                data: {
                    name: user.name,
                    email: user.email
                }
            })
        }
    }catch(error){
        res.status(500).send({
            success: false,
            message: 'Auth Error',
            error
        })
    }
}

export {loginController, registerController, authController}