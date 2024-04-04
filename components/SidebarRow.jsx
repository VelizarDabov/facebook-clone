

const SidebarRow = ({Icon, title}) => {
  return (
    <div className='flex'>
<Icon className='h-6 ' />
<p>{title}</p>
    </div>
  )
}

export default SidebarRow