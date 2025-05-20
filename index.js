import express from 'express';
import router from './routes/index.js'; // Importar las rutas definidas en el archivo index.js
import db from './config/db.js'; // Importar la configuración de la base de datos

db.authenticate()
    .then( () => console.log('Conexión a la base de datos exitosa'))
    .catch( error => console.log(error)); // Manejo de errores en la conexión a la base de datos

const app = express();

const port = process.env.PORT || 3000;
// Middleware para analizar el cuerpo de las solicitudes
//ruta raiz
// inserta las opiniones, actualiza!!!!!!!!
app.use(express.urlencoded({ extended: true }));


//agregar el router
//soporta get y post delete y put
//agrega las diagonales en las rutas que usamos
app.use('/', router); // Usar las rutas definidas en el archivo index.js

app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto ${port}');
}
);
//app.use(express.json()); // Para analizar solicitudes JSON

app.set('view engine', 'pug'); // Establecer EJS como motor de plantillas

app.use((req, res, next) => {
    const year= new Date();
    res.locals.actualYear= year.getFullYear();
    res.locals.nombresitio ="Agencia de Viajaes"; // Nombre del sitio web
    next();
}
  );

  app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal!')
}
);