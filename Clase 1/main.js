/*function suma(a, b) {

    if (a === undefined || b === undefined) {
        return 0;
    }

    return a + b;
}

console.log(suma());*/


const user = {
    'nombre': "Juan",
    'correo': "pepe@gmail.com",
    'id': 1111125,
    'domicilio': 'apsdo 23',
    'lastLogin': '07/09/2022',
    'country': 'Argentina'
}

function validarUsuario({nombre,correo, ...otrosDataos}) {    
    
    console.log(nombre);
    console.log(correo);    
    
    return 'hola';
}

console.log(validarUsuario(user));

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ['a','b','c','d','e','f'];

//const array3 = array1.concat(array2);
const array3 = [...array1, ...array2];
console.log(array3);
import { suma } from './suma1';
export const suma1 = (a=0, b=0) => a + b;

