import React from "react";

const CardPenyakit = ({ listsDiseases, content }) => {
    return (
        <>
            {listsDiseases.map((disease) => (
                <section className="w-[250px] h-[250px]  rounded-3xl overflow-hidden relative mb-[20px]">
                    <img
                        src={disease.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#24A89E] opacity-80 via-[#2DD2C5]">
                        <div className="absolute bottom-0 left-0 p-4">
                            <h1 className="text-white font-bold text-[18px]">
                                {disease.title}
                            </h1>
                            <p className="text-white text-[16px]">{content}</p>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default CardPenyakit;
