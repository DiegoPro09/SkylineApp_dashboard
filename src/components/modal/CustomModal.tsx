import { Alert, Button, Divider, Modal, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'

interface customModalProps{
    disabled?:boolean
    action: () => any,
    closeOn?:boolean
    isLoading: boolean, 
    children: React.ReactNode, 
    title: string, 
    tooltiptitle: string, 
    icon: React.ReactNode, 
    error?:string,
    buttonTitle: string,
    onClose?:()=>void
} 

export const CustomModal:React.FC<customModalProps> = ({action, onClose, disabled, closeOn, isLoading, children, title, tooltiptitle, icon, error ,buttonTitle}) => {

    const [modal,setModal] = useState(false)

    const closeModal = () =>{
        setModal(false)
        onClose && onClose()
    }

    const openModal= () => {
        setModal(true)
    }

    const handleOk = () => {
        action()
    };

    useEffect(()=>{
        closeOn && closeModal()
    },[closeOn])
    
    return (
        <>
        <Tooltip title={tooltiptitle} placement="bottomRight">
            <Button disabled={disabled} shape="circle" icon={icon} onClick={openModal} style={{marginRight: '5px'}}/>
        </Tooltip>

        <Modal
            title = {title}
            open={modal} 
            onCancel={closeModal} 
            okText={buttonTitle} 
            destroyOnClose 
            centered 
            onOk={handleOk} 
            confirmLoading={isLoading}
        >   
            <Divider />
            {children}
            {error && <Alert message={error} type="error" showIcon /> }
        </Modal>
        </>
    )
}
