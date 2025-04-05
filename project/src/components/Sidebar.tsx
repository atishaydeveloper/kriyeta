import React from 'react';
import { 
  LayoutGrid, 
  User, 
  UserCog, 
  Settings, 
  Calendar, 
  FileText, 
  BarChart3, 
  Bot,
  ChevronRight,
  Activity
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4 fixed left-0 top-0">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <Activity className="w-6 h-6 text-blue-600" />
        <span className="text-xl font-semibold text-blue-600">Arogya AI</span>
      </Link>

      <div className="space-y-1">
        <Link to="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`}>
          <LayoutGrid size={20} />
          Home / Overview
        </Link>
        <Link to="/patient" className={`sidebar-link ${isActive('/patient') ? 'active' : ''}`}>
          <User size={20} />
          Patient Dashboard
        </Link>
        <Link to="/doctor" className={`sidebar-link ${isActive('/doctor') ? 'active' : ''}`}>
          <UserCog size={20} />
          Doctor Dashboard
        </Link>
        <Link to="/admin" className={`sidebar-link ${isActive('/admin') ? 'active' : ''}`}>
          <Settings size={20} />
          Admin Dashboard
        </Link>
      </div>

      <div className="mt-8">
        <div className="text-xs font-semibold text-gray-400 px-4 mb-2">FEATURES</div>
        <div className="space-y-1">
          <Link to="/scheduling" className={`sidebar-link ${isActive('/scheduling') ? 'active' : ''}`}>
            <Calendar size={20} />
            AI Scheduling
          </Link>
          <Link to="/emr" className={`sidebar-link ${isActive('/emr') ? 'active' : ''}`}>
            <FileText size={20} />
            EMR Automation
          </Link>
          <Link to="/analytics" className={`sidebar-link ${isActive('/analytics') ? 'active' : ''}`}>
            <BarChart3 size={20} />
            Real-time Analytics
          </Link>
          <Link to="/assistant" className={`sidebar-link ${isActive('/assistant') ? 'active' : ''}`}>
            <Bot size={20} />
            Virtual Assistant
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <Link to="/demo" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          Book a Demo
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}