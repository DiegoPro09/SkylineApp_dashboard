import { PlusOutlined } from "@ant-design/icons";
import { Col, Form, Input, message, Row } from "antd";
import { useState } from "react"
import { CustomModal } from "../../../components/modal/CustomModal";
import { Assignament } from "../../../domain/models/Assignaments";
import { useAction } from "../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../shared/reactQuery/QueryClient";
import { assignamentValidations } from "../AssignamentValidations";
import { assignamentsCacheKeys } from "../cache/AssignamentCacheKeys";
import { createAssignamentService } from "../services/createAssignamentService";

export const CreateAssignament:React.FC = () => {

    const nameTitle = 'Nombre de la materia'
    
    const [error, setErr] = useState("")
    const [form] = Form.useForm<Assignament>();

    //Crea la Materia en la DB
    const {action, isLoading, isSuccess,reset} = useAction<Assignament>({
        key:'create',
        fn:(assignamentData)=> createAssignamentService(assignamentData),
        onSuccess:(res)=>{
            message.success('Materia creada correctamente!')
            ReactQueryClient.invalidateQueries(assignamentsCacheKeys.all())
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
            action(data)
        })
    }

    return (
        <>
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={'Crear Materia'} 
                tooltiptitle={'Crear Materia'} 
                icon={<PlusOutlined/>} 
                closeOn={isSuccess}
                isLoading={isLoading} 
                buttonTitle={'Crear'} 
            >
                <Form form={form} layout="vertical" autoComplete='on'>
                    <Row>
                        <Col span={10}>
                            <Form.Item name="name" label={'Nombre'} tooltip={nameTitle} rules={assignamentValidations.name}>
                                <Input placeholder={nameTitle}/>
                            </Form.Item>
                        </Col> 
                    </Row>
                </Form>
            </CustomModal>
        </>
    )
}
