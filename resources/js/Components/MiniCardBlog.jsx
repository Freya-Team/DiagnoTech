import React from "react";

const MiniCardBlog = () => {
    return (
        <>
            <section className="w-[350px] h-[325px] bg-[#EAFAF9] drop-shadow-md hover:drop-shadow-2xl  overflow-hidden rounded-box">
                <div className="w-full h-[60%] rounded-xl">
                    <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div className="py-3 px-5">
                    <h1 className="text-[18px] font-bold text-black">
                        Development of COVID-19 Vaccine Research
                    </h1>
                    <a href="#" className="text-[14px] text-[#1B7E76] hover:cursor-pointer hover:font-bold">
                        Read More
                    </a>
                </div>
            </section>
        </>
    );
};

export default MiniCardBlog;
