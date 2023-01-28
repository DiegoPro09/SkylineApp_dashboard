export const userCacheKeys = {
    all:()=>['user'],
    byId:(id:string)=>['user',id],
    byEmail:(email:string)=>['user',email],
    byDni: (dni:string)=>['user', dni]
}