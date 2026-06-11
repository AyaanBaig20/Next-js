import React from 'react';
import Image from 'next/image';
import nextImg from "@/public/image.png"

const page = () => {
  const user = {
    initials: "VBT",
    name: "Thapa Technical",
    role: "Frontend Developer",
    skills: "React & TypeScript"
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-100">
        
        {/* Avatar Circle */}
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-5">
          <span className="text-purple-600 font-semibold text-xl tracking-wide">
            <Image src={nextImg} width={400} height={400} alt='next svg' placeholder='blur' blurDataURL=""
            className='h-full w-full rounded-full'/>
          </span>
        </div>

        <h2 className="text-gray-800 text-xl font-bold mb-1">
          {user.name}
        </h2>
        
        <p className="text-gray-500 font-medium text-sm mb-0.5">
          {user.role}
        </p>
        
        <p className="text-gray-400 text-xs">
          {user.skills}
        </p>

      </div>
    </div>
  );
};

export default page;