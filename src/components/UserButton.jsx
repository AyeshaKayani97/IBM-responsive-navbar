import React, { useState } from 'react'

const UserButton = () => {
     const currentUser = true;
     const [open, setOpen] = useState(false)
  return   currentUser ? (
    <div className='flex items-center gap-4 cursor-pointer relative'>
        <img src="/general/noAvatar.png" className='w-[36px] h-[36px] rounded-full object-cover'/>
        <img 
        onClick={()=>setOpen((prev) => (!prev))}
        src="/general/arrow.svg"  className='w-[20px] h-[20px]'/>
        {

            open && (
                 <div className='flex flex-col bg-white absolute top-[120%] right-0 shadow z-[999] p-4 rounded-[8px] text-[14px]'>
            <div>Profile</div>
            <div>Settings</div>
            <div>Logout</div>

        </div>
            )
        }
       
    </div>
  ) : (
    <a href="/" className='rounded-[16px] p-4  text-[16px] hover:bg-[#f1f1f1]'>Login/Signup</a>
  )
}

export default UserButton