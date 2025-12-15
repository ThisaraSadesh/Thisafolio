import ExplorerHeader from '@/components/ui/ExplorerHeader'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <ExplorerHeader />
        {children}</div>
  )
}

export default layout