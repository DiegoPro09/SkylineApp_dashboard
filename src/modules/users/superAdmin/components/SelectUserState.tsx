import React, { useEffect, useState } from 'react'
import CustomSelect from '../../../../components/select/CustomSelect'

const userStates = [
    {
        id : 1,
        value : true,
        name: 'Activo'
    },
    {
        id: 2,
        value: false,
        name: 'Inactivo'
    }
]

const SelectUserState:React.FC<{state:boolean|undefined, onChange:(state:any)=>void}> = ({state, onChange})  => {
    const [states, setStates] = useState(() => userStates.find((item)=> item.value === state))

    const stateTitle = 'Estado del usuario'

    useEffect(()=>{
        if (states){
        handleSelect(states.value)
        }
    }, [states])

    const handleSelect = (state:any)=>{
        onChange(state)
    }

    return (
        <CustomSelect
            name="state" 
            defaultValue={states}
            labels={'Estado del usuario'}
            placeHolder={'Seleccione el estado del usuario'}
            data={userStates}
            onChange={setStates}
            tooltips={stateTitle}
            getLabel={(data)=>data.name}
        />
    )
}

export default SelectUserState