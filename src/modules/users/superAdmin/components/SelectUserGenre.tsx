import React, { useState, useEffect }  from 'react'
import CustomSelect from '../../../../components/select/CustomSelect'
import { GenreTypes } from '../../../../domain/enums/GenreTyoes'

const SelectUserGenre:React.FC<{genre?:any, onChange:(genre:any)=>void}> = ({genre, onChange}) => {

    const genreTitle = 'Rol'
    const [userGenre, setUserGenre] = useState(() => GenreTypes.find((item)=> item.value === genre))

    useEffect(()=>{
        if (userGenre){
            handleSelect(userGenre?.value)
        }
    }, [userGenre])

    const handleSelect = (genre:any)=>{
        onChange(genre)
    }

    return (
        <>
        <CustomSelect 
            data={GenreTypes} 
            defaultValue={userGenre} 
            onChange={setUserGenre} 
            name={"genre_id"} 
            labels={'Género'}
            tooltips={genreTitle}
            placeHolder={'Seleccione el género del usuario'}
            stylesFormItem={{marginRight: 15}}
            rules={[
            {
                required: true,
                message: 'Debe seleccionar el género',
            },
            ]}
            getLabel={(data)=>data.name}
        />
        </>
    )
}

export default SelectUserGenre