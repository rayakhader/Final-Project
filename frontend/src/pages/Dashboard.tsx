import React from 'react';
import {
  Users,
  Hotel,
  MapPin,
  KeyRound,
  TrendingUp,
  BarChart2,
  UserCheck
} from 'lucide-react';
import Card from '../features/adminPanel/components/Card';
import AnalyticsCard from '../features/adminPanel/components/AnalyticsCard';

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card icon={<Users className="text-blue-500 w-6 h-6" />} label="Users" value="1,205" />
        <Card icon={<Hotel className="text-purple-500 w-6 h-6" />} label="Hotels" value="42" />
        <Card icon={<MapPin className="text-green-500 w-6 h-6" />} label="Cities" value="15" />
        <Card icon={<KeyRound className="text-yellow-500 w-6 h-6" />} label="Rooms" value="380" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <AnalyticsCard
          title="User Growth"
          icon={<TrendingUp className="text-indigo-500 w-5 h-5" />}
          description="Users have increased by 15% in the last month."
        />
        <AnalyticsCard
          title="Booking Trends"
          icon={<BarChart2 className="text-pink-500 w-5 h-5" />}
          description="Weekly bookings are steadily rising across cities."
        />
      </div>
    </div>
  );
}


export default Dashboard;
