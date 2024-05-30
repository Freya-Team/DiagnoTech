import React from 'react';
import Button from '@/Components/Button';

const Labs = () => {
    return (
        <>
            <h1>Ini halaman testing komponen, section, dan page</h1>
            <ButtonComponent />
        </>
    )
}

function ButtonComponent () {
    const dataButton = [
        {
            text: "Masuk",
            theme: "primary"
        }, 
        {
            text: "Kontak",
            theme: "secondary"
        },
        {
            text: "Hapus",
            theme: "tertiary"
        }
    ];
    
      return (
        <>
            <Button text={dataButton[0].text} theme={dataButton[0].theme} /> 
            <Button text={dataButton[1].text} theme={dataButton[1].theme} /> 
            <Button text={dataButton[1].text} theme={dataButton[2].theme} /> 
        </> 
      );
}

export default Labs