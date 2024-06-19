import React, { useEffect, useState } from 'react'

const Journey = ({id, text, image}) => {
    let stepColor;
    if (id==1) {
        stepColor = 'bg-green-30';
    }
    else if (id==2) {
        stepColor = 'bg-green-50';
    }
    else if (id==3) {
        stepColor = 'bg-green-70';
    }

    const leftSide = () => {
        if (id%2==0) {
            return (
                <div className='journey-text w-[490px] text-center'>
                    <p className='text-black text-base font-poppins'>{text}</p>
                </div>
            )
        } 
        else {
            return (
                <div className='journey-image w-[490px] flex justify-center items-center'>
                    <img src={image} alt="" className='w-[400px] h-[300px] rounded-[40px] shadow-2xl border-solid border-[1px] border-green-50'/>
                </div>
            )
        }
    }

    const rightSide = () => {
        if (id%2==0) {
            return (
                <div className='journey-image w-[490px] flex justify-center items-center'>
                    <img src={image} alt="" className='w-[400px] h-[300px] rounded-[40px] shadow-2xl border-solid border-[1px] border-green-50'/>
                </div>
            )
        } 
        else {
            return (
                <div className='journey-text w-[490px] text-center'>
                    <p className='text-black text-base font-poppins'>{text}</p>
                </div>
            )
        }
    }

  return (
    <div className='flex gap-10 justify-center items-center'>
        {leftSide()}
        <div className='journey-step flex flex-col items-center gap-2.5'>
            <div className='w-5 h-5 bg-gray-300 rounded-full'></div>
            <div className={`w-2 h-[300px] ${stepColor} rounded-full`}></div>
        </div>
        {rightSide()}
    </div>
  )
}

export default Journey