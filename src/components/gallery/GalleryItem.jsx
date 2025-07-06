import React from 'react'
import { Link } from 'react-router'

const GalleryItem = ({item}) => {
  return (
    <div
     style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
     className=' relative gallaryItem'

    >
        <img src={item.media} alt="" className='w-full object-cover rounded-[16px]'/>
        <Link href={`/pins/${item.id}`} className='overlay hidden absolute top-0 left-0 w-full h-full rounded-[20px] '></Link>
        <button className='saveButton  bg-red-500 rounded-[15px] py-2 px-5 hidden items-center justify-center  text-white cursor-pointer'>Save</button>
        <div className='overlayIcons hidden   items-end justify-end gap-3 abslute'>
          <button className='cursor-pointer downloadButton' >
            <img src="/general/share.svg"/>
            </button>
          <button className='cursor-pointer'>
            <img src="/general/share.svg"/>
          </button>
                    <button className='cursor-pointer'>
            <img src="/general/share.svg"/>
          </button>
    
        

        </div>
    </div>
  )
}

export default GalleryItem


