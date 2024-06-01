import React from "react";

const Footer = () => {
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
            <footer className="bg-green-30 py-[34px]">
                <div className=" flex  px-[90px] justify-between mb-[60px]">
                    {/* flex 1 */}
                    <section className="flex flex-[40%] flex-wrap  h-full   ">
                        <div className=" flex w-full  mb-[20px] ">
                            {/* image */}
                            <div className="w-[85px] h-[85px]  rounded-full overflow-hidden mr-[15px] ">
                                <img
                                    src="https://picsum.photos/seed/picsum/200/300"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className=" my-auto">
                                <h1 className="text-[24px] font-bold text-white font-poppins ">
                                    Diagno{" "}
                                    <span className="text-green-55">
                                        {" "}
                                        Tech{" "}
                                    </span>
                                </h1>
                                <h1 className="text-white font-poppins">
                                    @ MedOn. All rights deserved
                                </h1>
                            </div>
                        </div>
                        <div className=" w-[70%]  ">
                            <h1 className="text-justify text-white font-poppins ">
                                Lorem idhf jdshf dhf fdihfiudhfdhfu dihduidh f
                                fdfd f idhfudfdf dhf d fgdfgdfdgdfydgfydgfyydy
                                dafsuf dfidfiudfu iudfhudhfuihdiu duhiufa s
                                daiofhdsahfhfads difhidhfudhfudhfudfdsf
                            </h1>
                        </div>
                    </section>
                    {/* flex 2 */}
                    <section className="flex-[35%]   ">
                        <h1 className="text-white font-bold text-[24px] font-poppins mb-[20px] ">
                            Artikel Populer
                        </h1>
                        {texts.map((text, index) => (
                            <h1
                                key={index}
                                className=" text-[16px] font-poppins text-white w-[80%]   mb-[16px]"
                            >
                                {text}
                            </h1>
                        ))}
                    </section>
                    {/* flex 3 */}
                    <section className="flex-[25%]  ">
                        <h1 className="font-bold font-poppins text-[24px] text-white mb-[20px]">
                            Social Media
                        </h1>
                        {sosmeds.map((sosmed) => (
                            <div className="w-full  flex mb-[25px]">
                                <div className="w-[35px] h-[35px]  mr-[16px]">
                                    <img
                                        src={sosmed.image}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="flex items-center font-poppins text-white">
                                    <h1 className="text-[16px]">
                                        {sosmed.text}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
                <h1 className="text-center text-white text-[16px]">
                    Copyright © 2024 Made With Passion by Freya Team
                </h1>
            </footer>
        </>
    );
};

export default Footer;
