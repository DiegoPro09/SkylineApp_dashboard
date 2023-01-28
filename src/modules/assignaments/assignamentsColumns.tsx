import { ColumnsType } from "antd/es/table"
import Text from "../../components/typography/Text"
import { Assignament } from "../../domain/models/Assignaments"

export const AssignamentColumns = (assignaments?:Assignament[]):ColumnsType<Assignament> =>{
    return [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render:(id)=><Text>{id}</Text>
        },
        {
            title: 'Nombre', 
            dataIndex: 'name',
            key: 'name',
            align: "center",
            render:(name)=><Text>{name}</Text>
        }
    ]
}