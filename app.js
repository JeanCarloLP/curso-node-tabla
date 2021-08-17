const { newFile } = require('./helper/multiplicar');
const argv = require('./config/yargs');

console.clear();

newFile(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo, 'created') )
    .catch( err => console.log(err) );

//console.log( process.argv );
//console.log( argv );
//console.log( 'base: yargs', argv.base );

// // obtner los argumentos que vienen de la consola
// console.log(process.argv);
// // primeramente nos muestra el path de nuestra aplicacion de manera global
// // segundo nos aparece donnde se encuentra ejecutada la aplicación

// const [ , , arg3 = 'base=2' ] = process.argv;
// const [ , base = 2 ] = arg3.split('=');
// console.log( base );
//const base = 2;