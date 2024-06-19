import React from "react";
import { Fragment } from "react";
import Button from "./Button";

const NavBar = ({theme}) => {

    let text;
    let position;
    if (theme=='primary') {
        text = 'text-black'
    } 
    else if (theme=='secondary') {
        text = 'text-white'
        position = 'absolute'
    }

    return (
        <Fragment>
            <section className={`py-3 w-full px-[90px] pt-[20px] flex items-center justify-between bg-transparent ${position} z-50`}>
                {/* left */}
                <div className="flex gap-2 items-center">
                    <div className="w-[45px] h-[45px] rounded-full bg-red-300 overflow-hidden">
                        <img
                            src="https://picsum.photos/seed/picsum/200/300"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <h1 className={`text-[24px] font-bold ${text} font-poppins `}>
                        Diagno<span className="text-green-50">Tech</span>
                    </h1>
                </div>
                {/* mid  */}
                <div className="">
                    <a href="" className={`mx-[25px] ${text} font-poppins`}>
                        Beranda
                    </a>
                    <a href="" className={`mx-[25px] ${text} font-poppins`}>
                        Tentang Kami
                    </a>
                    <a href="" className={`mx-[25px] ${text} font-poppins`}>
                        Deteksi
                    </a>
                    <a href="" className={`mx-[25px] ${text} font-poppins`}>
                        Blog
                    </a>
                </div>
                <div className="flex gap-[15px]">
                    <Button text="Kontak Kami" theme="secondary" />
                    <Button text={"Masuk"} theme="primary" />
                </div>
            </section>
        </Fragment>
    );
};

export default NavBar;
