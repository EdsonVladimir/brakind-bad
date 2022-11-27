const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/storage/img')
    },
    filename: function (req, file, cb) {
        //console.log(file)

        const dividiendoNombre = file.originalname.split('.');

        const extencion = dividiendoNombre[dividiendoNombre.length-1]
        const uniqueSuffix = uuidv4()+'.'+extencion;
        cb(null, uniqueSuffix, extencion)

    }
})
const upload = multer({ storage })

module.exports= upload;