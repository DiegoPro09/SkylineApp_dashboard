import { Table as AntTable } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { t } from 'i18next';
import { useState } from 'react';
import './Table.css';

type TableProps = {
    columns?:ColumnsType<any>,
    data?:unknown[],
    isLoading?:boolean
    setSelected?:(selected:any[])=>void
    singleSelection?:boolean
    showAll?:boolean
} | {
    columns?:ColumnsType<any>,
    data?:any,
    isLoading?:boolean
    setSelected?:(selected:any)=>void
    singleSelection:boolean 
    showAll?:boolean
}

const Table:React.FC<TableProps> = ({columns,data,isLoading,singleSelection,setSelected, showAll}) => {

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize,setPageSize] = useState<number>(12)

    const handleRowSelection = (data:any[])=>{
        if(setSelected){
            singleSelection 
            ?setSelected(data[0])
            :setSelected(data)
        }
    }

    const type = singleSelection ? 'radio' : 'checkbox'

    const handleTableChange = (pagination: TablePaginationConfig) => {
        if(pagination.current && pagination.current !== currentPage){
        setCurrentPage(pagination.current)
        }
        if(pagination.pageSize && pagination.pageSize !== pageSize){
        setPageSize(pagination.pageSize)
        }
    }


    return (
        <AntTable
            
            rowKey={r=>r.id}
            size='small'
            columns={columns}
            dataSource={data || []}
            loading={isLoading}
            rowSelection={{
                type,
                onChange:handleRowSelection,
                
            }}
            onChange={handleTableChange}
            pagination={{
                current: currentPage,
                pageSize: showAll ? data.length : pageSize,
                showTotal: (total, range)=>`${range[1]} ${t('table.of')} ${total}`,
                totalBoundaryShowSizeChanger: 10,
                hideOnSinglePage: true,
                locale:{
                page: 'of',
                items_per_page: 'filas'
                },
                pageSizeOptions:[pageSize,25,50,100,200],
            }}
        /> 
    )
}

export default Table
