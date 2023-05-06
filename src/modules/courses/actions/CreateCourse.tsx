import { PlusOutlined } from '@ant-design/icons';
import { Col, Form, Input, message, Row } from 'antd';
import { useState } from 'react'
import { CustomModal } from '../../../components/modal/CustomModal';
import { useAction } from '../../../shared/hooks/useAction';
import { ReactQueryClient } from '../../../shared/reactQuery/QueryClient';
import { validations } from '../../auth/authValidations';
import { courseCacheKeys } from '../cache/courseCacheKeys';
import { createCourseReq, createCourseService } from '../services/createCourseService';

export const CreateCourse:React.FC = () => {
    const labels = {
        number: <div >Número</div>,
        name: <div >Nombre</div>
    }

    const [error, setErr] = useState("")
    const [form] = Form.useForm<createCourseReq>();

    //Crea el usuario en la DB
    const {action, isLoading, isSuccess,reset} = useAction<createCourseReq>({
        key:'signup',
        fn:(courseData)=> createCourseService(courseData),
        onSuccess:(res)=>{
            message.success('Curso creado correctamente!')
            ReactQueryClient.invalidateQueries(courseCacheKeys.all())
            form.resetFields()
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

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
                ...data
            })
        })
    }

    return (
        <>
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={'Crear curso'} 
                tooltiptitle={'Crear curso'}
                icon={<PlusOutlined/>} 
                closeOn={isSuccess}
                isLoading={isLoading} 
                buttonTitle={'Crear curso'}
                shape='default'
            >
                <Form form={form} layout="vertical" autoComplete='on'>
                    <Row>
                        <Col span={12}>
                            <Form.Item name='number' label={labels.number} tooltip="Debe ingresar el numero" rules={validations.number}>
                                <Input placeholder="Ingrese el número" />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Form.Item name='name' label={labels.name} tooltip="Debe ingresar el nombre" rules={validations.name}>
                                <Input placeholder="Ingrese su apellido" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </CustomModal>
        </>
    )
}
