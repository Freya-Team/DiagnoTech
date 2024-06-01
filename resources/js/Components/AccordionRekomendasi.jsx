import React from "react";
import { useState } from "react";

const AccordionRekomendasi = ({penyembuhans}) => {
    const [activeAccordion, setActiveAccordion] = useState(1);

   

    const handleAccordionToggle = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="w-[80%] mx-auto">
                {penyembuhans.map((penyembuhan) => (
                    <div className={`collapse collapse-arrow border-2 my-1 ${activeAccordion === penyembuhan.id ? 'active' : ''}`} key={penyembuhan.id}>
                        <input
                            id={"accordion-" + penyembuhan.id}
                            type="checkbox"
                            checked={activeAccordion === penyembuhan.id}
                            onChange={() => handleAccordionToggle(penyembuhan.id)}
                        />
                        <label
                            htmlFor={"accordion-" + penyembuhan.id}
                            className={`collapse-title text-xl flex font-poppins font-bold ${activeAccordion === penyembuhan.id ? 'text-green-600' : 'text-green-50'}`}
                        >
                            <div className={`w-[30px] h-[30px] border-2 border-solid border-green-50 rounded-full flex items-center justify-center mr-4 ${activeAccordion === penyembuhan.id ? 'bg-green-600' : 'bg-green-50'}`}>
                                <h1 className={`text-white font-bold font-poppins ${activeAccordion === penyembuhan.id ? 'text-lg' : 'text-base'}`}>{penyembuhan.id}</h1>
                            </div>
                            {penyembuhan.title}
                        </label>
                        <div
                            className={`collapse-content ${activeAccordion === penyembuhan.id ? "open" : ""}`}
                        >
                            <p className="text-black">{penyembuhan.content}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default AccordionRekomendasi;
