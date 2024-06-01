import React from "react";
import Button from "@/Components/Button";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

const Labs = () => {
    return (
        <div className="">
            <NavBarComponent />
            <h1>Ini halaman testing komponen, section, dan page</h1>
            <ButtonComponent />
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

function NavBarComponent() {
    return (
        <>
            <NavBar />
        </>
    );
}

function FooterComponent() {
    return (
        <>
            <Footer />
        </>
    );
}

export default Labs;
