'use client'

import { AlertCircle, CheckCircle2 } from 'lucide-react'

interface ChamberCardProps {
  chamber: string
  status: 'optimal' | 'warning' | 'critical'
  temperature: number
  pressure: number
  matchScore: number
}

export default function ChamberCard({
  chamber,
  status,
  temperature,
  pressure,
  matchScore,
}: ChamberCardProps) {
  const statusConfig = {
    optimal: {
      color: 'bg-success',
      textColor: 'text-success',
      label: 'Optimal',
      icon: CheckCircle2,
      bgLight: 'bg-success/10',
    },
    warning: {
      color: 'bg-amber-500',
      textColor: 'text-amber-600',
      label: 'Warning',
      icon: AlertCircle,
      bgLight: 'bg-amber-50',
    },
    critical: {
      color: 'bg-destructive',
      textColor: 'text-destructive',
      label: 'Critical',
      icon: AlertCircle,
      bgLight: 'bg-red-50',
    },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">{chamber}</h3>
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bgLight}`}>
          <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
          <span className={config.textColor}>{config.label}</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-neutral-600">Temperature</span>
          <span className="text-sm font-semibold text-foreground">{temperature}°C</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-neutral-600">Pressure</span>
          <span className="text-sm font-semibold text-foreground">{pressure} mtorr</span>
        </div>

        {/* Match Score Progress */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs text-neutral-600">Match Score</span>
            <span className="text-sm font-semibold text-primary-600">{matchScore}%</span>
          </div>
          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all"
              style={{ width: `${matchScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <button className="w-full mt-4 px-3 py-2 text-xs font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
        View Details
      </button>
    </div>
  )
}
