import { useState } from "react";
import Navbar from "../components/Navbar";
import { Fade } from "react-reveal";
import ProJectCard from "../components/ProjectCard";
import { afefe, netclone, EQNSolver, NFTExplorer, OTKClothing, TodoApp, WeirdoNFT, Solcrash, DiscordRp, Taut, s1Db } from "../asset/Images";

const ProjectItem = [
    {
        image: netclone,
        name: 'Netclone',
        description: "A mini Netflix clone where you can't watch movies. it takes a team to build netflix....",
        projectLink: 'https://netclone-17863.firebaseapp.com/'
    },
    {
        image: afefe,
        name: 'Afefe',
        description: 'An app to check the weather conditions of anywhere in the world',
        projectLink: 'https://afefe.netlify.app/'
        // projectLink: '/startups'
    },
    {
        image: EQNSolver,
        name: 'eQnEaSe',
        description: 'An Elimination Method, Simultaneous Equation Solver App ',
        projectLink: 'https://equation-solver-three.vercel.app'
    },
    {
        image: NFTExplorer,
        name: 'NFT Explorer',
        description: 'A minimalistic app to find out more about NFT projects, nothing more..',
        projectLink: 'https://nft-explorers.vercel.app'
    },
    {
        image: OTKClothing,
        name: 'Crown Clothing',
        description: 'An E-commerce app, you can purchase anything with fake card details',
        projectLink: 'https://otk-clothing.netlify.app'
    },
    {
        image: TodoApp,
        name: 'TaskTraq',
        description: 'Not your regular todo app, it keeps traq',
        projectLink: 'https://todo-l-app.netlify.app'
    },
    {
        image: WeirdoNFT,
        name: "Weirdo's NFT",
        description: 'An interactive web app for weird NFTs',
        projectLink: 'https://weirdo-fc.netlify.app/'
    },
    {
        image: Solcrash,
        name: 'Solcrash Mini',
        description: 'A app that could make you a trilionaire if it was real..',
        projectLink: 'https://solcrash.netlify.app'
    },
    {
        image: Taut,
        name: 'taut',
        description: 'The best Selfbot for Slack',
        projectLink: 'https://github.com/bryanqueen/taut'
    },

    {
        image: DiscordRp,
        name: 'DiscordAir-Ctrl',
        description: 'Nice Discord rich presences for virtual air traffic controllers.',
        projectLink: 'https://github.com/bryanqueen/DiscordAir-Ctrl'
    },
    // {
    //     image: s1Db,
    //     name: 's1Db Node',
    //     description: 'A barebones key-value store that requires no setup besides a token.',
    //     projectLink: 'https://github.com/bryanqueen/s1Db-node'
    // }
]

function Projects(props) {
    
    return (
        <div>
            <Navbar/>
            <div className="bg-[#10101a] px-5 min-h-screen pt-6 pb-20">
                <Fade bottom>
                <h1  className='text-3xl text-white font-semibold py-4'>Projects</h1>
                <p className="text-xl text-white leading-8 py-4">Here is a bunch of stuffs i built for fun. It Includes <span className="italic text-yellow-200">Frontend Apps, Backend API's, Libraries</span> and a lot of good stuff.  </p> 
                </Fade>
                
                <Fade bottom>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-3">
                        {ProjectItem.map((project, idx) => (
                            <ProJectCard key={idx} image={project.image} name={project.name} description={project.description} projectLink={project.projectLink}/>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;