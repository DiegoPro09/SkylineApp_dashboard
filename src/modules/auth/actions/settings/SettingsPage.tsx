import { EyeInvisibleOutlined, EyeTwoTone, LoadingOutlined, SaveOutlined } from "@ant-design/icons"
import Logo from '../../../../assets/mdf-logo.png'
import { Alert, Button, Card, Col, Form, Input, message, Row, Skeleton, Spin, Switch } from "antd"
import { useState } from "react"
import AuthCard from "../../../../components/cards/AuthCard"
import { useAction } from "../../../../shared/hooks/useAction"
import { ReactQueryClient } from "../../../../shared/reactQuery/QueryClient"
import { useUserById } from "../../../users/cache/hooks/usUserById"
import { userCacheKeys } from "../../../users/cache/userCacheKeys"
import { updateUserReq, updateUserService } from "../../../users/services/updateUserService"
import { useAuthContext } from "../../AuthContext"
import { validations } from "../../authValidations"

export const SettingsPage = () => {
    const { loggedUser } = useAuthContext()
    const { data: user, isLoading } = useUserById(loggedUser?.id)

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
    const [disabledPassword, setDisabledPassword] = useState(true);
    const [disabledAnswer, setDisabledAnswer] = useState(true);
    const [form] = Form.useForm<updateUserReq>();

    //Funcion para activar desactibar switch de contraseña
    const toggle = () => {
        setDisabledPassword(!disabledPassword);
    };

    //Funcion para activar desactibar switch de answer
    const toggleAnswer = () => {
        setDisabledAnswer(!disabledAnswer);
    };
    
    //Actualiza los datos en la DB
    const {action} = useAction<updateUserReq>({
        key:'update',
        fn:(userData)=> updateUserService(user?.id, userData),
        onSuccess:(res)=>{
            message.success('Usuario actualizado!')
            ReactQueryClient.invalidateQueries(userCacheKeys.all())
            setErr('')
            setSuccess(true)
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
            console.log(data)
            action(data);
        })
    }

    return(
        <AuthCard logo={Logo} style='85px'>
            {isLoading ? <Skeleton /> : 
                <Form layout="vertical" form={form} onFinish={handleAction} autoComplete='on' initialValues={user} size='small' encType='x-www-form-urlencoded'>
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
                                <Input.Password placeholder="Ingrese su dni"  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
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
                        <Col span={15}>
                            <Form.Item name='question' label={labels.question} tooltip="Debe ingresar una pregunta de seguridad" rules={validations.question}>
                                <Input.Password placeholder="Ingrese una pregunta de seguridad" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={5}>
                            <Form.Item name='answer' label={labels.answer} tooltip="Debe ingresar la respuesta" rules={disabledAnswer ? [] : validations.answer}>
                                <Input.Password className='CardFord' placeholder="Ingrese la respuesta" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} disabled={disabledAnswer} />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={2}>
                            <Switch style={{marginTop: '32px'}} size='default' onClick={toggleAnswer} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Form.Item name='password' label={labels.password} tooltip="Debe ingresar la contraseña" rules={disabledPassword ? [] : validations.password}>
                                <Input.Password className='CardFord' placeholder="Ingrese su contraseña" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} disabled={disabledPassword} />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={10}>
                            <Form.Item name='verif_password' label={labels.vpassword} tooltip="Repita la contraseña" rules={disabledPassword ? [] : validations.password}>
                                <Input.Password className='CardFord' placeholder="Confirme la contraseña" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} disabled={disabledPassword} />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={1}>
                            <Switch style={{marginTop: '32px'}} size='default' onClick={toggle} />
                        </Col>
                    </Row>
                    
                    { err && <> <Alert message={err} type="error" showIcon /><br/> </>  }                   

                    <Button disabled={isLoading} block type="primary" htmlType="submit" className="login-form-button">
                        {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/> : 'Actualizar'}
                    </Button>
                </Form>   
            }
        </AuthCard>
    )
}
