import { useAllSpecializations } from "../cache/hooks/useAllSpecializations"
import { useState, useEffect } from 'react'
import { Specialization } from "../../../domain/models/Specialization"
import CustomSelect from "../../../components/select/CustomSelect"

const SelectSpecialization:React.FC<{onChange:(specialization:any)=>void}> = ({onChange}) => {
    const { data: specializations, isLoading} = useAllSpecializations()

    const specializationsTitle = 'Especializaciones'
    const [specialization, setSpecialization] = useState(() => specializations?.find((item)=> item.id))

    useEffect(()=>{
        if (specialization){
            handleSelect(specialization?.id)
        }
    }, [specialization])

    const handleSelect = (specialization:Specialization['id'])=>{
        onChange(specialization)
    }

    return (
        <>
        <CustomSelect 
            data={specializations}  
            onChange={setSpecialization} 
            name={"specialization_id"} 
            labels={'Especialización'}
            tooltips={specializationsTitle}
            placeHolder={'Seleccione la especializacion a relacionar'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar una especializacion',
            },
            ]}
            getLabel={(data)=>data.name}
        />
        </>
    )
}

export default SelectSpecialization