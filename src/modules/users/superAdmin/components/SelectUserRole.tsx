import React, { useState, useEffect }  from 'react'
import CustomSelect from '../../../../components/select/CustomSelect'
import { RoleTypes } from '../../../../domain/enums/RoleTypes'

const SelectUserRole:React.FC<{role?:any, onChange:(role:any)=>void}> = ({role, onChange}) => {

    const roleTitle = 'Rol'
    const [userRole, setUserRole] = useState(() => RoleTypes.find((item)=> item.value === role))

    useEffect(()=>{
        if (userRole){
            handleSelect(userRole?.value)
        }
    }, [userRole])

    const handleSelect = (role:any)=>{
        onChange(role)
    }

    return (
        <>
        <CustomSelect 
            data={RoleTypes} 
            defaultValue={userRole} 
            onChange={setUserRole} 
            name={"role_id"} 
            labels={'Rol del usuario'}
            tooltips={roleTitle}
            placeHolder={'Seleccione el role del usuario'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar el role',
            },
            ]}
            getLabel={(data)=>data.name}
        />
        </>
    )
}

export default SelectUserRole