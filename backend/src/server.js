const express = require('express')
const cors = require('cors');

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.APP_PORT;
        this.pathGen = '/api/'
        this.middelwares();
        this.routes();

    }

    middelwares(){
        //CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use( express.json() );
    }
    routes(){
        this.app.use(this.pathGen, require('./routes/usuario.routing'));
        this.app.use(this.pathGen, require('./routes/login.routing'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;