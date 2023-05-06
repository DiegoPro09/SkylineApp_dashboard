import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import { useState } from "react";
import { User } from "../../../../domain/models/User";
import { useAction } from "../../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../../shared/reactQuery/QueryClient";
import { userCacheKeys } from "../../cache/userCacheKeys";
import { deleteUserService } from "../../services/deleteUserService";

const { confirm } = Modal;

export const DeleteUser:React.FC<{user?:User['id']}>= ({user}) => {

    const canUpdate = !!user
    const [, setErr] = useState("")

    //Actualiza los datos en la DB
    const {action} = useAction({
        key:'update',
        fn:(userData)=> deleteUserService(userData),
        onSuccess:(res)=>{
            message.success('Usuario eliminado correctamente!')
            ReactQueryClient.invalidateQueries(userCacheKeys.all())
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const showConfirm = () => {
        confirm({
            title: 'Seguro que desea eliminar este usuario?',
            icon: <ExclamationCircleFilled />,
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                action(user)
            }
        });
    };

    return (
        <>
            <Tooltip placement="bottomRight" title={canUpdate ? 'Eliminar' : 'Debe seleccionar una usuario'}>
                <Button shape="circle" onClick={showConfirm} disabled={!canUpdate} style={{marginRight: '5px'}}>
                    <DeleteOutlined />
                </Button>
            </Tooltip>
        </>
    )
}
