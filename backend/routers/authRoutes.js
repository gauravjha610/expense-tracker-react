import express from "express";
import {signup,login,getMe,logout} from '../controllers/auth.controller.js'
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get('/verify-me',verifyToken,getMe);
router.post('/signup',signup);
router.post('/login',login);
router.post("/logout", logout);

export default router;