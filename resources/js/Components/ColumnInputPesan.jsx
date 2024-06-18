import React from "react";

const ColumnInputPesan = () => {
    const styleColumn =
        "py-3 my-3 bg-transparent border-none rounded-xl bg-gray-200 w-[30%] text-black placeholder:italic ";
    const styleFocus =
        "focus: border-none focus:outline-none focus:border-transparant focus:ring-0 focus:shadow-none focus:drop-shadow-xl";
    return (
        <>
            <label
                htmlFor="pesan"
                className="text-black font-poppins font-bold"
            >
                Pesan<span className="text-red-600">*</span>
            </label>
            <br />
            <textarea
                placeholder="Masukkan Pesan"
                id="pesan"
                className={`${styleColumn} ${styleFocus}`}
                rows="10" // Menentukan jumlah baris awal
                cols="50" // Menentukan lebar textarea
            ></textarea>
        </>
    );
};

export default ColumnInputPesan;
