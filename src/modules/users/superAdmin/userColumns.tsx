import { Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import Text from "../../../components/typography/Text";
import { RoleTypesEnum } from "../../../domain/enums/RoleTypes";
import { User } from "../../../domain/models/User";

export const usersColumns:ColumnsType<User> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render:(id)=><Text copyable={{text:id}}>{id}</Text>
    },
    {
        title: 'Apellido',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Nombre',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'DNI',
        dataIndex: 'dni',
        key: 'dni',
        render:(dni)=><Text copyable={{text:dni}}>{dni}</Text>
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render:(email)=><Text copyable={{text:email}}>{email}</Text>
    },
    {
        title: 'Teléfono',
        dataIndex: 'phone',
        key: 'phone',
        render:(phone)=><Text copyable={{text:phone}}>{phone}</Text>
    },
    {
        title: 'Rol',
        dataIndex: 'role_id',
        key: 'role_id',
        render:(role_id)=><Text>{
            role_id === RoleTypesEnum.superadmin ? "Super Administrador" : role_id === RoleTypesEnum.admin ? "Administrador"  : role_id === RoleTypesEnum.preceptor ? "Preceptor"  : role_id === RoleTypesEnum.teacher ? "Profesor"  : 'Alumno'
        }</Text>
    },
    {
        title: 'Estado',
        dataIndex:'state',
        key:'state',
        render:(status)=>
            <Tag color={status ? 'green' : 'red'}>{status ? 'activo' : 'inactivo'}</Tag>
        
    }
]