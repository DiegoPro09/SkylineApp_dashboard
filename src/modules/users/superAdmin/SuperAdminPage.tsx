import { Tabs } from 'antd'
import React, { useState } from 'react'
import Table from '../../../components/table/CustomTable'
import { RoleTypes } from '../../../domain/enums/RoleTypes'
import { Roles } from '../../../domain/models/Roles'
import { User } from '../../../domain/models/User'
import { AppContent } from '../../app/layout/appContent/AppContent'
import { useAuthContext } from '../../auth/AuthContext'
import { useAllRoles } from '../cache/hooks/useAllRoles'
import { useAllUsers } from '../cache/hooks/useAllUsers'
import { useUserById } from '../cache/hooks/usUserById'
import { CreateUser } from './actions/CreateUser'
import { DeleteUser } from './actions/DeleteUser'
import { UpdateUser } from './actions/UpdateUser'
import { ViewMoreUser } from './actions/ViewMoreUser'
import { usersColumns } from './userColumns'

function SuperAdminPage() {

  const [selectedUserId,setSelectedUser] = useState<User['id']>('')
  const {data:users,isLoading} = useAllUsers()
  
  const { data:roles } = useAllRoles()

  const columns = usersColumns

  const selectedUser = users?.find((user)=>user.id === selectedUserId)

  const selectUserRole = (role:any) => {
    const userrole = users?.filter((user) => {
      return user.role_id == role
    })

    return userrole
  }

  const primaryActions = [
    <UpdateUser user={selectedUser} key={selectedUserId} />,
    <DeleteUser user={selectedUser?.id} />,
    <ViewMoreUser user={selectedUser} />,
    <CreateUser />
  ]

  return (
    <AppContent title={'Administrar Usuarios'} primaryActions={primaryActions}>
      <div>
        {users && roles &&
          <Tabs type="card" >
            {RoleTypes.map((tabInfo, index) =>{ 
              return(
                <>asd</>
              )
            })}
          </Tabs>
        }
      </div>
    </AppContent>
  )
}

export default SuperAdminPage