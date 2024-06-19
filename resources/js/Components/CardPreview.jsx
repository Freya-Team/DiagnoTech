import React, { useRef } from "react";

const CardPreview = ({ image, title, onImageUpload }) => {
    const fileInputRef = useRef(null);

    const handleSectionClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageUpload(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <section
                className="w-[550px] h-[400px] rounded-3xl overflow-hidden relative mb-[20px] mx-auto hover:drop-shadow-2xl hover:opacity-90 cursor-pointer"
                onClick={handleSectionClick}
            >
                <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#24A89E] opacity-80 via-[#2DD2C5]">
                    <div className="absolute bottom-0 left-0 p-4">
                        <h1 className="text-white font-bold text-[24px]">
                            {title}
                        </h1>
                    </div>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange}
                />
            </section>
        </>
    );
};

export default CardPreview;
