// Importar framework express, que permite crear aplicaciones web en Node.js
import express from 'express';
//crear una instancia de express
//este enrutador se encargará de manejar las rutas de la aplicación
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

//ruta para mostrar todos los viajes
router.get('/viajes', paginaViajes);
//ruta para mostrar un viaje en específico
//el slug es un identificador único para cada viaje
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

//ruta para guardar el testimonio
//esta ruta se encarga de recibir los datos del formulario y guardarlos
router.post('/testimoniales', guardarTestimonial);

//ruta para mostrar el formulario de contacto
//exportar el enrutador para que pueda ser utilizado en otras partes de la aplicación
export default router;