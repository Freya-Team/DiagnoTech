import React from "react";

const ColumnInputNEJ = ({ id, label, placeholder }) => {
    const styleColumn =
        "py-3 my-3 bg-transparent border-none rounded-xl bg-[#F3F1F9] w-[100%] text-black placeholder:italic ";
    const styleFocus =
        "focus: border-none focus:outline-none focus:border-transparant focus:ring-0 focus:shadow-none focus:drop-shadow-xl";
    return (
        <>
                <label
                    htmlFor={id}
                    className="text-black font-poppins font-bold"
                >
                    {label} <span className="text-red-600">*</span>
                </label>
                <br />
                <input
                    placeholder={placeholder}
                    type="text"
                    id={id}
                    className={`${styleColumn} ${styleFocus}  `}
                />
        </>
    );
};

export default ColumnInputNEJ;
