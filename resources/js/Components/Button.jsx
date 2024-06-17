import React from 'react'

const Button = ({text, theme}) => {

    let bgClass;
    let borderClass;
    let textClass;
    if (theme == 'primary') {
        bgClass = 'bg-green-35'
        borderClass = 'none'
        textClass = 'text-white text-base font-poppins'
    } 
    else if (theme == 'secondary') {
        bgClass = 'bg-green-50'
        borderClass = 'none'
        textClass = 'text-white text-base font-poppins'
    }
    else if (theme == 'tertiary') {
        bgClass = 'bg-white'
        borderClass = 'border-solid border-[1px] border-green-50'
        textClass = 'text-green-50 text-base font-poppins'
    }

    return (
        <button className={`py-3 px-4 rounded-full hover:drop-shadow-lg hover:text-medium ${bgClass} ${borderClass} ${textClass}`}>
            {text}
        </button>
    )
}

export default Button