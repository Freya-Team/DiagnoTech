import React from "react";
import Button from "@/Components/Button";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import CardLayanan from "@/Components/CardLayanan";
import RekomendasiObat from "@/Components/RekomendasiObat";
import StepDetection from "@/Components/StepDetection";
import AccordionRekomendasi from "@/Components/AccordionRekomendasi";
import CardBlog from "@/Components/CardBlog";

const Labs = () => {
    return (
        <div className="bg-gray-50">
            <NavBarComponent />
            <h1 className="font-bold text-center text-3xl  mb-20 font-poppins text-black">
                HALAMAN TESTING
            </h1>
            <CardBlogComponent />
            <ButtonComponent />
            <CardLayananComponent />
            <RekomendasiObatComponent />
            <StepDetectionComponent />
            <AccordionRekomendasiComponent />
            <div className="h-80"></div>
            <FooterComponent />
        </div>
    );
};

function ButtonComponent() {
    const dataButton = [
        {
            text: "Masuk",
            theme: "primary",
        },
        {
            text: "Kontak",
            theme: "secondary",
        },
        {
            text: "Hapus",
            theme: "tertiary",
        },
    ];

    return (
        <>
            <Button text={dataButton[0].text} theme={dataButton[0].theme} />
            <Button text={dataButton[1].text} theme={dataButton[1].theme} />
            <Button text={dataButton[1].text} theme={dataButton[2].theme} />
        </>
    );
}

function CardBlogComponent() {
    
    return (
        <>
            <CardBlog   />
        </>
    )
}

function CardLayananComponent() {
    const dataLayanan = [
        {
            title: "Gratisan",
            list: [
                "Deteksi penyakit",
                "3 kali deteksi per hari",
                "Rekomendari perawatan",
                "Chatbot",
                "Notifikasi pengingat",
            ],
            price: 0,
            icons: ["check", "check", "close", "close", "close"],
            theme: "secondary",
        },
        {
            title: "VIP",
            list: [
                "Deteksi penyakit",
                "Bebas deteksi per hari",
                "Rekomendari perawatan",
                "Chatbot",
                "Notifikasi pengingat",
            ],
            price: 10000,
            icons: ["check", "check", "check", "check", "check"],
            theme: "primary",
        },
        {
            title: "Standar",
            list: [
                "Deteksi penyakit",
                "Bebas deteksi per hari",
                "Rekomendari perawatan",
                "Chatbot",
                "Notifikasi pengingat",
            ],
            price: 5000,
            icons: ["check", "check", "check", "close", "close"],
            theme: "secondary",
        },
    ];
    return (
        <div className="flex gap-[39px]">
            {dataLayanan.map((data) => (
                <CardLayanan
                    title={data.title}
                    list={data.list}
                    price={data.price}
                    icons={data.icons}
                    theme={data.theme}
                />
            ))}
        </div>
    );
}

function NavBarComponent() {
    return (
        <>
            <NavBar />
        </>
    );
}

// Di dalam komponen Labs
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

function RekomendasiObatComponent() {
    const medicines = [
        {
            image: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ludG1lbnR8ZW58MHx8MHx8fDA%3D",
            title: "Salep Obat",
            content:
                "aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies.  aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies. ",
        },
        {
            image: "https://images.unsplash.com/photo-1715163544606-815bd429042e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmV0ZWwlMjBsZWFmfGVufDB8fDB8fHww",
            title: "Daun Sirih",
            content:
                "aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies.  aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies. ",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1664373622315-61c8ba4282a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYWNldGFtb2x8ZW58MHx8MHx8fDA%3D",
            title: "Paracetamol",
            content:
                "aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies.  aliquam. Elit risus pharetra cras morbi sed egestas. Et convallis sed maecenas ultricies ipsum mauris faucibus ultricies. ",
        },
    ];
    return <RekomendasiObat medicines={medicines} />;
}

function StepDetectionComponent() {
    return <StepDetection />;
}

function AccordionRekomendasiComponent() {
    let penyembuhans = [
        {
            id: 1,
            title: "title 1",
            content: "content 1",
        },
        {
            id: 2,
            title: "title 2",
            content: "content 2",
        },
        {
            id: 3,
            title: "title 3",
            content: "content 3",
        },
    ];
    return (
        <AccordionRekomendasi penyembuhans={penyembuhans} />
    )

}

export default Labs;
