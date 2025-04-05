import React from 'react';
import { Calendar, Clock, Activity, Bell } from 'lucide-react';

export function PatientDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Appointment</p>
              <p className="font-semibold">Mar 15, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Wait Time</p>
              <p className="font-semibold">5 minutes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Health Status</p>
              <p className="font-semibold">Good</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Notifications</p>
              <p className="font-semibold">2 New</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {[
              { date: 'Mar 15, 2025', doctor: 'Dr. Smith', type: 'Check-up' },
              { date: 'Apr 02, 2025', doctor: 'Dr. Johnson', type: 'Follow-up' },
            ].map((apt, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{apt.doctor}</p>
                  <p className="text-sm text-gray-500">{apt.type}</p>
                </div>
                <p className="text-blue-600">{apt.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { title: 'Prescription Renewed', date: '2 hours ago' },
              { title: 'Lab Results Available', date: '1 day ago' },
              { title: 'Appointment Scheduled', date: '3 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <p className="font-semibold">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}