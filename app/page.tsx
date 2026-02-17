'use client'

import { useState } from 'react'
import TopNav from '@/components/TopNav'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Top Navigation */}
      <TopNav />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  )
}
