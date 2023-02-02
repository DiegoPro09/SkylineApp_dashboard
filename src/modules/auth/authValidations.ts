import { Rule } from "antd/es/form";
import regExp from "../../domain/regExp";

export const validations:{[fieldName:string]:Rule[]} = {
    name: [
        {
            required: true,
            message: 'Required name',
        },
        {
            pattern:regExp.name,
            message:'Nombre no valido'
        }
    ],
    
    lastname: [
        {
            required: true,
            message: 'Ingrese el apellido',
        },
        {
            pattern:regExp.name,
            message:'Apellido no valido'
        }
    ],

    dni:[
        {
            required:true,
            message:'Ingrese el dni'
        },
    ],

    phone:[
        {
            required:true,
            message:'Ingrese su telefono'
        },
    ],

    email:[
        {
            required:true,
            message:'Ingrese el mail'
        },
        {
            pattern:regExp.email,
            message:'Mail no válido'
        }
    ],

    question:[
        {
            required:true,
            message:'Debe ingresar la pregunta de seguridad'
        },
    ],
    
    answer:[
        {
            required:true,
            message:'Debe ingresar la respuesta'
        },
    ],
    
    password:[
        {
            required:true,
            message:'Contraseña obigatoria',
        },
        {
            pattern:regExp.password,
            message:'La contraseña debe tener al menos 8 caracteres de longitud, incluye al menos 1 letra minúscula y 1 letra mayúscula'
        }
    ],

    book:[
        {
            required:true,
            message:'Debe ingresar el número de libro'
        },
    ],

    invoice:[
        {
            required:true,
            message:'Debe ingresar el número de folio'
        },
    ],

    address:[
        {
            required:true,
            message:'Debe ingresar el domicilio'
        },
    ],

    inscription_date:[
        {
            required:true,
            message:'Debe ingresar la fecha de inscripción'
        },
    ],

    birthday_date:[
        {
            required:true,
            message:'Debe ingresar la fecha de nacimiento'
        },
    ],

    place_of_birth:[
        {
            required:true,
            message:'Debe ingresar el lugar de nacimiento'
        },
    ],

    province:[
        {
            required:true,
            message:'Debe ingresar la provincia'
        },
    ],

    nacionality:[
        {
            required:true,
            message:'Debe ingresar la nacionalidad'
        },
    ],

    fixed_phone:[
        {
            required:true,
            message:'Debe ingresar el teléfono fijo'
        },
    ],
}