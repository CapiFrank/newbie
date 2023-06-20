import React from 'react'
import { BiErrorAlt } from "react-icons/bi";
import Animation from 'Application/Images/animation.svg'

export const NotFound = () => {
    return (
        <div className='text-5xl font-bold w-full flex items-center flex-col text-white-variation'><label className='flex'><BiErrorAlt className='mr-2' />Page Not Found</label>
            <div className='w-96'>
                <img className='w-full h-full object-scale-down ' src={Animation} alt="" srcset="" />
            </div>
        </div>
    )
}
