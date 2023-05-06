import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message, Modal, Tooltip } from "antd";
import { useState } from "react";
import { Course } from "../../../domain/models/Course";
import { useAction } from "../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../shared/reactQuery/QueryClient";
import { courseCacheKeys } from "../cache/courseCacheKeys";
import { deleteCourseService } from "../services/deleteCourseService";

const { confirm } = Modal;

export const DeleteCourse:React.FC<{course?:Course['id']}>= ({course}) => {

    const canUpdate = !!course
    const [, setErr] = useState("")

    //Actualiza los datos en la DB
    const {action} = useAction({
        key:'update',
        fn:(courseData)=> deleteCourseService(courseData),
        onSuccess:(res)=>{
            message.success('Curso eliminado correctamente!')
            ReactQueryClient.invalidateQueries(courseCacheKeys.all())
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const showConfirm = () => {
        confirm({
            title: 'Seguro que desea eliminar este curso?',
            icon: <ExclamationCircleFilled />,
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                action(course)
            }
        });
    };

    return (
        <>
            <Tooltip placement="bottomRight" title={canUpdate ? 'Eliminar' : 'Debe seleccionar un curso'}>
                <Button shape="default" onClick={showConfirm} disabled={!canUpdate} style={{marginRight: '5px'}}>
                    <DeleteOutlined /> Eliminar curso
                </Button>
            </Tooltip>
        </>
    )
}