const jwt = require('jsonwebtoken');

const generarJWT = ( data = {} ) => {
    console.log(data, '---->');
    return new Promise( (resolve, reject) => {
        const payload = data;
        jwt.sign( payload, process.env.SECRETPRIVATEKEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if( err ){
                // console.log(err);
                reject('No se pudo generar token')
            } else {
                resolve(token);
            }
        })
    })
};

module.exports = {
    generarJWT
};