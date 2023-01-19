import { RoleTypesEnum } from "../enums/RoleTypes";

export interface User{
    id?:string,
    first_name:string,
    last_name:string,
    dni:string,
    phone:number,
    email:string,
    password:string,
    question:string,
    answer:string,
    state:boolean,
    role: RoleTypesEnum
}