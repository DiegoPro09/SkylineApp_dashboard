import React from 'react'
import { AppContent } from '../../app/layout/appContent/AppContent'
import { useAuthContext } from '../../auth/AuthContext'
import { useUserById } from '../cache/hooks/usUserById'

function SuperAdminPage() {

  const { loggedUser } = useAuthContext()
  const { data: user, isLoading } = useUserById(loggedUser?.id)

  
  return (
    <AppContent>
      <div>
        UserPage
      </div>
    </AppContent>
  )
}

export default SuperAdminPage