import Image from "next/image"
import Picto from "./picto_tech"
import ProjectMore from "./project_more"
import { useState } from "react"
import { Project } from "../projects/page";

export default function ProjectLess(props: {projectID: Project}){
    const [isShowMore, setIsShowMore] = useState<boolean>(false);

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    function handleMouseEnter(e){
        e.target.style.opacity = 0.3;
        e.target.parentNode.children[1].style.opacity = 1;
    }

    function handleMouseLeave(e){
        e.target.style.opacity = 1;
        e.target.parentNode.children[1].style.opacity = 0;
    }

    function handleClickShowMore(): void {
        setIsShowMore(!isShowMore);
    }

    function handleClickShowLess(){
        setIsShowMore(!isShowMore);
        console.log(isShowMore);
    }

    return (
        <>
            <div className="flex justify-evenly items-start flex-[50%] flex-col">
                <div className="relative mx-6" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}> {/* add w-1/2 */}
                    <Image className="images" src={props.projectID.srcImg} alt={"Oui"} width={windowWidth / 2 - 100} height={windowHeight / 2 - 100}/>
                    <div className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, adipisci? Repellendus, enim.
                                Vero quam libero dolor inventore sequi perferendis optio doloremque distinctio, ea fugit quis esse laborum, repudiandae reprehenderit iusto?</p> {/* pitch */}
                        <div className="flex items-end justify-between flex-row">
                            <div></div>
                            <button className="cursor-pointer text-2xl rounded-[50%] border border-white" onClick={() => handleClickShowMore()}>+</button>                
                        </div>
                    </div>
                </div>
                <Picto techs={["Unity", "C#"]}/>
            </div>
            <ProjectMore isShow={isShowMore} title={props.projectID.title} details={props.projectID.details} tasks={props.projectID.tasks} projLink={props.projectID.extLink} showLess={handleClickShowLess} />
        </>
    )
}