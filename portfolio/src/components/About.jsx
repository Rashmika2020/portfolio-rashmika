import React from "react";
import AboutImage from "../assets/profile.jpg"

const About = () => {
    return(
        <div className="bg-black text-white py-20" id='about'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutImage} alt="aboutme" className="w-72 h-80 roundede object-cover mb-8 md:mb-0" />
                    <p>
                    I am a fresh graduate and a passionate full-stack developer focused on building modern applications. 
                    My expertise lies in creating seamless user experiences using technologies like React, Node.js, and TypeScript.
                     With a strong foundation in both frontend and backend development, I am excited to bring ideas to life through clean code.
                     I am always eager to contribute my skills to create impactful digital products.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;