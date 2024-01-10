import Image from 'next/image'
import React from 'react'

const SidebarRow = ({src,Icon, title}) => {
  return (
    <div className='flex'>
{/* <Image src={src} height={10} width={10} objectFit='cover' layout=''/> */}
<Icon className='h-6 ' />
<p>{title}</p>
    </div>
  )
}

export default SidebarRow