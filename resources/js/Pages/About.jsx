import NavBar from '@/Components/NavBar'
import React from 'react'
import Journey from '@/Components/Journey'
import CardTeamProfile from '@/Components/CardTeamProfile'

const About = () => {
  return (
    <div className="bg-gray-50">
        <NavBar />
        <JourneyComponent />
        <CardTeamComponents />
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
        <div className="flex flex-col gap-2.5 m-[60px]">
            <Journey id={journey[0].id} text={journey[0].text} image={journey[0].image} />
            <Journey id={journey[1].id} text={journey[1].text} image={journey[1].image} />
            <Journey id={journey[2].id} text={journey[2].text} image={journey[2].image} />
        </div>
    )
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
    )
}

export default About