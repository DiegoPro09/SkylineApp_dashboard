import { Skeleton, Tabs } from 'antd'
import { useState } from 'react'
import Table from "../../components/table/CustomTable"
import { Course } from "../../domain/models/Course"
import { AppContent } from "../app/layout/appContent/AppContent"
import { CreateCourse } from "./actions/CreateCourse"
import { CreateCourseLevelDivision } from './actions/CreateCourseLevelDivision'
import { DeleteCourse } from './actions/DeleteCourse'
import { UpdateCourse } from './actions/UpdateCourse'
import { useAllCac } from './cache/hooks/useAllCourseAssignament'
import { useAllCld } from './cache/hooks/useAllCourseLevelDivisions'
import { useAllCourses } from "./cache/hooks/useAllCourses"
import { useCourseById } from './cache/hooks/useCourseById'
import { caColumns, cldColumns, courseColumns, courseDivisionColumns } from "./CourseColumns"

function CoursesPage() {

    const columns = courseColumns 
    const { data: courses, isLoading} = useAllCourses()
    const { data: cld} = useAllCld()
    const { data: cac} = useAllCac()

    const [selectedCourseId, setSelectedCourse] = useState<Course['id']>('')
    const selectedCourse = courses?.find((Course)=>Course.id === selectedCourseId) 

    return (
        <AppContent title={'Cursos'}>
            <div>
                <Tabs type="card" >
                    <Tabs.TabPane tab={'Cursos'} key={'1'}>
                        {isLoading ? <Skeleton /> :
                        <>
                            <div>
                                <UpdateCourse course={selectedCourse} key={selectedCourseId} />,
                                <DeleteCourse course={selectedCourse?.id}/>,
                                <CreateCourse />,
                            </div>
                            <Table
                                columns={columns}
                                data={courses}
                                isLoading={isLoading}
                                setSelected={setSelectedCourse}
                                singleSelection
                            />
                        </>}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={'Curso - Division'} key={'2'}>
                        {isLoading ? <Skeleton /> :
                        <>
                            <div>
                                <CreateCourseLevelDivision />
                            </div>
                            <Table
                                columns={cldColumns}
                                data={courseDivisionColumns(cld)}
                                isLoading={isLoading}
                                setSelected={setSelectedCourse}
                                singleSelection
                            />
                        </>}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={'Cursos - Materias'} key={'3'}>
                        {isLoading ? <Skeleton /> :
                        <Table
                            columns={columns}
                            data={caColumns(cac)}
                            isLoading={isLoading}
                            setSelected={setSelectedCourse}
                            singleSelection
                        />}
                    </Tabs.TabPane>
                </Tabs>
                
            </div>
        </AppContent>
    )
}

export default CoursesPage