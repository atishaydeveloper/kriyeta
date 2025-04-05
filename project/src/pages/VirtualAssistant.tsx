import React from 'react';
import { MessageSquare, Zap, Brain, ThumbsUp } from 'lucide-react';

export function VirtualAssistant() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Virtual Assistant</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Interactions</p>
              <p className="font-semibold">2,456</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Response Time</p>
              <p className="font-semibold">0.8s</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">AI Accuracy</p>
              <p className="font-semibold">96.8%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <ThumbsUp className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">User Satisfaction</p>
              <p className="font-semibold">4.8/5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Common Queries</h2>
          <div className="space-y-4">
            {[
              { query: 'Appointment Booking', frequency: '32%', success: '98%' },
              { query: 'Medical Records', frequency: '28%', success: '95%' },
              { query: 'Insurance Info', frequency: '18%', success: '94%' },
            ].map((query, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{query.query}</p>
                  <p className="text-sm text-gray-500">Frequency: {query.frequency}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                  {query.success}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">AI Learning Progress</h2>
          <div className="space-y-4">
            {[
              { area: 'Natural Language', progress: '98%', status: 'Optimized' },
              { area: 'Context Understanding', progress: '92%', status: 'Learning' },
              { area: 'Medical Knowledge', progress: '95%', status: 'Updated' },
            ].map((area, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{area.area}</p>
                  <p className="text-sm text-gray-500">{area.progress}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  area.status === 'Optimized' ? 'bg-green-100 text-green-600' :
                  area.status === 'Learning' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {area.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}