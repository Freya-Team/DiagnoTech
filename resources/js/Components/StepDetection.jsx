import React from "react";

const StepDetection = () => {
    return (
        <>
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
                <li className="step step-success">
                    <h1 className="text-black">
                        Pilih gambar dari berkas atau <br /> ambil gambar
                        melalui kamera
                    </h1>
                </li>
                <li className="step step-success" style={{ color: "white" }}>
                    <h1 className="text-black">
                        Pastikan file dalam format .png <br /> atau .jpg lalu
                        klik tombol ‘Deteksi’
                    </h1>
                </li>
                <li className="step step-success" style={{ color: "white" }}>
                    <h1 className="text-black">
                        Dapatkan hasil deteksi penyakit <br /> dan rekomendasi
                        perawatan
                    </h1>
                </li>
            </ul>
        </>
    );
};

export default StepDetection;
