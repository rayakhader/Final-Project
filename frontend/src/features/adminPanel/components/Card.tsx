import React from 'react'

function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition-all">
            <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    )
}

export default Card
