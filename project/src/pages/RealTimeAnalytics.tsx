import React from 'react';
import { BarChart3, Activity, Users, Clock, TrendingUp, LineChart } from 'lucide-react';

export function RealTimeAnalytics() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Real-Time Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor your healthcare metrics in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Analytics Cards */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Patients</p>
              <p className="text-2xl font-semibold text-gray-900">2,847</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Appointments Today</p>
              <p className="text-2xl font-semibold text-gray-900">186</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Wait Time</p>
              <p className="text-2xl font-semibold text-gray-900">12 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Sections */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Patient Flow</h2>
              <p className="text-sm text-gray-600">Hourly patient check-ins</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-t border-gray-100">
            <p className="text-gray-500">Chart visualization will be implemented here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Department Performance</h2>
              <p className="text-sm text-gray-600">Efficiency metrics by department</p>
            </div>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-t border-gray-100">
            <p className="text-gray-500">Chart visualization will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}