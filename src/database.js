import mongoose from 'mongoose';
require('dotenv').config({path: './variables.env'});

mongoose.
    connect(process.env.DB_URL)
    .then((db) => {console.log('Conectado a MongoDB Atlas');})
    .catch((error) => {console.log('Error al conectarse a MongoDB Atlas')});