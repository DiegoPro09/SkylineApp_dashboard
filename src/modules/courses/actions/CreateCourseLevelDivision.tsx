import { ApiOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, message, Row } from "antd";
import { useState } from "react";
import { CustomModal } from "../../../components/modal/CustomModal";
import { Course } from "../../../domain/models/Course";
import { useAction } from "../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../shared/reactQuery/QueryClient";
import { courseCacheKeys } from "../cache/courseCacheKeys";
import SelectCourse from "../components/SelectCourse";
import SelectLevel from "../../levels/components/SelectLevel";
import { createCldReq, createCourseLevelDivisionService } from "../services/createCourseLevelDivision";
import SelectDivision from "../../divisions/components/SelectDivision";
import SelectSpecialization from "../../specializations/components/SelectSpecialization";
import { validations } from "../../auth/authValidations";

export const CreateCourseLevelDivision:React.FC = () => {
    const labels = {
        course: <div >Curso</div>,
        level: <div >Nivel</div>,
        division: <div >Division</div>,
        year: <div >Año</div>
    }

    const [error, setErr] = useState("")
    const [form] = Form.useForm<createCldReq>();
    const [course, setCourse] = useState()
    const [level, setLevel] = useState()
    const [division, setDivision] = useState()
    const [specialization, setSpecialization] = useState()
    const [year, setYear] = useState()

    //Crea el usuario en la DB
    const {action, isLoading, isSuccess,reset} = useAction<createCldReq>({
        key:'signup',
        fn:(userData)=> createCourseLevelDivisionService(userData),
        onSuccess:(res)=>{
            message.success('Curso/Division relacionados correctamente!')
            ReactQueryClient.invalidateQueries(courseCacheKeys.all())
            form.resetFields()
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const onChange = (date:any, dateString:any) => {
        setYear(dateString)
    };

    const handleReset = () =>{
        form.resetFields()
        reset()
        setErr('')
    }

    //Action que manda los datos al modal
    const handleAction = () => {
        //validamos los campos antes de mandar el formulario
        form.validateFields()
        .then((data)=>{
            action({
                ...data,
                course_id: course,
                level_id: level,
                specialization_id: specialization,
                division_id: division,
                year: year
            })
        })
    }

    return (
        <>
            <CustomModal
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={'Relacionar Curso/Division'} 
                tooltiptitle={'Relacionar Curso/Division'}
                icon={<ApiOutlined />} 
                closeOn={isSuccess}
                isLoading={isLoading} 
                buttonTitle={'Relacionar curso/dvision'}
                shape='default'
            >   
                <Form form={form} layout="vertical" autoComplete='on'>
                    <Row>
                        <Col span={11}>
                            <SelectCourse onChange={setCourse}/>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <SelectLevel onChange={setLevel}/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col span={11}>
                            <SelectDivision onChange={setDivision}/>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <SelectSpecialization onChange={setSpecialization}/>
                        </Col>
                    </Row><br/>
                    <Form.Item name='year' label='Año' tooltip="Debe ingresar el año" rules={validations.year}>
                        <DatePicker onChange={onChange} picker="year" style={{width: '100%'}} placeholder='Seleccione el año' />
                    </Form.Item>
                </Form>
            </CustomModal>
        </>
    )
}
