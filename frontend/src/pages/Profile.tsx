import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../context/TokenProvider';
import { jwtDecode } from 'jwt-decode';
import { useProfile } from '../features/profile/hooks/useProfile';



function Profile() {
   const {profileDetails} = useProfile()

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            {profileDetails && (
                <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-400 to-gray-300 flex items-center justify-center text-white text-4xl font-bold">
                            {profileDetails.given_name.charAt(0)}
                            {profileDetails.family_name.charAt(0)}
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-1">
                        {profileDetails.given_name} {profileDetails.family_name}
                    </h2>

                    <div className="space-y-5 text-left">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                            <input
                                type="text"
                                value={profileDetails.user_id}
                                readOnly
                                className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3 py-2 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User Type</label>
                            <input
                                type="text"
                                value={profileDetails.userType}
                                readOnly
                                className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3 py-2 transition"
                            />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Profile;
