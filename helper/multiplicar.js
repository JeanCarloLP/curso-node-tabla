const fs = require('fs');
const colors = require('colors');

// Primera forma de trabajar con Promesas
// const newFile = ( base = 1 ) => {
//     return new Promise( ( resolve, reject) => {
//         console.log('===============================');
//         console.log(`        Tabla del `, base       );
//         console.log('===============================');
        
//         let result = '';
//         for (let i=1; i <= 10; i++)
//             result += `${base} x ${i} =  ${base * i}\n`;

//         console.log(result);
//         fs.writeFileSync( `tabla-${base}.txt`, result );
//         resolve ( `tabla-${base}.txt` );
//     });
// }

// Segunda forma con una funcion async
const newFile = async( base = 1, listar = false, limite = 10 ) => {
    //return new Promise( ( resolve, reject) => {
        try{
            let result = '';
            
            for (let i=1; i <= limite; i++)
                result += `${base} x ${i} =  ${base * i}\n`;

            if ( listar ){
                console.log('==============================='.green);
                console.log(`        Tabla del `.green, colors.green(base));
                console.log('==============================='.green);
                console.log(result);
            }

            fs.writeFileSync( `./salida/tabla-${base}.txt`, result );
            
            return `tabla-${base}.txt`;
            
        } catch (error) {
            throw error;
        }
    };
//}

module.exports = {
    newFile
}