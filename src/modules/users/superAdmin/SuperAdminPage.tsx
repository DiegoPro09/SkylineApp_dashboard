import React, { useState } from 'react'
import Table from '../../../components/table/CustomTable'
import { User } from '../../../domain/models/User'
import { AppContent } from '../../app/layout/appContent/AppContent'
import { useAuthContext } from '../../auth/AuthContext'
import { useAllUsers } from '../cache/hooks/useAllUsers'
import { useUserById } from '../cache/hooks/usUserById'
import { CreateUser } from './actions/CreateUser'
import { DeleteUser } from './actions/DeleteUser'
import { UpdateUser } from './actions/UpdateUser'
import { usersColumns } from './userColumns'

function SuperAdminPage() {

  const [selectedUserId,setSelectedUser] = useState<User['id']>('')
  const {data:users,isLoading} = useAllUsers()

  const columns = usersColumns

  const selectedUser = users?.find((user)=>user.id === selectedUserId)
  
  const primaryActions = [
    <UpdateUser user={selectedUser} key={selectedUserId} />,
    <DeleteUser user={selectedUser?.id} />,
    <CreateUser />
  ]

  return (
    <AppContent title={'Usuarios'} primaryActions={primaryActions}>
      <div>
        <Table
          columns={columns}
          data={users}
          isLoading={isLoading}
          setSelected={setSelectedUser}
          singleSelection
        />
      </div>
    </AppContent>
  )
}

export default SuperAdminPage