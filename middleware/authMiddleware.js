import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(200).send({
                    success: true,
                    message: "Auth Failed"
                })
            } else {
                req.body.userId = decode.id,
                next()
            }
        })
    } catch(error){
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Authentication Failed'
        })
    }
}

export default authMiddleware; 