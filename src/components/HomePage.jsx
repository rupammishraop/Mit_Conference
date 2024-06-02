import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const [roomId, setRoomId] = useState("");

    const navigate = useNavigate();

    const handleJoin = () => {
        if (roomId.length === 0) {
            alert(" Please enter a room id");
        } else {
            navigate(`/room/${roomId}`);
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Create Room</h1>
                <input
                    type="text"
                    value={roomId}
                    required
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder="Enter Room Name"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleJoin}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create
                </button>
            </div>
        </div>

    )
}

export default HomePage