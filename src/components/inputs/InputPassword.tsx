import { Col, Form, FormItemProps, Input, Row, Switch } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import React, { useState } from 'react'
import { validations } from '../../modules/auth/authValidations'


const InputPassword:React.FC<FormItemProps> = (props) => {

    const passwordTitle = 'Contraseña'
    const [disabledPassword, setDisabledPassword] = useState(true);

    //Funcion para activar desactibar switch de contraseña
    const toggle = () => {
        setDisabledPassword(!disabledPassword);
    };

    return (
        <Row>
            <Col span={10}>
                <Form.Item name='password' label={'Contraseña'} tooltip="Debe ingresar la contraseña" rules={disabledPassword ? [] : validations.password}>
                    <Input.Password 
                        type='password' 
                        placeholder={passwordTitle} 
                        className='CardFord' 
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        disabled={disabledPassword} 
                    />
                </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={10}>
                <Form.Item name='verif_password' label={'Confirmar contraseña'} tooltip="Repita la contraseña" rules={disabledPassword ? [] : validations.password}>
                    <Input.Password 
                        type='password'
                        className='CardFord' 
                        placeholder="Confirme la contraseña" 
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                        disabled={disabledPassword}
                    />
                </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={1}>
                <Switch style={{marginTop: '32px'}} size='default' onClick={toggle} />
            </Col>
        </Row>
    )
}

export default InputPassword