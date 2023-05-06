import { useEffect, useState } from "react"
import CustomSelect from "../../../components/select/CustomSelect"
import { Level } from "../../../domain/models/Level"
import { useAllLevels } from "../cache/hooks/useAllLevels"

const SelectLevel:React.FC<{onChange:(level:any)=>void}> = ({onChange}) => {
    const { data: levels, isLoading} = useAllLevels()

    const levelTitle = 'Nivel'
    const [level, setLevel] = useState(() => levels?.find((item)=> item.id))

    useEffect(()=>{
        if (level){
            handleSelect(level?.id)
        }
    }, [level])

    const handleSelect = (level:Level['id'])=>{
        onChange(level)
    }

    return (
        <>
        <CustomSelect 
            data={levels}  
            onChange={setLevel} 
            name={"level_id"} 
            labels={'Nivel'}
            tooltips={levelTitle}
            placeHolder={'Seleccione el nivel a relacionar'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar el nivel',
            },
            ]}
            getLabel={(data)=>data.name}
        />
        </>
    )
}

export default SelectLevel