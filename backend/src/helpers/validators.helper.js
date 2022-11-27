const connectPg = require('../config/config-pg')


const emailExiste = async(email = '')=>{
    const existeEmail = await connectPg.query(`SELECT email FROM core.usuario WHERE email ilike $1`,[email]);
    if(existeEmail.rowCount > 0) {
        throw new Error(`El correo ${email} ya se encuentra registrado`);
    }
}
const nicknameExiste = async(nickname = '')=>{
    const existeEmail = await connectPg.query(`SELECT nickname FROM core.usuario WHERE nickname ilike $1`,[nickname]);
    if(existeEmail.rowCount > 0) {
        throw new Error(`El nickname ${nickname} ya se encuentra registrado`);
    }
}
module.exports={
    emailExiste,
    nicknameExiste
}