import { Course } from "../../../domain/models/Course";
import { useState } from 'react'
import { Col, Form, Input, message, Row } from "antd";
import { useAction } from "../../../shared/hooks/useAction";
import { updateCourseService } from "../services/updateCourseService";
import { ReactQueryClient } from "../../../shared/reactQuery/QueryClient";
import { courseCacheKeys } from "../cache/courseCacheKeys";
import { CustomModal } from "../../../components/modal/CustomModal";
import { EditOutlined } from "@ant-design/icons";
import { validations } from "../../auth/authValidations";

export const UpdateCourse:React.FC<{course?:Course}> = ({course}) => {
    const canUpdate = !!course
    const updateAssignament = 'Actualizar curso'

    const [err, setErr] = useState("")
    const [form] = Form.useForm();

    //Actualiza los datos en la DB
    const {action, isLoading, isSuccess} = useAction({
        key:'update',
        fn:(courseData)=> updateCourseService(course?.id, courseData),
        onSuccess:(res)=>{
            message.success('Curso actualizado correctamente!')
            ReactQueryClient.invalidateQueries(courseCacheKeys.all())
            form.resetFields()
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    //Action que manda los datos al modal
    const handleAction = () => {
        //validamos los campos antes de mandar el formulario
        form.validateFields()
        .then((data)=>{
            //console.log(data)
            action(data);
        })
    }

    return (
        <>

            <CustomModal 
                disabled={!canUpdate}
                error={err}
                closeOn={isSuccess}
                action={handleAction} 
                title={updateAssignament}
                tooltiptitle={canUpdate ? updateAssignament : 'Debe seleccionar un curso' }
                icon={<EditOutlined/>} 
                isLoading={isLoading} 
                buttonTitle={updateAssignament} 
                shape='default'
            > 
                <Form layout="vertical" form={form} autoComplete='on' initialValues={course}>
                    <Row>
                        <Col span={12}>
                            <Form.Item name="number" label={'Número'} tooltip={'Ingrese el numero del curso'} rules={validations.number}>
                                <Input  />
                            </Form.Item> 
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Form.Item name="name" label={'Nombre'} tooltip={'Ingrese el nombre del curso'} rules={validations.name}>
                                <Input  />
                            </Form.Item>
                        </Col>
                    </Row>      
                </Form>
            </CustomModal>
        </>
    )
}