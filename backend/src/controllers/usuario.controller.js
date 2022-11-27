const connectPG= require('../config/config-pg');
const bcrypt = require('bcryptjs')
const resgitroUsusario = async (req, res)=>{
    const {par_nombre, par_nickname, par_email, par_contrasenia}=req.body;
    const query = `INSERT INTO core.usuario(nombre, nickname, email, contrasenia) VALUES ($1, $2, $3, $4)`
    try {
        await connectPG.query(query, [par_nombre.toUpperCase(), par_nickname.toUpperCase(), par_email, bcrypt.hashSync(par_contrasenia, 10)]);
        res.status(200).json({
            estado:1,
            msg:'Usuario registrado con exito!!'
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            msg:'Error en el registro'
        })
    }
}
const actualizarNombre = async (req, res)=>{
    const {par_nombre, id_usuario}=req.body;
    const query = `UPDATE core.usuario SET nombre=$1, usuario_mod=$2, fecha_mod=now() WHERE id_usuario=$3 RETURNING nombre`
    try {
        let respuesta = await connectPG.query(query, [par_nombre.toUpperCase(), id_usuario, id_usuario]);
        const {nombre}=respuesta.rows[0];
        res.status(200).json({
            estado:1,
            msg:'Usuario actualizado con exito!!',
            contenido: nombre
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            msg:'Error en la actualizacion'
        })
    }
}
const actualizarNickname = async (req, res)=>{
    const {par_nickname, id_usuario}=req.body;
    const query = `UPDATE core.usuario SET nickname=$1, usuario_mod=$2, fecha_mod=now() WHERE id_usuario=$3 RETURNING nickname`
    try {
        let respuesta = await connectPG.query(query, [par_nickname.toUpperCase(), id_usuario, id_usuario]);
        const {nickname}=respuesta.rows[0];
        res.status(200).json({
            estado:1,
            msg:'Usuario actualizado con exito!!',
            contenido:nickname
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            msg:'Error en el registro'
        })
    }
}
const actualizarImg = async (req, res)=>{
    const {path}=req.file;
    const {id} = req.params;
    const { id_usuario }= req.body;
    const query = `UPDATE core.usuario SET img=$1, usuario_mod=$2, fecha_mod=now() WHERE id_usuario=$3`
    try {
        await connectPG.query(query, [path, id, id]);
        res.status(200).json({
            estado:1,
            msg:'Usuario actualizado con exito!!',
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            msg:'Error en el registro'
        })
    }
}

module.exports = {
    resgitroUsusario,
    actualizarNombre,
    actualizarNickname,
    actualizarImg
}