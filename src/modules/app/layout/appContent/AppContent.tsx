
import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import './AppContent.css'

interface AppContentProps {
  children:React.ReactNode,
  title?:any,
  primaryActions?:React.ReactNode[],
}

export const AppContent:React.FC<AppContentProps> = ({children,title,primaryActions}) => {
  return (
    <>
      <Layout className="site-layout" style={{ marginLeft: 200, backgroundColor: '#E0D7D7'}}>
          <Header>
            <Title level={4} className='titles'>{title}</Title>
            <Title className='primaryActions'>{primaryActions}</Title>
          </Header>

          <Content className='contentClass'>
              {children}
          </Content>
      </Layout>
    </>
  )
}
