import { Testimonial } from '../models/Testimonial.js';

//Define una funcion asincrona para guardar un testimonial enviado por el formulario
const guardarTestimonial = async (req, res) => {

    //Extrae los campos enviados desde el formulario(body) del request
    const { nombre, correo, mensaje } = req.body;

    //Arreglo para almacenar posibles errores de validacion
    const errores = [];

    //Validaciones: si falta algun campo, agrega un mensaje de error
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' });
    }

    //Si hay errores, renderiza la vista de testimoniales con los errores y los datos ingresados
    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll(); // Consulta los testimoniales existentes

        return res.render('testimoniales', {
            pagina: 'Testimoniales', // Título de la página
            errores,                // Errores de validación
            nombre,                 // Datos ingresados por el usuario
            correo,
            mensaje,
            testimoniales           // Lista de testimoniales existentes
        });
    }

    //Si no hay errores, guarda el testimonial en la base de datos
    try {
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        });

        //Redirige al usuario a la página de testimoniales después de guardar
        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error); // Muestra el error en caso de que falle la operación
    }
}

export { guardarTestimonial };