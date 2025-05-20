import Sequelize from 'sequelize';
import db from '../config/db.js';


// definimos nuestro primer modelo
//Viaje:nombre de mi modelo
//viajes: este es el nombre de la tabla

export const Testimonial =db.define('testimoniales',{

nombre: {
    type: Sequelize.STRING
},
correo: {
    type: Sequelize.STRING
},
mensaje: {
    type: Sequelize.TEXT
},







});