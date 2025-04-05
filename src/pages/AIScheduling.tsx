import React from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export function AIScheduling() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">AI Scheduling</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <p className="font-semibold">128</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Wait Time</p>
              <p className="font-semibold">12 min</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Doctors</p>
              <p className="font-semibold">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completion Rate</p>
              <p className="font-semibold">98%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', department: 'Cardiology', slots: '3/5 booked' },
              { time: '10:00 AM', department: 'Neurology', slots: '4/5 booked' },
              { time: '11:00 AM', department: 'Pediatrics', slots: '2/5 booked' },
            ].map((slot, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{slot.department}</p>
                  <p className="text-sm text-gray-500">{slot.slots}</p>
                </div>
                <p className="text-blue-600">{slot.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
          <div className="space-y-4">
            {[
              { action: 'Add evening slots', reason: 'High demand detected', priority: 'High' },
              { action: 'Optimize lunch breaks', reason: 'Better distribution needed', priority: 'Medium' },
              { action: 'Increase pediatric slots', reason: 'Growing waitlist', priority: 'High' },
            ].map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{rec.action}</p>
                  <p className="text-sm text-gray-500">{rec.reason}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  rec.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {rec.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}