import React from 'react'
import { useState } from 'react'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'
import ColumnInput from '@/Components/ColumnInput'
import Button from "@/Components/Button";

const DetectNumeric = () => {
    const [selected, setSelected] = useState("Medium")

    const onOptionChange = e => {
        setSelected(e.target.value)
    }

  return (
    <div className="bg-gray-50 flex flex-col gap-7">
        <NavBar theme='primary' />
        <p className="font-poppins font-bold text-4xl text-black text-center mt-3">Apa Penyakit Anda?</p>
        <div className='form mx-[225px]'> 
            <p className='font-poppins font-semibold text-2xl text-black text-center'>Masukkan data kondisi tubuh Anda!</p>
            <div className='form-top flex gap-10 '>
                <div className='form-top-left w-full '>
                    <ColumnInputComponent />
                </div>
                <div className='form-top-right w-full'>
                    <ColumnInputComponent />
                </div>
            </div>
            <div className='form-bottom flex gap-5 justify-between items-center'>
                <div className='form-radio flex gap-4 items-center justify-start'>
                    <input type="radio" name="gender" id='laki-laki' value="laki-laki" onChange={onOptionChange} checked={selected === 'laki-laki'} className="form-radio checked:bg-green-30 checked:hover:bg-green-30 checked:active:bg-green-30 checked:focus:bg-green-30 focus:bg-green-30 focus:outline-none focus:ring-1 focus:ring-green-30" />
                    <p className='font-poppins text-black text-center'>Lakilaki</p>
                    <input type="radio" name="gender" id='perempuan' value="perempuan" onChange={onOptionChange} checked={selected === 'perempuan'} className="form-radio checked:bg-green-30 checked:hover:bg-green-30 checked:active:bg-green-30 checked:focus:bg-green-30 focus:bg-green-30 focus:outline-none focus:ring-1 focus:ring-green-30" />
                    <p className='font-poppins text-black text-center'>Perempuan</p>
                </div>
                <div className='form-dropdow'>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">Pilih Kategori</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Penyakit Umum</a></li>
                            <li><a>Penyakit Pernafasan</a></li>
                            <li><a>Penyakit Anak</a></li>
                            <li><a>Penyakit Dalam</a></li>
                        </ul>
                    </div>
                </div>
                <div className='form-button'>
                    <ButtonComponent />
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
  )
}

function ColumnInputComponent() {
    let columns = [
        {
            id: 1,
            label: "Age",
            placeholder: "Your age",
        },
        {
            id: 2,
            label: "Gender",
            placeholder: "Your gender",
        },
        {
            id: 3,
            label: "Weight",
            placeholder: "Your weight",
        },
    ];
    return (
        <>
            {columns.map((column) => (
                <ColumnInput
                    id={column.id}
                    label={column.label}
                    placeholder={column.placeholder}
                />
            ))}
        </>
    );
}

function ButtonComponent() {
    const dataButton = [
        {
            text: "Hapus",
            theme: "secondary",
        },
        {
            text: "Deteksi",
            theme: "primary",
        },
    ];

    return (
        <div className="flex gap-3 justify-center items-center">
            <Button text={dataButton[0].text} theme={dataButton[0].theme} />
            <Button text={dataButton[1].text} theme={dataButton[1].theme} />
        </div>
    );
}

function FooterComponent() {
    const texts = [
        "Development of COVID-19 Vaccine Research",
        "Salad for Healthy and Fun Diet to Loose Weight",
        "Development of COVID-19 Vaccine Research",
        "Salad for Healthy and Fun Diet to Loose Weight",
    ];

    const sosmeds = [
        {
            image: "https://img.icons8.com/?size=100&id=32309&format=png&color=ffffff",
            text: "@diagnotech.id",
        },
        {
            image: "https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff",
            text: "diagnotech",
        },
        {
            image: "https://img.icons8.com/?size=100&id=16733&format=png&color=ffffff",
            text: "+62-8570-0072-350",
        },
        {
            image: "https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=ffffff",
            text: "diagnotech",
        },
    ];

    return (
        <>
            <Footer texts={texts} sosmeds={sosmeds} />
        </>
    );
}

export default DetectNumeric