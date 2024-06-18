import React from 'react'
import NavBar from '@/Components/NavBar'
import Journey from '@/Components/Journey'
import CardTeamProfile from '@/Components/CardTeamProfile'
import Footer from '@/Components/Footer'

const About = () => {
  return (
    <div className="bg-gray-50 flex flex-col gap-16">
        <NavBar theme='secondary' />
        <HeroComponent />
        <p className="font-poppins font-bold text-4xl text-black text-center">Apa Penyakit Anda?</p>
        <VideoComponent />
        <p className="font-poppins font-bold text-4xl text-black text-center">Perjalanan Diagnotech</p>
        <JourneyComponent />
        <p className="font-poppins font-bold text-4xl text-black text-center">Tim DiagnoTech</p>
        <CardTeamComponents />
        <FooterComponent />
    </div>
  )
}

function HeroComponent () {
    return (
        <div className='bg-custom-image bg-cover bg-center mb-[26px] '>
            <div className='w-screen h-screen bg-gradient-to-b from-green-20 via-green-50 to-white opacity-70'>
            </div>
            <div className='flex flex-col gap-[22px] justify-center items-center absolute inset-0 '>
                <p className='font-poppins font-semibold text-[56px] text-white text-center'>DiagnoTech</p>
                <p className='font-poppins font-normal text-base text-white text-center w-[680px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga vero dolor modi fugit quis quibusdam odio autem nihil! Possimus quis blanditiis eveniet voluptatem et reprehenderit molestias? Laboriosam, porro fuga.</p>
            </div>
        </div>
    )
}

function VideoComponent () {
    return (
        <div className='flex gap-10 justify-center items-center mb-[26px]'>
            <p className='font-poppins font-normal text-base text-black w-[35%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa impedit, veniam ea modi praesentium officiis nisi eum! Dolores, numquam eius. Ab nesciunt minus laboriosam aliquam nisi. Quibusdam soluta deleniti voluptatibus ab laboriosam, impedit velit enim. Blanditiis dignissimos mollitia vel?</p>
            <iframe
                width="568"
                height="340"
                src={`https://www.youtube.com/embed/BY81yNttfpg`}
                title="Video Profile DiagnoTech"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-2 border-gray-300 shadow-xl" />
        </div>
    )
}

function JourneyComponent () {
    let journey = [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image: "images/grayBg.jpg",
        },
        {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image: "images/grayBg.jpg",
        },
        {
            id: 3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image: "images/grayBg.jpg",
        },
    ]
    return (
        <div className="flex flex-col gap-2.5 mb-[26px]">
            <Journey id={journey[0].id} text={journey[0].text} image={journey[0].image} />
            <Journey id={journey[1].id} text={journey[1].text} image={journey[1].image} />
            <Journey id={journey[2].id} text={journey[2].text} image={journey[2].image} />
        </div>
    )
}

function CardTeamComponents() {
    return (
        <>
            <div className="flex gap-[100px] justify-center items-center mb-[26px]">
                <CardTeamProfile name='Reiki Aziz' job='CEO of DiagnoTech' image='images/team-profile.png' />
                <CardTeamProfile name='Ahmad Aziz' job='Cheerleader' image='images/team-profile2.png' />
                <CardTeamProfile name='Mohamad Fajar' job='Security' image='images/team-profile3.png' />
            </div>
        </>
    )
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

export default About