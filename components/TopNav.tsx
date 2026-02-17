'use client'

import { Bell, Settings, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function TopNav() {
  const [selectedTool, setSelectedTool] = useState('Plasma Etcher 1')
  const [shiftStatus, setShiftStatus] = useState('on-duty')

  const tools = ['Plasma Etcher 1', 'Plasma Etcher 2', 'Plasma Etcher 3']

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-sm">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          {/* App Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">VC</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Via Connect</span>
          </div>

          {/* Tool Selector */}
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition-colors text-sm font-medium text-foreground">
              {selectedTool}
              <ChevronDown size={16} className="text-neutral-400" />
            </button>
            <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg hidden hover:block">
              {tools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-primary-50 hover:text-primary-600 border-b border-neutral-100 last:border-b-0"
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Section - Engineer Profile Card */}
        <div className="flex items-center gap-4 px-4 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-600">SE-1024</span>
              <span className="text-sm font-medium text-foreground">First Name</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-600">Service Engineer</span>
              <span className="text-xs font-medium text-neutral-700">Lam Research</span>
            </div>
          </div>

          {/* Shift Status Toggle */}
          <div className="flex gap-2 ml-4 border-l border-neutral-200 pl-4">
            <button
              onClick={() => setShiftStatus('on-duty')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                shiftStatus === 'on-duty'
                  ? 'bg-success text-white'
                  : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              On-duty
            </button>
            <button
              onClick={() => setShiftStatus('off-duty')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                shiftStatus === 'off-duty'
                  ? 'bg-neutral-300 text-neutral-700'
                  : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              Off-duty
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-neutral-50 rounded-lg transition-colors">
            <Bell size={20} className="text-neutral-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-neutral-50 rounded-lg transition-colors">
            <Settings size={20} className="text-neutral-600" />
          </button>

          {/* Profile Avatar */}
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-semibold text-sm">
            FN
          </button>
        </div>
      </div>
    </nav>
  )
}
