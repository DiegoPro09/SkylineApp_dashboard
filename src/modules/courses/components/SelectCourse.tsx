import { useEffect, useState } from "react"
import CustomSelect from "../../../components/select/CustomSelect"
import { useAllCourses } from "../cache/hooks/useAllCourses"

const SelectCourse:React.FC<{onChange:(course:any)=>void}> = ({onChange}) => {
    const { data: courses, isLoading} = useAllCourses()

    const roleTitle = 'Course'
    const [course, setCourse] = useState(() => courses?.find((item)=> item.id))

    useEffect(()=>{
        if (course){
            handleSelect(course.id)
        }
    }, [course])

    const handleSelect = (course:any)=>{
        onChange(course)
    }

    return (
        <>
        <CustomSelect 
            data={courses}  
            onChange={setCourse} 
            name={"course_id"} 
            labels={'Curso'}
            tooltips={roleTitle}
            placeHolder={'Seleccione el curso a relacionar'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar el curso',
            },
            ]}
            getLabel={(data)=>data.number + ' ' + data.name}
        />
        </>
    )
}

export default SelectCourse