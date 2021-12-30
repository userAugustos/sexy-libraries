import React from "react";

export const Card = ({ user }) => (
  <div className='w-full flex items-center justify-between p-6 space-x-6'>
    <div className='flex-1 truncate'>
      <div className='flex items-center space-x-3'>
        <h3 className='text-gray-900 text-sm font-medium truncate'>
          {user.name}
        </h3>
        <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs'>
          {user.role}
        </span>
      </div>
      <p className='mt-1 text-gray-500 text-sm truncate'>{user.department}</p>
    </div>
    <img
      src={user.imageUrl}
      alt='Foto do usuario'
      className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
    />
  </div>
);
