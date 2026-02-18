'use client'

import { useState } from 'react'
import { Activity, Gauge, Layers, Shuffle, Wrench, ChevronLeft } from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('chamber-matching')

  const navItems = [
    { id: 'health', label: 'Tool Health Overview', icon: Activity },
    { id: 'chamber', label: 'Chamber Condition', icon: Gauge },
    { id: 'wafer', label: 'Wafer Consistency', icon: Layers },
    { id: 'chamber-matching', label: 'Chamber-to-Chamber Matching', icon: Shuffle },
    { id: 'pm-recovery', label: 'Post PM Recovery Monitoring', icon: Wrench },
  ]

  return (
    <div
      className={`flex flex-col bg-white border-r border-neutral-200 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse Button */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-200">
        {!collapsed && <span className="text-xs font-semibold text-neutral-600 uppercase">Navigation</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft size={18} className={`text-neutral-600 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-neutral-600 hover:bg-neutral-50'
              }`}
              title={collapsed ? item.label : ''}
            >
              <div
                className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                <Icon size={18} />
              </div>

              {!collapsed && (
                <span className="text-sm font-medium flex-1 text-left truncate">{item.label}</span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-neutral-200 p-3">
        <div className="flex items-center gap-2 px-2 py-2 text-xs text-neutral-500">
          {!collapsed && <span>System Status</span>}
          <div className="w-2 h-2 bg-success rounded-full ml-auto"></div>
        </div>
      </div>
    </div>
  )
}
