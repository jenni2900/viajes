// Importar los modelos Viajes y Testimoniales desde sus respectivos archivos
import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

//Controlador para renderizar la pagina de inicio
const paginaInicio = async (req, res) => {

    const promises = []; // Arreglo para almacenar las promesas de consulta a la base de datos

    // Agrega la consulta para obtener los primeros 3 viajes
    promises.push(Viaje.findAll({ 
        limit: 3 
    }));

    // Agrega la consulta para obtener los primeros 3 testimoniales
    promises.push(Testimonial.findAll({ 
        limit: 3
    }));

    try {
        // Ejecuta todas las promesas en paralelo y espera su resultado
        const resultado = await Promise.all(promises);

        console.log(resultado[0]); //Muestra en consola los viajes obtenidos
        
        // Renderiza la vista de inicio con los datos obtenidos y variables adicionales
        res.render('inicio', {
            viajes: resultado[0], // Viajes obtenidos
            testimoniales: resultado[1], // Testimoniales obtenidos
            clase:'home',        // Clase Css opcional para diseño
            pagina:'Inicio',     // Titulo de la pagina
        });
    } catch (error) {
        console.log(error); // Muestra el error si algo falla
    }
}

//Controlador para renderizar la pagina de nosotros
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina:'Nosotros', // Titulo de la pagina
    });
}

//Controlador para renderizar la pagina de viajes con todos los registros
const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll(); // consulta todos los viajes de la base de datos

    res.render('viajes', {
        pagina: 'Próximos Viajes', // Titulo de la pagina
        viajes,                    // Los viajes obtenidos  
    });
}

//Controlador para mostrar todos los testimoniales
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll(); // consulta todos los testimoniales de la base de datos

        res.render('testimoniales', {
            testimoniales,           // Datos de los testimoniales 
            page: 'Testimoniales', // Titulo de la pagina
        });
    } catch (error) {
        console.log(error); // Muestra el error si algo falla
    }
}

//Controlador para mostrar el detalle de un viaje segun su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params; // Extrae el parametro slug de la URL

    try {
        //Busca un viaje que coincida con el slug recibido
        const viaje = await Viaje.findOne({ where: { slug } }); // Consulta el viaje con el slug

        // Renderiza la vista con los detalles del viaje encontrado
        res.render('viaje', {
            pagina: 'Información Viaje', // Titulo de la pagina
            viaje                         // Datos del viaje
        });
    } catch (error) {
        console.log(error); // Muestra el error si algo falla
    }
}
// Exporta todos los controladores para ser usados en las rutas
export { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
}