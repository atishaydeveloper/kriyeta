import React from 'react';
import { Users, Clock, FileCheck, AlertCircle } from 'lucide-react';

export function DoctorDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Doctor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Today's Patients</p>
              <p className="font-semibold">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Time</p>
              <p className="font-semibold">20 min</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileCheck className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reports Pending</p>
              <p className="font-semibold">5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Critical Cases</p>
              <p className="font-semibold">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', patient: 'John Doe', type: 'Check-up' },
              { time: '10:00 AM', patient: 'Jane Smith', type: 'Follow-up' },
              { time: '11:00 AM', patient: 'Robert Johnson', type: 'Consultation' },
            ].map((apt, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{apt.patient}</p>
                  <p className="text-sm text-gray-500">{apt.type}</p>
                </div>
                <p className="text-blue-600">{apt.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Patient Updates</h2>
          <div className="space-y-4">
            {[
              { title: 'Lab Results Ready', patient: 'Sarah Wilson', time: '30 mins ago' },
              { title: 'Prescription Request', patient: 'Mike Brown', time: '1 hour ago' },
              { title: 'Emergency Consultation', patient: 'Emma Davis', time: '2 hours ago' },
            ].map((update, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{update.title}</p>
                  <p className="text-sm text-gray-500">{update.patient}</p>
                </div>
                <p className="text-sm text-gray-500">{update.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}