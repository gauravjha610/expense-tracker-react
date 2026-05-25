import jwt from 'jsonwebtoken'

const verifyToken=async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Unauthorized access - Token not found"
            });
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Unauthorized access - Invalid Token"
        });
    }
}

export default verifyToken;