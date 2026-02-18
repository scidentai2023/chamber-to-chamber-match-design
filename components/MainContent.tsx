'use client'

import { Search, Sliders } from 'lucide-react'
import ChamberCard from './ChamberCard'
import StatusOverview from './StatusOverview'
import PerformanceChart from './PerformanceChart'

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-neutral-50">
      {/* Header with Search and Filters */}
      <div className="sticky top-0 z-20 bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search chambers..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors flex items-center gap-2">
              <Sliders size={16} />
              Filters
            </button>
            <button className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-6">
        {/* Status Overview */}
        <StatusOverview />

        {/* Chamber Comparison Grid */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Chamber-to-Chamber Matching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ChamberCard
              chamber="Chamber 1"
              status="optimal"
              temperature={350.2}
              pressure={8.5}
              matchScore={98}
            />
            <ChamberCard
              chamber="Chamber 2"
              status="optimal"
              temperature={349.8}
              pressure={8.4}
              matchScore={97}
            />
            <ChamberCard
              chamber="Chamber 3"
              status="warning"
              temperature={355.1}
              pressure={8.7}
              matchScore={92}
            />
            <ChamberCard
              chamber="Chamber 4"
              status="optimal"
              temperature={350.5}
              pressure={8.5}
              matchScore={99}
            />
          </div>
        </div>

        {/* Performance Metrics */}
        <PerformanceChart />

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-2">Wafer Uniformity</h3>
            <div className="text-3xl font-bold text-foreground mb-2">96.2%</div>
            <div className="text-xs text-success font-medium">↑ 2.1% from last shift</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-2">Etch Rate</h3>
            <div className="text-3xl font-bold text-foreground mb-2">2,480 Å/min</div>
            <div className="text-xs text-neutral-600 font-medium">Within target range</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-2">System Uptime</h3>
            <div className="text-3xl font-bold text-foreground mb-2">99.7%</div>
            <div className="text-xs text-success font-medium">Excellent performance</div>
          </div>
        </div>
      </div>
    </main>
  )
}
