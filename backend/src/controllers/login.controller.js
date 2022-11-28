const connectPG= require('../config/config-pg');
const bcrypt = require('bcryptjs')
const {generarJWT} = require("../helpers/generar-jwt");
const login = async (req, res)=>{
    const {par_email, par_contrasenia} = req.body;
    const query = `select id_usuario, nombre,email, nickname, contrasenia, img from core.usuario where email=$1`
    try {
        const resultado = await connectPG.query(query, [par_email]);
        if(resultado.rowCount <= 0) {
            return res.status(400).json({
                estado:0,
                msg:'Usuario contraseña incorrectos'
            })
        }
        const {id_usuario, email, nombre, contrasenia, nickname, img} = resultado.rows[0];
        if(!bcrypt.compareSync(par_contrasenia, contrasenia)){
            return res.status(400).json({
                estado:0,
                msg:'Usuario contraseña incorrectos'
            })
        }
        const token = await generarJWT({nombre, email, nickname, id_usuario})
        res.status(200).json({
            estado:1,
            msg:'Inicio de sesión correcto',
            usuario:{nickname, nombre, img},
            token
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            msg:'Error en el registro'
        })
    }
}

module.exports = {
    login
}