export const courseCacheKeys = {
    all:()=>['course'],
    byId:(id:string)=>['course',id],
}

export const cldCacheKeys = {
    all:()=>['course_level_divisions'],
    byId:(id:string)=>['course_level_divisions',id],
}   

export const cacCacheKeys = {
    all:()=>['course_assignaments'],
    byId:(id:string)=>['course_assignaments',id],
}   