'use client'

import Image from "next/image";
import "@/app/projects/style.css"
import { useEffect } from "react";

type Project = {
    srcImg: string,
    title: string,
    job: string,
    year: number,
    tasks : string[]
}

const allP: Project[] = [
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    },
    {
        srcImg: "/hollow-knight.jpg",
        title: "Project name",
        job: "Job",
        year: 2025,
        tasks: ["First Task", "Second Task", "Third Task"],
    }

]


export default function Projects(){
    
    useEffect(() => {
        const projectsDiv = document.querySelectorAll(".project");
        window.addEventListener("scroll", () => {
            projectsDiv.forEach(project => {
                const bottom = project.getBoundingClientRect().bottom;
                const top = project.getBoundingClientRect().top;
                // console.log("Top: " + top);
                // console.log("Bottom: " + bottom);
                // console.log("Height: " + window.innerHeight)

                if(bottom < window.innerHeight + 50){
                    project.classList.add("fade-in-bottom");
                    if(project.classList.contains("fade-in-up")){
                        project.classList.remove("fade-in-up");
                    }
                }

                if(top < -120){
                    project.classList.add("fade-in-up");
                    if(project.classList.contains("fade-in-bottom")){
                        project.classList.remove("fade-in-bottom");
                    }
                }

                if(top > window.innerHeight - 100){
                    project.classList.add("fade-in-up");
                    if(project.classList.contains("fade-in-bottom")){
                        project.classList.remove("fade-in-bottom");
                    }
                }
            })
        })
    }, [])

    return (
    <>
    {allP.map((project, index) => {
        if(index % 2 === 0){
            return (
            <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50]">
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

                <Image src={project.srcImg} alt={project.title} width={500} height={500}/>
            </div>
            );
        } else{
            return (
            <div key={index} className="project flex flex-row justify-evenly items-center mb-[50] mt-[50]">
                <Image src={project.srcImg} alt={project.title} width={500} height={500}/>

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