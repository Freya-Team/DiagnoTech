import React from 'react'

const Button = ({text, theme}) => {

    let bgClass;
    let borderClass;
    let textClass;
    if (theme == 'primary') {
        bgClass = 'bg-green-35'
        borderClass = 'none'
        textClass = 'text-black text-base font-poppins'
    } 
    else if (theme == 'secondary') {
        bgClass = 'bg-green-50'
        borderClass = 'none'
        textClass = 'text-black text-base font-poppins'
    }
    else if (theme == 'tertiary') {
        bgClass = 'bg-transparent'
        borderClass = 'border-solid border-2 border-green-50'
        textClass = 'text-green-50 text-base font-poppins'
    }

    console.log({theme}, {text})

    return (
        <button className={`py-3 px-4 m-2 rounded-full shadow-lg ${bgClass} ${borderClass} ${textClass}`}>
            {text}
        </button>
    )
}

export default Button