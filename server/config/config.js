//=================
// Puerto
//=================
process.env.PORT = process.env.PORT || 3000;

//=================
// Entorno
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
// Vencimiento del Token
//=================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=================
// Seed de autenticación
//=================
process.env.SEED = process.env.SEED || 'secret';
//=================
// Base de datos
//=================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=================
// Google client ID
//=================
process.env.CLIENT_ID = process.env.CLIENT_ID || '910602292662-le60sgou4g01fbhkrf1q4iek7vh55bmu.apps.googleusercontent.com'