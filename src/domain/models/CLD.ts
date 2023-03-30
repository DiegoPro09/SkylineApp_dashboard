import { Course } from "./Course";
import { Division } from "./Division";
import { Level } from "./Level";
import { Specialization } from "./Specialization";

export interface CLD{
    id:string,
    course_id: Course['id'],
    level_id: Level['id'],
    division_id: Division['id'],
    specialization_id: Specialization['id'],
    year:string
}