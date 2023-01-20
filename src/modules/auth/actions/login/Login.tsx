import React, { useState } from 'react'
import AuthCard from '../../../../components/cards/AuthCard'
import Logo from '../../../../assets/mdf-logo.png'
import { Alert, Button, Col, Form, Input, message, Row, Spin } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons'
import '../signup/SignUp.css'
import { validations } from '../../authValidations'
import { useAction } from '../../../../shared/hooks/useAction'
import { AuthRes, loginReq, loginService } from '../../services/loginService'
import { useAuthContext } from '../../AuthContext'

export default function Login() {
    const labels = {
        email: <div style={{color: 'white'}}>Email</div>,
        dni: <div style={{color: 'white'}}>DNI</div>,
        answer: <div style={{color: 'white'}}>Respuesta</div>,
        password: <div style={{color: 'white'}}>Contraseña</div>,
        vpassword: <div style={{color: 'white'}}>Confirme la contraseña</div>,
    }

    const {setLoggedIn} = useAuthContext()

    const [err, setErr] = useState("")
    const [success, setSuccess] = useState(false)

    const {action, isLoading} = useAction<loginReq, AuthRes>({
        key:'login',
        fn:loginService,
        onSuccess:(res)=>{
            message.success('Ingresando..')
            setErr('')
            setSuccess(true) 
            setLoggedIn(res.data.data, res.data.user)
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
            setSuccess(false)
            console.log(error.response.data.message)
        }
    })
    
    return (
        <>
            <AuthCard logo={Logo}>
                <Form className='CardForm' onFinish={action} autoComplete='on' layout="vertical" encType='x-www-form-urlencoded' >
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
                    
                    { err && <Alert message={err} type="error" showIcon /> }

                    

                    <Button disabled={isLoading} block type="primary" htmlType="submit" className="login-form-button">
                        {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/> : 'Ingresar'}
                    </Button>
                </Form>
            </AuthCard>
        </>
        
    )
}
