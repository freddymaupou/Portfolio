'use client'

import "@/app/projects/style.css"
import { useEffect, useState } from "react";
import ProjectLess from "../ui/project_less";

export type Project = {
    srcImg: string,
    extLink: string,
    title: string,
    details: string,
    year: number,
    tasks : string[]
}

const allP: Project[] = [
    {
        srcImg: "/doompa_loompa.png",
        extLink: "https://nicolas-blois.itch.io/doompa-loompa",
        title: "Doompa Loompa - Gameplay Programmer",
        details: "11 people - 4 days",
        year: 2021,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/mega_black_hole.png",
        extLink: "https://artyu.itch.io/mega-black-hole",
        title: "Mega Black Hole - Gameplay Programmer & Game Designer",
        details: "3 people - 1 months",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/tonatiuh_itza.png",
        extLink: "https://xaltio.itch.io/tonatiuh-itza",
        title: "Tonatiuh Itza - Lead Gameplay Programmer",
        details: "5 people - 3 weeks",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/ou_est_gil.png",
        extLink: "https://artyu.itch.io/ou-est-lig",
        title: "Où est Gil ? - Gameplay Programmer",
        details: "2 people - 2 weeks",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/olympos_drama.jpg",
        extLink: "https://frogat.itch.io/olympos-drama",
        title: "Olympos Drama - Gameplay Programmer",
        details: "12 people - 3 days",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/eva.png",
        extLink: "https://rpahel.itch.io/eva",
        title: "Eva - Gameplay Programmer",
        details: "4 people - 2 weeks",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/dont_mess_with_vampires.png",
        extLink: "https://somegame94.itch.io/dont-mess-with-vampire",
        title: "Don't Mess With Vampires - Gameplay Programmer",
        details: "9 people - 1 month",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/game_hatch.png",
        extLink: "https://xaltio.itch.io/game-hatch",
        title: "Game & Hatch - Gameplay Programmer",
        details: "8 people - 3 days",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/shovel_hell.png",
        extLink: "https://somegame94.itch.io/shovel-hell",
        title: "Shovel Hell - Lead Gameplay Programmer",
        details: "12 people - 3 months",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/fill_it.png",
        extLink: "https://freddym.itch.io/fill-it",
        title: "Fill It! - Gameplay Programmer",
        details: "1 people - 1 week",
        year: 2023,
        tasks: ["First Task", "Gamefeel", "Animation"],
    },
    {
        srcImg: "/the_frozen_barrel.png",
        extLink: "https://freddym.itch.io/the-frozen-barrel",
        title: "The Frozen Barrel - Lead Gameplay Programmer",
        details: "7 people - 1 months",
        year: 2023,
        tasks: ["Système de Dialogue et de Choix", "Parsing et Tri de texte à partir d'un fichier CSV", "Gamefeel apparition/disparition de personnages"],
    }
]

export default function Projects(){
    const windowHeight = window.innerHeight;
    const [isFirstLook, setIsFirstLook] = useState<boolean>(false);


    useEffect(() => {
        const projectsDiv = document.querySelectorAll(".project");

        // animate the firsts projects divs when coming to /projects
        if(!isFirstLook){
            projectsDiv.forEach(project => {
                if(project.getBoundingClientRect().top < (windowHeight - 50) || project.getBoundingClientRect().bottom < (windowHeight + 50)){
                    project.classList.add("fade-in-bottom");
                }
            })
            setIsFirstLook(true);
        }

        window.addEventListener("scroll", () => {
            //console.log("Height: " + windowHeight) // 919
            projectsDiv.forEach(project => {
                const bottom = project.getBoundingClientRect().bottom;
                const top = project.getBoundingClientRect().top;
                //console.log(key + " Top: " + top);
                //console.log("Bottom: " + bottom);

                if(bottom < windowHeight + 50){
                    project.classList.add("fade-in-bottom");
                    if(project.classList.contains("fade-out-up")){
                        project.classList.remove("fade-out-up");
                    }
                }

                if(top < -120){
                    project.classList.add("fade-out-up");
                    if(project.classList.contains("fade-in-bottom")){
                        project.classList.remove("fade-in-bottom");
                    }
                }
                
                if(top > (windowHeight - 100)){
                    project.classList.add("fade-out-up");
                    if(project.classList.contains("fade-in-bottom")){
                        project.classList.remove("fade-in-bottom");
                    }
                }
            })
        })
    }, [isFirstLook, windowHeight])

    return (
    <>
    <div className="flex flex-wrap justify-evenly items-center"> {/* flex-wrap */}
        <ProjectLess projectID={allP[4]} />

        <ProjectLess projectID={allP[2]} />
        <ProjectLess projectID={allP[3]} />
        <ProjectLess projectID={allP[1]} />

    </div>

    {/* {{allP.map((project, index) => { */}
        {/* if(index % 2 === 0){ */}
            {/* return ( */}
            {/* <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50] h-[350]"> */}
                {/* should be the same width as the image or the text for the border to be centered */}
                {/* <div className="w-[500]"> */}
                    {/* <h1>{project.title} - {project.job}</h1> */}
                    {/* <h2>{project.year}</h2> */}
                    {/* {project.tasks.map((task, idx) => { */}
                        {/* return ( */}
                            {/* <div key={idx}> */}
                                {/* <p>- {task}</p> */}
                            {/* </div> */}
                        {/* ); */}
                    {/* })}   */}
                {/* </div> */}

                {/* <div className="h-[50] border border-solid border-white"> */}
                {/* </div> */}

                {/* <Image src={project.srcImg} alt={project.title} width={350} height={350}/> */}
            {/* </div> */}
            {/* ); */}
        {/* } else{ */}
            {/* // return ( */}
            {/* // <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50] h-[350]"> */}
                {/* // <Image src={project.srcImg} alt={project.title} width={350} height={350}/> */}

                {/* // <div className="h-[50] border border-solid border-white"> */}
                {/* // </div> */}

                {/* // <div className="w-[500]"> */}
                    {/* // <h1>{project.title} - {project.job}</h1> */}
                    {/* // <h2>{project.year}</h2> */}
                        
                    {/* // {project.tasks.map((task, idx) => { */}
                        {/* // return ( */}
                            {/* // <div key={idx}> */}
                                {/* <p>- {task}</p> */}
                            {/* </div> */}
                        {/* ); */}
                    {/* })}  */}
                {/* </div> */}
            {/* </div> */}
            {/* ); */}
        {/* } */}
    {/* } */}
    {/* )}} */}
    </>
    );
}