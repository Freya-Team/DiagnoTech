import React from "react";

const ColumnInput = ({ id, label, placeholder }) => {
    const styleColumn = "py-3 my-3 bg-transparent border-2 border-solid border-green-50 rounded-3xl w-full"
    const styleFocus = "focus:border-b-4 focus:border-green-50 focus:shadow-lg focus:shadow-green-50"
    return (
        <>
            <section className="w-full mx-auto my-5">
                <label htmlFor={id} className="text-black font-poppins ">
                    {label} <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                    placeholder={placeholder}
                    type="text"
                    id={id}
                    className={`${styleColumn} ${styleFocus}`}
                />
            </section>
        </>
    );
};

export default ColumnInput;
