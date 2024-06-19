import React from 'react';

const CardBlog = ({ title, text, theme, image }) => {
    theme = "cardCorousel"
    image = 'grayBg'
    title = 'Judul Blog'
    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus atque repellendus labore sint qui asperiores est consectetur maiores similique unde ?'

    const [imgSrc, setImgSrc] = React.useState(`images/${image}.jpg`);

    React.useEffect(() => {
        const img = new Image();
        img.src = `images/${image}.jpg`;
        img.onload = () => setImgSrc(`images/${image}.jpg`);
        img.onerror = () => setImgSrc(`images/${image}.png`);
    }, [image]);
    return (
        <>
            <div className={`card card-compact w-72 sm:w-50  bg-[#EAFAF9] ${theme == 'cardCorousel' ? 'shadow-md' : ''} `}>
                <figure><img className={`card-title ${theme === 'cardCorousel' ? '' : 'rounded-lg'}`} src={imgSrc} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className={theme == 'cardCorousel' ? 'inline' : 'hidden'}>{text}</p>
                    <a href="/blog/{slug}" className="text-[#1B7E76]">Read More</a>
                </div>
            </div>
        </>
    )
};

export default CardBlog