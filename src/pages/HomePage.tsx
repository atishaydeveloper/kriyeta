import React from 'react';
import { Calendar, FileText, BarChart3, Bot, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon: Icon, title, description, iconBg, link }: { 
  icon: any; 
  title: string; 
  description: string;
  iconBg: string;
  link: string;
}) {
  return (
    <Link to={link} className="feature-card">
      <div className={`feature-icon ${iconBg} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </Link>
  );
}

export function HomePage() {
  return (
    <>
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Revolutionizing Healthcare with AI-Powered Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Experience the future of hospital management with Arogya AI's intelligent patient
          scheduling, EMR automation, real-time analytics, virtual assistance, and more.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/patient" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Explore Dashboards
            <ChevronRight size={20} />
          </Link>
          <Link 
            to="/demo" 
            className="px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={Calendar}
          title="AI Scheduling"
          description="Optimize appointments."
          iconBg="bg-blue-500"
          link="/scheduling"
        />
        <FeatureCard
          icon={FileText}
          title="EMR Automation"
          description="Streamline records."
          iconBg="bg-green-500"
          link="/emr"
        />
        <FeatureCard
          icon={BarChart3}
          title="Real-time Analytics"
          description="Monitor performance."
          iconBg="bg-purple-500"
          link="/analytics"
        />
        <FeatureCard
          icon={Bot}
          title="Virtual Assistant"
          description="Instant support."
          iconBg="bg-orange-500"
          link="/assistant"
        />
      </div>

      <div className="text-center text-sm text-gray-500 mt-16">
        © 2025 Arogya AI. Revolutionizing Healthcare. All rights reserved.
      </div>
    </>
  );
}