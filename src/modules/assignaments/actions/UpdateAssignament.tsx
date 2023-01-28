import { EditOutlined } from '@ant-design/icons'
import { Col, Form, Input, message, Row } from 'antd'
import React, { useState } from 'react'
import { CustomModal } from '../../../components/modal/CustomModal'
import { Assignament } from '../../../domain/models/Assignaments'
import { useAction } from '../../../shared/hooks/useAction'
import { ReactQueryClient } from '../../../shared/reactQuery/QueryClient'
import { assignamentValidations } from '../AssignamentValidations'
import { assignamentsCacheKeys } from '../cache/AssignamentCacheKeys'
import { updateAssignamentService } from '../services/updateAssignamentService'

export const UpdateAssignament:React.FC<{assignament?:Assignament}> = ({assignament}) => {
    const canUpdate = !!assignament
    const updateAssignament = 'Actualizar materia'

    const [err, setErr] = useState("")
    const [form] = Form.useForm();

    //Actualiza los datos en la DB
    const {action, isLoading, isSuccess} = useAction({
        key:'update',
        fn:(assignamentData)=> updateAssignamentService(assignament?.id, assignamentData),
        onSuccess:(res)=>{
            message.success('Materia actualizada correctamente!')
            ReactQueryClient.invalidateQueries(assignamentsCacheKeys.all())
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
                tooltiptitle={canUpdate ? updateAssignament : 'Debe seleccionar una materia' }
                icon={<EditOutlined/>} 
                isLoading={isLoading} 
                buttonTitle={updateAssignament} 
            > 
                <Form layout="vertical" form={form} autoComplete='on' initialValues={assignament}>
                    <Row>
                        <Col span={7}>
                        <Form.Item name="name" label={'Nombre'} tooltip={'Ingrese el nombre de la materia'} rules={assignamentValidations.name}>
                            <Input  />
                        </Form.Item>
                        </Col>
                    </Row>         
                </Form>
            </CustomModal>
        </>
    )
}