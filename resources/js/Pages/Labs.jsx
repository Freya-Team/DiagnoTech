import React from 'react';
import Button from '@/Components/Button';
import CardLayanan from '@/Components/CardLayanan';

const Labs = () => {
    return (
        <>
            <h1>Ini halaman testing komponen, section, dan page</h1>
            <ButtonComponent />
            <CardLayananComponent />
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

function CardLayananComponent () {
    const dataLayanan = [
        {
            title: 'Gratisan',
            list: ['Deteksi penyakit', '3 kali deteksi per hari', 'Rekomendari perawatan', 'Chatbot', 'Notifikasi pengingat'],
            price: 0,
            icons: ['check', 'check', 'close', 'close', 'close'],
            theme: 'secondary'
        },
        {
            title: 'VIP',
            list: ['Deteksi penyakit', 'Bebas deteksi per hari', 'Rekomendari perawatan', 'Chatbot', 'Notifikasi pengingat'],
            price: 10000,
            icons: ['check', 'check', 'check', 'check', 'check'],
            theme: 'primary'
        },
        {
            title: 'Standar',
            list: ['Deteksi penyakit', 'Bebas deteksi per hari', 'Rekomendari perawatan', 'Chatbot', 'Notifikasi pengingat'],
            price: 5000,
            icons: ['check', 'check', 'check', 'close', 'close'],
            theme: 'secondary'
        }
    ]
    return (
        <div className='flex gap-[39px]'>
            {dataLayanan.map((data) => (
                <CardLayanan 
                    title={data.title} 
                    list={data.list} 
                    price={data.price} 
                    icons={data.icons} 
                    theme={data.theme} 
                />
            ))}
        </div>  
    )
}

export default Labs