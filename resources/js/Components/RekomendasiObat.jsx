import React from "react";

const RekomendasiObat = ({ medicines }) => {
    return (
        <>
            {medicines.map((medicine) => (
                <section className="w-[900px]  px-[50px] py-[30px] flex gap-14 mx-auto rounded-3xl bg-white border-2 border-solid border-green-50 my-4">
                    <div className="w-[350px] h-[230px] bg-red-300 rounded-2xl overflow-hidden flex-[40%] ">
                        <img src={medicine.image} alt="" className="w-full h-full " />
                    </div>
                    <div className="flex-[60%]">
                        <h1 className="text-[24px] font-poppins text-black font-semibold">
                            {medicine.title}
                        </h1>
                        <p className="font-poppins text-black text-[16px]">
                            {medicine.content}
                        </p>
                    </div>
                </section>
            ))}
        </>
    );
};

export default RekomendasiObat;
