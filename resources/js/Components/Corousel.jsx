import React, { useState } from 'react';
import CardBlog from './CardBlog';

const Corousel = () => {
    const [index, setIndex] = useState(1);

    const handleNext = () => {
        setIndex(prevIndex => prevIndex + 1);
    };

    const handlePrev = () => {
        setIndex(prevIndex => prevIndex - 1);
    };
    return (
        <>
            <div className="carousel carousel-center  p-4 ml-[20rem] space-x-4  rounded-box relative">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${index}`} onClick={handlePrev}
                        className={`btn btn-circle ${index === 1 ? 'hidden' : 'inline-flex'}`}>
                        ❮
                    </a>
                    <a href={`#slide${index}`} onClick={handleNext}
                        className={`btn btn-circle ${index === 5 ? 'hidden' : 'inline-flex'}`}>
                        ❯
                    </a>
                </div>
                <div id='slide1' className="carousel-item ">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />

                </div>
                <div id='slide2' className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                </div>
                <div id='slide3' className="carousel-item">
                    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                </div>
            </div>
        </>
    )
}

export default Corousel