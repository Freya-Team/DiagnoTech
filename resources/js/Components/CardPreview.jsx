import React from "react";

const CardPreview = ({image, title}) => {
    return (
        <>
            <section className="w-[550px] h-[400px]  rounded-3xl overflow-hidden relative mb-[20px] mx-auto my-10">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className=" absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#24A89E] opacity-80 via-[#2DD2C5]">
                    <div className="absolute bottom-0 left-0 p-4">
                        <h1 className="text-white font-bold text-[24px]">
                            {title}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardPreview;
