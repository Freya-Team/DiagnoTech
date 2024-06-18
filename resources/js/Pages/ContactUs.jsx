import ColumnInputNEJ from "@/Components/ColumnInputNEJ";
import ColumnInputPesan from "@/Components/ColumnInputPesan";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

const ContactUs = () => {
    return (
        <>
            <section className="bg-white ">
                <NavBar theme={"secondary"} />
                <div className="h-[600px] w-full bg-[#1F948B]">
                    <TextTop />
                    <Jarak height={"h-[90px]"} />
                    <div className="shadow-2xl bg-white rounded-xl w-[70%] py-20 px-10 mx-auto">
                        <ColumnInputNEJComponent />
                    </div>
                </div>
                {/* ha */}
                <Jarak height={"h-[600px]"} />
                <FooterComponent />
            </section>
        </>
    );
};

export default ContactUs;

function Jarak({ height }) {
    return <div className={height}></div>;
}

function TextTop() {
    return (
        <>
            <Jarak height={"h-[160px]"} />
            <h1 className="font-bold text-[56px] text-white text-center">
                Hubungi Kami
            </h1>
            <Jarak height={"h-[20px]"} />
            <h1 className=" text-[20px] text-white text-center">
                Have a question or just want to say Hi? We’d love to hear you
            </h1>
        </>
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

function ColumnInputNEJComponent() {
    const NEJ = [
        {
            id: 1,
            label: "Name",
            placeholder: "Reiki Aziz Yoga",
        },
        {
            id: 2,
            label: "Email",
            placeholder: "Reiki@gmail.com",
        },
        {
            id: 3,
            label: "Judul",
            placeholder: "Permasalahan ketika ...",
        },
    ];
    return (
        <>
            <section className="flex  flex-wrap justify-between">
                <section className="w-[48%] ">
                    <ColumnInputNEJ
                        id={NEJ[0].id}
                        label={NEJ[0].label}
                        placeholder={NEJ[0].placeholder}
                    />
                </section>
                <section className="w-[48%] ">
                    <ColumnInputNEJ
                        id={NEJ[1].id}
                        label={NEJ[1].label}
                        placeholder={NEJ[1].placeholder}
                    />
                </section>
                <section className="w-full my-4">
                    <ColumnInputNEJ
                        id={NEJ[2].id}
                        label={NEJ[2].label}
                        placeholder={NEJ[2].placeholder}
                    />
                </section>
                <section className="w-full">
                    <ColumnInputPesanComponent />
                </section>
            </section>
        </>
    );
}

function ColumnInputPesanComponent() {
    return (
        <>
            <ColumnInputPesan />
        </>
    );
}
