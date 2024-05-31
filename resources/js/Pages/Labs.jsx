import React from "react";
import Button from "@/Components/Button";
import NavBar from "@/Components/NavBar";

const Labs = () => {
    return (
        <>
                <NavBarComponent />
                <h1>Ini halaman testing komponen, section, dan page</h1>
                <ButtonComponent />
        </>
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

export default Labs;
