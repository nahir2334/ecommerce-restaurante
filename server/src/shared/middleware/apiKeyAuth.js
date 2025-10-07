import dotenv from 'dotenv'

dotenv.config();
const validApiKey = process.env.API_KEY;

function apiKeyAuth(req, res, next){
    const apik = req.headers['x-api-key'];
    if(apik && apik === validApiKey){
        next();
    }else{
        res.status(401).json({error : 'Api KEY Invalida'});
    }
}

export {apiKeyAuth}