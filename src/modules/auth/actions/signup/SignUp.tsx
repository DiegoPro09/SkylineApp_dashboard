import React, { useState } from 'react'
import AuthCard from '../../../../components/cards/AuthCard'
import Logo from '../../../../assets/mdf-logo.png'
import { Alert, Button, Col, Form, Input, message, Row, Spin } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import './SignUp.css'
import { validations } from '../../authValidations'
import { useAction } from '../../../../shared/hooks/useAction'
import { signupReq, signupService } from '../../services/signupService'

export default function SignUp() {
    const labels = {
        firstname: <div style={{color: 'white'}}>Nombre</div>,
        lastname: <div style={{color: 'white'}}>Apellido</div>,
        email: <div style={{color: 'white'}}>Email</div>,
        dni: <div style={{color: 'white'}}>DNI</div>,
        phone: <div style={{color: 'white'}}>Teléfono</div>,
        question: <div style={{color: 'white'}}>Pregunta de seguridad</div>,
        answer: <div style={{color: 'white'}}>Respuesta</div>,
        password: <div style={{color: 'white'}}>Contraseña</div>,
        vpassword: <div style={{color: 'white'}}>Confirme la contraseña</div>,
    }

    const [err, setErr] = useState("")
    const [success, setSuccess] = useState(false)
    const successMessage = 'Usted se ha registrado correctamente, espere a que un administrador se comunique con usted'

    const {action, isLoading} = useAction<signupReq>({
        key:'signup',
        fn:signupService,
        onSuccess:(res)=>{
            message.success('Usted se ha registrado correctamente, espere a que un administrador se comunique con usted')
            setErr('')
            setSuccess(true)
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
            setSuccess(false)
        }
    })
    
    return (
        <>
            <AuthCard logo={Logo} style='100px'>
                <Form className='CardForm' onFinish={action} autoComplete='on' layout="vertical" encType='x-www-form-urlencoded' >
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
                        <Col span={18}>
                            <Form.Item name='question' label={labels.question} tooltip="Debe ingresar una pregunta de seguridad" rules={validations.question}>
                                <Input placeholder="Ingrese una pregunta de seguridad" />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5}>
                            <Form.Item name='answer' label={labels.answer} tooltip="Debe ingresar la respuesta" rules={validations.answer}>
                                <Input.Password className='CardFord' placeholder="Ingrese la respuesta" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item name='password' label={labels.password} tooltip="Debe ingresar la contraseña" rules={validations.password}>
                                <Input.Password className='CardFord' placeholder="Ingrese su contraseña" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Form.Item name='verif_password' label={labels.vpassword} tooltip="Repita la contraseña" rules={validations.password}>
                                <Input.Password className='CardFord' placeholder="Confirme la contraseña" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    { err && <> <Alert message={err} type="error" showIcon /><br/> </>  }
                    { success && <><Alert message={successMessage} type="success" showIcon />  <br/> </> }
                    { success && <Alert message={<a href='/'>Volver Atrás</a>} type="success" /> }

                    

                    <Button disabled={isLoading} block type="primary" htmlType="submit" className="login-form-button" style={{ display: success ? 'none' : '' }}>
                        {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/> : 'Registrarse'}
                    </Button>
                </Form>
            </AuthCard>
        </>
        
    )
}
