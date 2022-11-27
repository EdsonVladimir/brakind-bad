const jwt = require('jsonwebtoken');

const validarJWT = async (req, res, next) =>{
    try {
        const token = req.header('token');
        if(!token){
            return res.status(401).json({
                estado:0,
                mensaje:"No existe token en la peticion!!"
            })
        }
        const { id_usuario, nickname }= await jwt.verify(token, process.env.SECRETPRIVATEKEY)
        req.body.id_usuario=id_usuario;
        req.body.nickname=nickname;
        next();
    } catch (err) {
        return res.status(401).json({
            estado:0,
            mensaje:"Token no valido",
            contenido:err
        })
    }
}

module.exports = {
    validarJWT
}