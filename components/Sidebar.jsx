
import { useUser } from '@clerk/nextjs';
import React from 'react';

const Sidebar = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <h1>Test</h1>
      </div>
    </div>
  );
};

export default Sidebar;