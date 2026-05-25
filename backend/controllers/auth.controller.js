import userModel from "../models/userModel.js";
import { validateSignup } from "../utils/validateSignup.js"
import { validateLogin} from '../utils/validateLogin.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const getMe=async(req,res)=>{
    try {
        const user = await userModel.findById(req.user.id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not Found"
            });
        }
        res.status(200).json({
            success:true,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}
export const signup=async(req,res)=>{
    try {
        //validate
        const result = validateSignup(req.body);
        if(!result.success){
            //400-bad request
            return res.status(400).json({
                success:false,
                message:result.message
            });
        }
        //check existing
        const {name,email,password} = req.body;
        const normalizedEmail = email.toLowerCase();
        const existingUser =await userModel.findOne({normalizedEmail});
        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already exists"
            });
        }
        //hash password
        const salt =await bcrypt.genSalt(10);
        const hashPassword =await bcrypt.hash(password,salt);
        //add user in db
        const newUser = await userModel.create({
            name :name,
            email:normalizedEmail,
            password:hashPassword
        });
        //jwt generate
        const token = jwt.sign(
            {
                id:newUser._id,
                email:newUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1d'
            }
        );
        // store token in cookie
        res.cookie(
            "token",
            token,
            {
                httpOnly:true,
                secure:true,
                sameSite:"none"
            }
        )
        res.status(201).json({
            message:"User Created Successfully",
            success:true,
            user: {
                id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}
export const login=async(req,res)=>{
    try {
        //validate
        const result = validateLogin(req.body);
        if(!result.success){
            //400-bad request
            return res.status(400).json({
                success:false,
                message:result.message
            });
        }
        //check user
        const {email,password} = req.body;
        const normalizedEmail = email.toLowerCase();
        const user =await userModel.findOne({email:normalizedEmail});
        if(!user){
            return res.status(409).json({
                success:false,
                message:"Invalid user or password"
            });
        }
        //compare password
        const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(409).json({
                success:false,
                message:"Invalid Email or Password"
            });
        }
        
        //jwt generate
        const token = jwt.sign(
            {
                id:user._id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1d'
            }
        );
        // store token in cookie
        res.cookie(
            "token",
            token,
            {
                httpOnly:true,
                secure:true,
                sameSite:"none"
            }
        )
        res.status(201).json({
            message:"Login Successfull",
            success:true,
            user: {
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}

export const logout=async(req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}