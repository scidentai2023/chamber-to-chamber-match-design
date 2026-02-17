'use client'

import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function StatusOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Overall Status */}
      <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-1">Overall Status</h3>
            <p className="text-2xl font-bold text-success">Operational</p>
          </div>
          <CheckCircle2 size={24} className="text-success" />
        </div>
        <p className="text-xs text-neutral-600">All chambers performing within parameters</p>
      </div>

      {/* Temperature Average */}
      <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-1">Temperature Avg</h3>
            <p className="text-2xl font-bold text-foreground">351.4°C</p>
          </div>
          <TrendingUp size={24} className="text-success" />
        </div>
        <p className="text-xs text-neutral-600">↑ 0.8°C from target</p>
      </div>

      {/* Pressure Uniformity */}
      <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-1">Pressure Uniformity</h3>
            <p className="text-2xl font-bold text-foreground">94.2%</p>
          </div>
          <TrendingUp size={24} className="text-success" />
        </div>
        <p className="text-xs text-neutral-600">Excellent consistency</p>
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-neutral-600 uppercase mb-1">Active Alerts</h3>
            <p className="text-2xl font-bold text-amber-600">1</p>
          </div>
          <AlertTriangle size={24} className="text-amber-500" />
        </div>
        <p className="text-xs text-amber-600">Chamber 3 - Temp elevation</p>
      </div>
    </div>
  )
}
