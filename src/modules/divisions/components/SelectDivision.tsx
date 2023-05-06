import { useEffect, useState } from "react"
import CustomSelect from "../../../components/select/CustomSelect"
import { Division } from "../../../domain/models/Division"
import { useAllDivisions } from "../cache/hooks/useAllDivisions"

const SelectDivision:React.FC<{onChange:(divs:any)=>void}> = ({onChange}) => {
    const { data: divisions, isLoading} = useAllDivisions()

    const divisionTitle = 'Divisíon'
    const [division, setDivision] = useState(() => divisions?.find((item)=> item.id))

    useEffect(()=>{
        if (division){
            handleSelect(division?.id)
        }
    }, [division])

    const handleSelect = (division:Division['id'])=>{
        onChange(division)
    }

    return (
        <>
        <CustomSelect
            data={divisions}  
            onChange={setDivision} 
            name={"division_id"} 
            labels={'Division'}
            tooltips={divisionTitle}
            placeHolder={'Seleccione la division a relacionar'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar la division',
            },
            ]}
            getLabel={(data)=>data.name + ' ' + data.turn}
        />
        </>
    )
}

export default SelectDivision