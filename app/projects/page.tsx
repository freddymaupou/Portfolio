'use client'

import Image from "next/image";
import "@/app/projects/style.css"
import { useEffect, useState } from "react";

type Project = {
    srcImg: string,
    title: string,
    job: string,
    year: number,
    tasks : string[]
}

const allP: Project[] = [
    {
        srcImg: "/doompa_loompa.png",
        title: "Doompa Loompa",
        job: "Gameplay Programmer",
        year: 2021,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/mega_black_hole.png",
        title: "Gameplay Programmer & Game Designer",
        job: "Job",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/tonatiuh_itza.png",
        title: "Tonatiuh Itza",
        job: "Lead Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/ou_est_gil.png",
        title: "Où est Gil ?",
        job: "Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/olympos_drama.jpg",
        title: "Olympos Drama",
        job: "Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/eva.png",
        title: "Eva",
        job: "Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/dont_mess_with_vampires.png",
        title: "Don't Mess With Vampires",
        job: "Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/game_hatch.png",
        title: "Game & Hatch",
        job: "Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/shovel_hell.png",
        title: "Shovel Hell",
        job: "Lead Gameplay Programmer",
        year: 2022,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/fill_it.png",
        title: "Fill It!",
        job: "Gameplay Programmer",
        year: 2023,
        tasks: ["First Task", "Gamefeel", "Animation"],
    },
    {
        srcImg: "/the_frozen_barrel.png",
        title: "The Frozen Barrel",
        job: "Lead Gameplay Programmer",
        year: 2023,
        tasks: ["Système de Dialogue et de Choix", "Parsing et Tri de texte à partir d'un fichier CSV", "Gamefeel apparition/disparition de personnages"],
    }
]

export default function Projects(){
    const [isFirstLook, setIsFirstLook] = useState<boolean>(false);

    useEffect(() => {
        const projectsDiv = document.querySelectorAll(".project");
        const windowHeight = window.innerHeight;

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
    }, [isFirstLook])

    return (
    <>
    {allP.map((project, index) => {
        if(index % 2 === 0){
            return (
            <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50] h-[350]">
                {/* should be the same width as the image or the text for the border to be centered */}
                <div className="w-[500]">
                    <h1>{project.title} - {project.job}</h1>
                    <h2>{project.year}</h2>
                    {project.tasks.map((task, idx) => {
                        return (
                            <div key={idx}>
                                <p>- {task}</p>
                            </div>
                        );
                    })}  
                </div>

                <div className="h-[50] border border-solid border-white">
                </div>

                <Image src={project.srcImg} alt={project.title} width={350} height={350}/>
            </div>
            );
        } else{
            return (
            <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50] h-[350]">
                <Image src={project.srcImg} alt={project.title} width={350} height={350}/>

                <div className="h-[50] border border-solid border-white">
                </div>

                <div className="w-[500]">
                    <h1>{project.title} - {project.job}</h1>
                    <h2>{project.year}</h2>
                        
                    {project.tasks.map((task, idx) => {
                        return (
                            <div key={idx}>
                                <p>- {task}</p>
                            </div>
                        );
                    })} 
                </div>
            </div>
            );
        }
    }
    )}
    </>
    );
}