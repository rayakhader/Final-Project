import React from 'react'

function AnalyticsCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}

export default AnalyticsCard
