import { QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './modules/app/App'
import './index.css'
import { ReactQueryClient } from './shared/reactQuery/QueryClient'
import { AuthProvider } from './modules/auth/AuthContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={ReactQueryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ConfigProvider>
            <App />
          </ConfigProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
