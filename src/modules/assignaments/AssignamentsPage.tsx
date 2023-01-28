import { Skeleton } from "antd"
import { useState } from "react"
import Table from "../../components/table/CustomTable"
import { Assignament } from "../../domain/models/Assignaments"
import { AppContent } from "../app/layout/appContent/AppContent"
import { CreateAssignament } from "./actions/CreateAssignament"
import { DeleteAssignament } from "./actions/DeleteAssignament"
import { UpdateAssignament } from "./actions/UpdateAssignament"
import { AssignamentColumns } from "./assignamentsColumns"
import { useAllAssignaments } from "./cache/hooks/useAllAssignaments"


function AssignamentsPage() {

    const { data: assignament, isLoading} = useAllAssignaments()

    const [selectedAssignamentId, setSelectedAssignament] = useState<Assignament['id']>('')
    const selectedAssignament = assignament?.find((assignament)=>assignament.id === selectedAssignamentId)
    
    const primaryActions = [
        <UpdateAssignament assignament={selectedAssignament} key={selectedAssignamentId} />,
        <DeleteAssignament assignament={selectedAssignament?.id} />,
        <CreateAssignament />
    ]

    return (
        <AppContent title={'Materias'} primaryActions={primaryActions}>
            <div>
                {isLoading ? 
                    <Skeleton/> 
                    :
                    <Table
                        columns={AssignamentColumns(assignament)}
                        isLoading={isLoading}
                        data={assignament}
                        setSelected={setSelectedAssignament}
                        singleSelection
                    />
                }
            </div>
        </AppContent>
    )
}

export default AssignamentsPage