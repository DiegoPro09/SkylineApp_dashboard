import { EditOutlined, EyeOutlined } from "@ant-design/icons"
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

export const ViewMoreUser:React.FC<{user?:User}>= ({user}) => {

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

    return (
        <>
        
            <CustomModal 
                action={()=>console.log('hola')}
                disabled={!canUpdate}
                title={updateUser}
                tooltiptitle={canUpdate ? updateUser : 'Debe seleccionar un usuario' }
                icon={<EyeOutlined/>} 
                buttonTitle={updateUser} 
            > 
                

                <Tabs type="card">
                    <Tabs.TabPane closable={false} tab={'Datos del usuario'} key="0">
                        <Form layout="vertical"autoComplete='on' initialValues={user}>
                            <Row>
                                <Col span={12}>
                                    <Form.Item name='first_name' label={labels.firstname} tooltip="Debe ingresar su nombre" rules={validations.name}>
                                        <Input placeholder="Ingrese su nombre"  disabled={true}/>
                                    </Form.Item>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={11}>
                                    <Form.Item name='last_name' label={labels.lastname} tooltip="Debe ingresar su nombre" rules={validations.name}>
                                        <Input placeholder="Ingrese su apellido"  disabled={true}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item name='email' label={labels.email} tooltip="Debe ingresar su email" rules={validations.email}>
                                        <Input placeholder="Ingrese su email"  disabled={true}/>
                                    </Form.Item>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={5}>
                                    <Form.Item name='dni' label={labels.dni} tooltip="Debe ingresar su dni" rules={validations.dni}>
                                        <Input placeholder="Ingrese su dni"  disabled={true}/>
                                    </Form.Item>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={5}>
                                    <Form.Item name='phone' label={labels.phone} tooltip="Debe ingresar su número de teléfono" rules={validations.phone}>
                                        <Input placeholder="Ingrese su número de teléfono"  disabled={true}/>
                                    </Form.Item>
                                </Col>
                            </Row>       
                            <Row>
                                <Col span={12}>
                                    <SelectUserRole role={user?.role_id} onChange={()=>console.log('asd')}/>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={11}>
                                    <SelectUserState state={user?.state} onChange={()=>console.log('asd')}/>
                                </Col>
                            </Row><br/>
                            <InputPassword />        
                        </Form>
                    </Tabs.TabPane>
                    { user?.role_id === 5 || user?.role_id === 6 && 
                        <Tabs.TabPane tab={'Datos personales'} key='1'>
                            <Form layout="vertical" autoComplete='on' initialValues={user}>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item name='book' label='Libro' tooltip="Debe ingresar número de libro" rules={validations.book}>
                                            <Input placeholder="Ingrese el número de libro"  disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='invoice' label='Folio' tooltip="Debe ingresar el número de folio" rules={validations.invoice}>
                                            <Input placeholder="Ingrese el número de folio"  disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                </Row>  
                                <Row>
                                    <Col span={24}>
                                        <Form.Item name='adress' label='Domicilio' tooltip="Debe ingresar el domicilio" rules={validations.address}>
                                            <Input placeholder="Ingrese el domicilio" disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item name='inscription_date' label='Fecha de inscripción' tooltip="Debe ingresar la fecha de inscripción" rules={validations.inscription_date}>
                                            <DatePicker placeholder="Ingrese la fecha de inscripción" style={{width: '100%'}}  disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='birthday_date' label='Fecha de nacimiento' tooltip="Debe ingresar la fecha de nacimiento" rules={validations.birthday_date}>
                                            <DatePicker placeholder="Ingrese la fecha de nacimiento" style={{width: '100%'}} disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                </Row>     
                                <Row>
                                    <Col span={8}>
                                        <Form.Item name='place_of_birth' label='Lugar de nacimiento' tooltip="Debe ingresar el lugar de nacimiento" rules={validations.place_of_birth}>
                                            <Input placeholder="Ingrese el lugar de nacimiento"  disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={7}>
                                        <Form.Item name='province' label='Provincia' tooltip="Debe ingresar la provincia" rules={validations.province}>
                                            <Input placeholder="Ingrese la provincia" disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={7}>
                                        <Form.Item name='nacionality' label='Nacionalidad' tooltip="Debe ingresar la nacionalidad" rules={validations.nacionality}>
                                            <Input placeholder="Ingrese la nacionalidad"  disabled={true}/>
                                        </Form.Item>
                                    </Col>
                                </Row>   
                                <Row>
                                    <Col span={12}>
                                        <SelectUserGenre onChange={()=>console.log('asd')} />
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Form.Item name='fixed_phone' label='Teléfono fijo' tooltip="Debe ingresar el teléfono fijo" rules={validations.fixed_phone}>
                                            <Input placeholder="Ingrese el teléfono fijo"  disabled={true}/>
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
