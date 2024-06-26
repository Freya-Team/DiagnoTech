import React from "react";
import Button from "@/Components/Button";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import CardPackage from "@/Components/CardPackage";
import RekomendasiObat from "@/Components/RekomendasiObat";
import StepDetection from "@/Components/StepDetection";
import AccordionRekomendasi from "@/Components/AccordionRekomendasi";
import ColumnInput from "@/Components/ColumnInput";
import CardTeamProfile from "@/Components/CardTeamProfile";
import CardBlog from "@/Components/CardBlog";
import Journey from "@/Components/Journey";
import CardPenyakit from "@/Components/CardPenyakit";
import CardPreview from "@/Components/CardPreview";
import ColumnInputNEJ from "@/Components/ColumnInputNEJ";
import ColumnInputPesan from "@/Components/ColumnInputPesan";
import Corousel from "@/Components/Corousel";

const Labs = () => {
    return (
        <div className="bg-gray-50">
            <NavBarComponent />
            <div className="mt-16">
                <h1 className="font-poppins font-bold text-4xl text-black text-center">Halaman Testing</h1>
            </div>
            <CorouselComponent />
            <JourneyComponent />
            <CardBlogComponent />
            <ButtonComponent />
            <CardLayananComponent />
            <RekomendasiObatComponent />
            <StepDetectionComponent />
            <AccordionRekomendasiComponent />
            <CardPreviewComponent />
            <CardPenyakitComponent />
            <ColumnInputNEJComponent />
            <ColumnInputPesanComponent />
            <ColumnInputComponent />
            <CardTeamComponents />

            <div className="h-80"></div>
            <FooterComponent />
        </div>
    );
};

function CorouselComponent() {
    return (
        <>
            <Corousel />
        </>
    )
}



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
        <div className="flex gap-3 justify-center items-center">
            <Button text={dataButton[0].text} theme={dataButton[0].theme} />
            <Button text={dataButton[1].text} theme={dataButton[1].theme} />
            <Button text={dataButton[1].text} theme={dataButton[2].theme} />
        </div>
    );
}

function CardBlogComponent() {

    return (
        <>
            <CardBlog />
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
        <div className="flex gap-[39px] justify-center items-center">
            {dataLayanan.map((data) => (
                <CardPackage
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
            <NavBar theme="primary" />
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
    return <AccordionRekomendasi penyembuhans={penyembuhans} />;
}
function CardPenyakitComponent() {
    let content = "Skin Disease";
    const listsDiseases = [
        {
            title: "Agne Disease",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
    ];
    return (
        <>
            <section className="mx-auto flex w-[80%] flex-wrap justify-between">
                <CardPenyakit content={content} listsDiseases={listsDiseases} />
            </section>
        </>
    );
}

function ColumnInputComponent() {
    let columns = [
        {
            id: 1,
            placeholder: "Your name",
            label: "name",
        },
    ];
    return (
        <>
            {columns.map((column) => (
                <ColumnInput
                    id={column.id}
                    label={column.label}
                    placeholder={column.placeholder}
                />
            ))}
        </>
    );
}

function CardPreviewComponent() {
    const image = "https://picsum.photos/seed/picsum/200/300";
    const title = "Preview";
    return (
        <>
            <CardPreview image={image} title={title} />
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
    ];
    return (
        <>
            {NEJ.map((item) => (
                <ColumnInputNEJ
                    id={item.id}
                    label={item.label}
                    placeholder={item.placeholder}
                />
            ))}
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

function CardTeamComponents() {
    return (
        <>
            <p className="font-poppins font-bold text-4xl text-black text-center mb-[50px]">Tim DiagnoTech</p>
            <div className="flex gap-[100px] justify-center items-center">
                <CardTeamProfile name='Reiki Aziz' job='CEO of DiagnoTech' image='images/team-profile.png' />
                <CardTeamProfile name='Ahmad Aziz' job='Cheerleader' image='images/team-profile2.png' />
                <CardTeamProfile name='Mohamad Fajar' job='Security' image='images/team-profile3.png' />
            </div>
        </>
    );
}

function JourneyComponent() {
    let journey = [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            image: "images/grayBg.jpg",
        },
        {
            id: 2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
            image: "images/grayBg.jpg",
        },
        {
            id: 3,
            text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
            image: "images/grayBg.jpg",
        },
    ];
    return (
        <div className="flex flex-col gap-2.5">
            {journey.map((item) => (
                <Journey id={item.id} text={item.text} image={item.image} />
            ))}
        </div>
    );
}


export default Labs;
