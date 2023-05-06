import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import { useState } from "react";
import { Assignament } from "../../../domain/models/Assignaments";
import { useAction } from "../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../shared/reactQuery/QueryClient";
import { assignamentsCacheKeys } from "../cache/AssignamentCacheKeys";
import { deleteAssignamentService } from "../services/deleteAssignamentService";

const { confirm } = Modal;

export const DeleteAssignament:React.FC<{assignament?:Assignament['id']}>= ({assignament}) => {

    const canUpdate = !!assignament
    const [, setErr] = useState("")

    //Actualiza los datos en la DB
    const {action} = useAction({
        key:'update',
        fn:(assignamentData)=> deleteAssignamentService(assignamentData),
        onSuccess:(res)=>{
            message.success('Materia eliminada correctamente!')
            ReactQueryClient.invalidateQueries(assignamentsCacheKeys.all())
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const showConfirm = () => {
        confirm({
            title: 'Seguro que desea eliminar esta materia?',
            icon: <ExclamationCircleFilled />,
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                action(assignament)
            }
        });
    };

    return (
        <>
            <Tooltip placement="bottomRight" title={canUpdate ? 'Eliminar' : 'Debe seleccionar una materia'}>
                <Button shape="circle" onClick={showConfirm} disabled={!canUpdate} style={{marginRight: '5px'}}>
                    <DeleteOutlined />
                </Button>
            </Tooltip>
        </>
    )
}
