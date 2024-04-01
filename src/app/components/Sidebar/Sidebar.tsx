import React from 'react'
import SidebarLogo from "../../assets/images/sidebar-logo.png"
import Image from 'next/image'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='h-screen w-[50%] background flex flex-col justify-between items-center text-white'>
     <Image className='w-3/6 border rounded-full' src={SidebarLogo} alt=''/>
     <div className='text-center flex flex-col gap-10'>
        <Link href={"/home"}><IoHomeOutline/></Link>
        <IoSearchOutline/>
        <IoSettingsOutline/>
     </div>
       dkccdkjkjd
    </div>
  )
}

export default Sidebar