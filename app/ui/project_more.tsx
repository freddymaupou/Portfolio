import Image from "next/image";
import "@/app/projects/style.css"

export default function ProjectMore(props : {isShow: boolean, title: string, details: string, tasks: string[], projLink: string, showLess: () => void}){
    return (
        <div style={props.isShow ? {flex: "50%"} : {display: "none"}}>
        {props.isShow && 
            <div className={props.isShow ? "flex flex-col justify-between mx-6 h-[500]" : "flex flex-col justify-between mx-6 h-[500] fade-out-left"}>
            <div>
                <h1 className="text-4xl">{props.title}</h1>
                <h2 className="italic">{props.details}</h2><br />
            </div>
            <ul className="mb-8">
                {
                    props.tasks.map((task, index) => (
                        <li key={index}>- {task}</li>
                    ))
                }
            </ul>

            <div className="flex justify-between items-center mr-10">
                <a href={props.projLink} target="_blank"><Image src={"/logo_itchio.svg"} alt={"Lien vers le jeu Olympos Drama"} width={200} height={100}/></a>
                
                <button className="cursor-pointer rounded-[50%] border border-white w-[45] h-[45] text-2xl text-center" onClick={() => props.showLess()}>-</button>
            </div>
        </div>}
        </div>
    );
}