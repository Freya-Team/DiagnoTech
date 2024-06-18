import React, { useState } from "react";
import Button from "@/Components/Button";
import CardPenyakit from "@/Components/CardPenyakit";
import CardPreview from "@/Components/CardPreview";
import Dropdown from "@/Components/Dropdown";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import StepDetection from "@/Components/StepDetection";

const PraDetectImage = () => {
    // State untuk mengelola gambar
    const [image, setImage] = useState(
        "https://picsum.photos/seed/picsum/200/300"
    );

    // Handler untuk mengatur ulang gambar
    const resetImage = () => {
        setImage("https://picsum.photos/seed/picsum/200/300");
    };

    return (
        <>
            <section className="bg-white">
                <NavBar />
                <div className="w-[80%] mx-auto">
                    <div className="h-[40px]"></div>
                    <h1 className="font-bold text-3xl text-center text-black">
                        Mulai Deteksi Penyakitmu
                    </h1>
                    <div className="h-[20px]"></div>
                    <div className="bg-orange-200 w-full"></div>
                </div>
                {/* dropdown */}
                <div className="w-[550px] mx-auto flex items-center space-x-4">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <div className="flex">
                                <Button
                                    theme="tertiary"
                                    text="Pilih Kategori"
                                />
                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </Dropdown.Trigger>
                        <Dropdown.Content align="right" width="48">
                            <Dropdown.Link href="#">Mata</Dropdown.Link>
                            <Dropdown.Link href="#">Kulit</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                {/* end dropdown */}
                <div className="w-[80%] mx-auto">
                    <div className="h-[20px]"></div>
                    <CardPreviewComponent image={image} setImage={setImage} />
                    <div className=" mx-auto flex justify-center gap-5">
                        <a href="/pradetectimage">
                            <Button
                                theme="secondary"
                                text="Hapus"
                                onClick={resetImage}
                            />
                        </a>
                        <Button theme="primary" text="Deteksi" />
                    </div>
                    <div className="h-[40px]"></div>
                    <StepDetection />
                    <div className="h-[90px]"></div>
                    <div className="">
                        <h1 className="text-black font-bold text-[30px] text-center">
                            Daftar Penyakit{" "}
                        </h1>
                        <h1 className="text-black text-[24px] text-center">
                            Daftar Penyakit Penyakit yang telah dipelajari oleh
                            deep learning DiagnoTech
                        </h1>
                    </div>
                    <div className="h-[60px]"></div>
                    <div className="flex flex-wrap">
                        <CardPenyakitComponent />
                    </div>
                    <div className="h-[90px]"></div>
                </div>

                <FooterComponent />
            </section>
        </>
    );
};

export default PraDetectImage;

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

const CardPreviewComponent = ({ image, setImage }) => {
    const title = "Preview";

    const handleImageUpload = (newImage) => {
        setImage(newImage);
    };

    return (
        <>
            <CardPreview
                image={image}
                title={title}
                onImageUpload={handleImageUpload}
            />
        </>
    );
};

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
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
        {
            title: "Agne ayey",
            image: "https://picsum.photos/seed/picsum/200/300",
        },
    ];
    return (
        <>
            <section className="mx-auto flex w-full flex-wrap justify-between">
                <CardPenyakit content={content} listsDiseases={listsDiseases} />
            </section>
        </>
    );
}
