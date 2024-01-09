import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='grid place-items-center'>
{/* <Image alt='' src='https://links.papareact.com/t4i'  height={400} width={400} objectFit='contain' layout='fixed' className='p-10 mt-10 bg-blue-500 rounded-full text-white text-center'/> */}

<SignInButton afterSignInUrl="/" mode="modal" />


    </div> 
  )
}

export default Login