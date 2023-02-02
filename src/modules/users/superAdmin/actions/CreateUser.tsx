import { PlusOutlined } from "@ant-design/icons"
import { Col, Form, Input, message, Row } from "antd"
import { useState } from "react"
import InputPassword from "../../../../components/inputs/InputPassword"
import { CustomModal } from "../../../../components/modal/CustomModal"
import { RoleTypesEnum } from "../../../../domain/enums/RoleTypes"
import { useAction } from "../../../../shared/hooks/useAction"
import { ReactQueryClient } from "../../../../shared/reactQuery/QueryClient"
import { validations } from "../../../auth/authValidations"
import { userCacheKeys } from "../../cache/userCacheKeys"
import { createReq, createUserService } from "../../services/createUserService"
import SelectUserRole from "../components/SelectUserRole"
import SelectUserState from "../components/SelectUserState"

export const CreateUser:React.FC = () => {
    const labels = {
        firstname: <div >Nombre</div>,
        lastname: <div >Apellido</div>,
        email: <div >Email</div>,
        dni: <div >DNI</div>,
        phone: <div >Teléfono</div>,
        question: <div >Pregunta de seguridad</div>,
        answer: <div >Respuesta</div>,
        password: <div >Contraseña</div>,
        vpassword: <div >Confirme la contraseña</div>,
    }

    const [error, setErr] = useState("")
    const [form] = Form.useForm<createReq>();
    const [stateUser, setStateUser] = useState<boolean>()
    const [userRole, setUserRole] = useState()

    //Crea el usuario en la DB
    const {action, isLoading, isSuccess,reset} = useAction<createReq>({
        key:'signup',
        fn:(userData)=> createUserService(userData),
        onSuccess:(res)=>{
            message.success('Usuario creado correctamente!')
            ReactQueryClient.invalidateQueries(userCacheKeys.all())
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
                ...data,
                state: stateUser,
                role_id: userRole
            })
        })
    }

    return (
        <>
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={'Crear usuario'} 
                tooltiptitle={'Crear usuario'}
                icon={<PlusOutlined/>} 
                closeOn={isSuccess}
                isLoading={isLoading} 
                buttonTitle={'Añadir'}
            >
                <Form form={form} layout="vertical" autoComplete='on' initialValues={{state: false, role: RoleTypesEnum.user}}>
                    <Row>
                        <Col span={12}>
                            <Form.Item name='first_name' label={labels.firstname} tooltip="Debe ingresar su nombre" rules={validations.name}>
                                <Input placeholder="Ingrese su nombre" />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Form.Item name='last_name' label={labels.lastname} tooltip="Debe ingresar su nombre" rules={validations.name}>
                                <Input placeholder="Ingrese su apellido" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item name='email' label={labels.email} tooltip="Debe ingresar su email" rules={validations.email}>
                                <Input placeholder="Ingrese su email" />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5}>
                            <Form.Item name='dni' label={labels.dni} tooltip="Debe ingresar su dni" rules={validations.dni}>
                                <Input placeholder="Ingrese su dni" />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5}>
                            <Form.Item name='phone' label={labels.phone} tooltip="Debe ingresar su número de teléfono" rules={validations.phone}>
                                <Input placeholder="Ingrese su número de teléfono" />
                            </Form.Item>
                        </Col>
                    </Row>       
                    <Row>
                        <Col span={12}>
                            <SelectUserRole onChange={setUserRole}/>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <SelectUserState state={false} onChange={setStateUser} />
                        </Col>
                    </Row><br/>
                    <InputPassword /> 
                </Form>
            </CustomModal>
        </>
    )
}
