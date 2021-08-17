const { number } = require('yargs');

const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite max de multiplicación'
        }
    })
    .check( (argv, options) => {
        console.clear();

        if( isNaN( argv.b ))
            throw 'La base tiene que ser un número'
        if( isNaN( argv.h ))
            throw 'El limite tiene que ser un número'
            
        return true;
    })
    .argv;

module.exports = argv;