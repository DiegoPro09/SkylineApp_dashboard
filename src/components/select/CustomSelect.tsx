import { Form, Select } from 'antd'
import React from 'react'
import './select.css'
const Option = Select.Option


interface CustomSelectProps{
    data:any[] | undefined, 
    defaultValue?:any, 
    onChange:(fact:any)=>void, 
    placeHolder?:any,
    styles?:any, 
    name:string,
    stylesFormItem?:any,
    labels?:any,
    tooltips?:any,
    rules?:any,
    getLabel:(data:any)=>string,
    disabled?:boolean,
    className?:string
}


const CustomSelect:React.FC<CustomSelectProps> = ({
    data, 
    defaultValue, 
    onChange, 
    placeHolder, 
    styles, 
    name,
    stylesFormItem,
    labels,
    tooltips,
    rules,
    getLabel,
    disabled,
    className
}) => {

    const handleSelectS = (id:string) => {
        const comp = data?.find((item:any)=>{
            return item.id === id 
        })

        onChange(comp)
    }

    const dataParsed = data?.map((option)=>{
        return {
            ...option,
            label: getLabel(option)
        }
    })

    return (
        <>
            {dataParsed && 
                <Form className={className}>
                    <Form.Item className='select'  name={name} style={stylesFormItem} label={labels} tooltip={tooltips} rules={rules} initialValue={defaultValue?.id}>
                        <Select value={defaultValue?.id} onSelect={handleSelectS} placeholder={placeHolder} disabled={disabled} > 
                            {dataParsed.map((option:any, index) =>
                                <Option key={index} value={option.id}>{getLabel(option)}</Option>
                            )}
                        </Select>
                    </Form.Item>
                </Form>
            }
        </>
    )
}

export default CustomSelect