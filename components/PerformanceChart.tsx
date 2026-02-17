'use client'

import { BarChart3 } from 'lucide-react'

export default function PerformanceChart() {
  const data = [
    { name: 'Chamber 1', value: 98, color: 'bg-primary-600' },
    { name: 'Chamber 2', value: 97, color: 'bg-primary-500' },
    { name: 'Chamber 3', value: 92, color: 'bg-amber-500' },
    { name: 'Chamber 4', value: 99, color: 'bg-primary-600' },
  ]

  const maxValue = 100

  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Performance Metrics</h2>
          <p className="text-sm text-neutral-600">Chamber efficiency score comparison</p>
        </div>
        <div className="p-2 bg-primary-100 rounded-lg">
          <BarChart3 size={20} className="text-primary-600" />
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-foreground">{item.name}</span>
              <span className="text-sm font-semibold text-primary-600">{item.value}%</span>
            </div>
            <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-6 border-t border-neutral-200 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-neutral-600 uppercase font-semibold mb-1">Avg Score</p>
          <p className="text-xl font-bold text-foreground">96.5%</p>
        </div>
        <div>
          <p className="text-xs text-neutral-600 uppercase font-semibold mb-1">Best Performer</p>
          <p className="text-xl font-bold text-success">Chamber 4</p>
        </div>
        <div>
          <p className="text-xs text-neutral-600 uppercase font-semibold mb-1">Needs Attention</p>
          <p className="text-xl font-bold text-amber-600">Chamber 3</p>
        </div>
      </div>
    </div>
  )
}
