import { ColumnsType } from "antd/es/table";
import Text from "../../components/typography/Text";
import { CLD } from "../../domain/models/CLD";
import { Course } from "../../domain/models/Course";
import { useLevelById } from "../levels/cache/hooks/useLevelById";
import { useCourseById } from "./cache/hooks/useCourseById";

export const courseColumns:ColumnsType<Course> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Número',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },   
]

export const cldColumns:ColumnsType<any> = [
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Curso',
        dataIndex: 'course'
    },
    {
        title: 'Nivel',
        dataIndex: 'level'
    },
    {
        title: 'Division',
        dataIndex: 'division'
    },
    {
        title: 'Especialidad',
        dataIndex: 'specialization'
    },
    {
        title: 'Año',
        dataIndex: 'year'
    },
]

export const courseDivisionColumns = (cld:any[]) => {
    console.log(cld)

    let data:any = []

    if(cld){
        for (let i = 0; i < cld?.length; i++) {
            const element = cld[i];
            
            data = [
                ...data,
                {
                    id: element.id,
                    course: element.course.number+' '+element.course.name,
                    level: element.level.name,
                    division: element.division.name+' '+element.division.turn,
                    specialization: element.specialization.name,
                    year: element.year
                }
            ]
        }
        return data
    }
}

export const courseAssignamentColumns:ColumnsType<any> = [
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Curso',
        dataIndex: 'course'
    },
    {
        title: 'Nivel',
        dataIndex: 'level'
    },
    {
        title: 'Division',
        dataIndex: 'division'
    },
    {
        title: 'Especialidad',
        dataIndex: 'specialization'
    },
    {
        title: 'Año',
        dataIndex: 'year'
    },
]

export const caColumns = (cac:any[]) => {
    console.log(cac)

    let data:any = []

    /*if(cld){
        for (let i = 0; i < cld?.length; i++) {
            const element = cld[i];
            
            data = [
                ...data,
                {
                    id: element.id,
                    course: element.course.number+' '+element.course.name,
                    level: element.level.name,
                    division: element.division.name+' '+element.division.turn,
                    specialization: element.specialization.name,
                    year: element.year
                }
            ]
        }
        return data
    }*/
}