import { SignInButton, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    ViewGridIcon,
  } from "@heroicons/react/solid";
 
const RightContent = () => {
    const {user} = useUser();

  return (

       <div className='flex'>
<ViewGridIcon className=" icon"/>
 <ChatIcon className='icon' />
 <BellIcon className="icon"/>
 <ChevronDownIcon className="icon"/>
 <UserButton afterSignOutUrl="/"  />
<SignedOut>
<SignInButton afterSignInUrl="/" mode="modal" />  
</SignedOut>
</div>
   
    
 
    
  )
}

export default RightContent