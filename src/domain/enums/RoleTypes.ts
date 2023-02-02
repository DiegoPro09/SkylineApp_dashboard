export enum RoleTypesEnum{
    superadmin=1,
    admin=2,
    preceptor=3,
    teacher=4,
    user=5
}

export const RoleTypes = [
    {
        id : 1,
        value : RoleTypesEnum.superadmin,
        name: 'Super Administrador'
    },
    {
        id: 2,
        value : RoleTypesEnum.admin,
        name: 'Administrador'
    },
    {
        id: 3,
        value : RoleTypesEnum.preceptor,
        name: 'Preceptor'
    },
    {
        id: 4,
        value : RoleTypesEnum.teacher,
        name: 'Profesor'
    },
    {
        id: 5,
        value : RoleTypesEnum.user,
        name: 'Alumno'
    }
]