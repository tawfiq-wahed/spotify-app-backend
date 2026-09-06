const jwt=require("jsonwebtoken");
async function auth(req,res,next)
{
    const token=req.cookies.cookie;
    if(!token)
    {
        return res.status(401).json({
            message:"unauthorized"
        })
    }       


try{
    const decoded=jwt.verify(token,process.env.jwtsecret);
   if(decoded.role!=="artist")
   {
    return res.status(403).json({
        message:"forbidden"
    })
   }
   req.user=decoded;
   next();
}

catch(err)
{
     res.status(401).json({
        message:"invalid token"
    })
}
}
async function authuser(req,res,next)
{
    const token =req.cookies.cookie;
    if(!token)
    {
        res.status(401).json({
            message:"unauthorized error"
        })
    }
    try
    {
        const decoded=jwt.verify(token,process.env.jwtsecret)
        if(decoded.role!=="user")
        {
   res.status(403).json({
            message:"forbidden"
        })
        }
        req.user=decoded;
        next();

    }
    catch
    {
           res.status(401).json({
            message:"unauthorized error with valid token"
        })
    }
}

module.exports={auth,authuser};