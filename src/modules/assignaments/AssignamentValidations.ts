import { Rule } from "antd/lib/form"

export const assignamentValidations:{[fieldName:string]:Rule[]} = {
    name:[
        {
            required:true,
            message:'Nombre requerido',
        },
    ],
}
