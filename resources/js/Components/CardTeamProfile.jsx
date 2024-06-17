import React from 'react'

const CardTeamProfile = ({name, job, image}) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={image} alt="" className='mb-5 border-solid border-[1px] border-green-90 rounded-full hover:drop-shadow-xl' />
        <p className='font-poppins font-medium text-lg text-black'>{name}</p>
        <p className='font-poppins text-base font-normal text-black'>{job}</p>
    </div>
  )
}

export default CardTeamProfile