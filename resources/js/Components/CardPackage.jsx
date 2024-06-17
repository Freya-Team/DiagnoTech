import React from "react"
import Button from "./Button"

const CardPackage = ({title, list, price, icons, theme}) => {

    let bgClass;
    if(theme == 'primary') {
        bgClass = 'bg-green-80'
    } else if (theme = 'secondary') {
        bgClass = 'bg-green-90'
    }

    console.log(list, icons)

    return (
        <div className={`py-10 px-[30px] w-max rounded-[30px] flex flex-col items-center gap-[22px] text-black font-poppins border-solid border-[1px] border-green-50 ${bgClass} hover:drop-shadow-2xl`} >
            <p className='text-2xl font-semibold'>{title}</p>
            <div>
                {list.map((data, index) => (
                    <p className='text-black text-base font-poppins mb-4'>
                        <img className='inline-block mr-5' src={(icons[index] == 'check' ? 'icons/check.svg' : 'icons/close.svg')} alt="" />
                        {data}
                    </p>
                ))}
                <p className='text-2xl font-semibold'>Rp.{price}<span className='text-base font-normal'>/Bulan</span></p>
            </div>
            <Button text='Dapatkan Paket' theme="primary" />
        </div>
    )
}

export default CardPackage