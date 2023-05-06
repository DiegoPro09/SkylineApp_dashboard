import { EditOutlined } from "@ant-design/icons"
import { Col, DatePicker, Form, Input, message, Row, Tabs } from "antd"
import { useState } from "react"
import InputPassword from "../../../../components/inputs/InputPassword"
import { CustomModal } from "../../../../components/modal/CustomModal"
import { User } from "../../../../domain/models/User"
import { useAction } from "../../../../shared/hooks/useAction"
import { ReactQueryClient } from "../../../../shared/reactQuery/QueryClient"
import { validations } from "../../../auth/authValidations"
import { userCacheKeys } from "../../cache/userCacheKeys"
import { updateAnyUserService } from "../../services/updateAnyUser"
import SelectUserGenre from "../components/SelectUserGenre"
import SelectUserRole from "../components/SelectUserRole"
import SelectUserState from "../components/SelectUserState"

export const UpdateUser:React.FC<{user?:User}>= ({user}) => {

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

    const canUpdate = !!user
    const updateUser = 'Actualizar Usuario'

    const [err, setErr] = useState("")
    const [disabledPassword, setDisabledPassword] = useState(true);
    const [form] = Form.useForm();
    const [stateUser, setStateUser] = useState()
    const [userRole, setUserRole] = useState()
    const [userGenre, setUserGenre] = useState()
    const [userInscription, setUserInscription] = useState('')
    const [userBirthday, setUserBirthday] = useState('')



    const toggle = () => {
        setDisabledPassword(!disabledPassword);
    };

    //Actualiza los datos en la DB
    const {action, isLoading, isSuccess} = useAction({
        key:'update',
        fn:(userData)=> updateAnyUserService(user?.id, userData),
        onSuccess:(res)=>{
            message.success('Usuario Actualizado!')
            ReactQueryClient.invalidateQueries(userCacheKeys.all())
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const onChangeI = (date:any, dateString:any) => {
        setUserInscription(dateString)
    };

    const onChangeB = (date:any, dateString:any) => {
        setUserBirthday(dateString)
    };

    //Action que manda los datos al modal
    const handleAction = () => {
        //validamos los campos antes de mandar el formulario
        form.validateFields()
        .then((data)=>{
            user?.role_id === 5 ? 
                action({
                    ...data,
                    state: stateUser,
                    role_id: userRole,
                    genre_id: userGenre,
                    inscription_date: userInscription,
                    birthday_date: userBirthday
                })
            :
                action({
                    ...data,
                    state: stateUser,
                    role_id: userRole
                });
        })
    }

    return (
        <>
        
            <CustomModal 
                disabled={!canUpdate}
                error={err}
                closeOn={isSuccess}
                action={handleAction} 
                title={updateUser}
                tooltiptitle={canUpdate ? updateUser : 'Debe seleccionar un usuario' }
                icon={<EditOutlined/>} 
                isLoading={isLoading} 
                buttonTitle={updateUser} 
            > 
                

                <Tabs type="card">
                    <Tabs.TabPane closable={false} tab={'Datos del usuario'} key="0">
                        <Form layout="vertical" form={form} autoComplete='on' initialValues={user}>
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
                                    <SelectUserRole role={user?.role_id} onChange={setUserRole}/>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={11}>
                                    <SelectUserState state={user?.state} onChange={setStateUser} />
                                </Col>
                            </Row><br/>
                            <InputPassword />        
                        </Form>
                    </Tabs.TabPane>
                    { user && user.role_id > 4 && 
                        <Tabs.TabPane tab={'Datos personales'} key='1'>
                            <Form layout="vertical" form={form} autoComplete='on' initialValues={user}>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item name='book' label='Libro' tooltip="Debe ingresar número de libro" rules={validations.book}>
                                            <Input placeholder="Ingrese el número de libro" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='invoice' label='Folio' tooltip="Debe ingresar el número de folio" rules={validations.invoice}>
                                            <Input placeholder="Ingrese el número de folio" />
                                        </Form.Item>
                                    </Col>
                                </Row>  
                                <Row>
                                    <Col span={24}>
                                        <Form.Item name='adress' label='Domicilio' tooltip="Debe ingresar el domicilio" rules={validations.address}>
                                            <Input placeholder="Ingrese el domicilio" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item name='inscription_date' label='Fecha de inscripción' tooltip="Debe ingresar la fecha de inscripción" rules={validations.inscription_date}>
                                            <DatePicker placeholder="Ingrese la fecha de inscripción" style={{width: '100%'}} onChange={onChangeI} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='birthday_date' label='Fecha de nacimiento' tooltip="Debe ingresar la fecha de nacimiento" rules={validations.birthday_date}>
                                            <DatePicker placeholder="Ingrese la fecha de nacimiento" style={{width: '100%'}} onChange={onChangeB}/>
                                        </Form.Item>
                                    </Col>
                                </Row>     
                                <Row>
                                    <Col span={8}>
                                        <Form.Item name='place_of_birth' label='Lugar de nacimiento' tooltip="Debe ingresar el lugar de nacimiento" rules={validations.place_of_birth}>
                                            <Input placeholder="Ingrese el lugar de nacimiento" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={7}>
                                        <Form.Item name='province' label='Provincia' tooltip="Debe ingresar la provincia" rules={validations.province}>
                                            <Input placeholder="Ingrese la provincia" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={7}>
                                        <Form.Item name='nacionality' label='Nacionalidad' tooltip="Debe ingresar la nacionalidad" rules={validations.nacionality}>
                                            <Input placeholder="Ingrese la nacionalidad" />
                                        </Form.Item>
                                    </Col>
                                </Row>   
                                <Row>
                                    <Col span={12}>
                                        <SelectUserGenre onChange={setUserGenre}/>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='fixed_phone' label='Teléfono fijo' tooltip="Debe ingresar el teléfono fijo" rules={validations.fixed_phone}>
                                            <Input placeholder="Ingrese el teléfono fijo" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Tabs.TabPane> 
                    }
                </Tabs>
            </CustomModal>
        </>
    )
}
