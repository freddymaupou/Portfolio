export default function Picto(props : {techs : string[]}){
    return (
        <div className="mt-2 ml-6">
            {props.techs.map((tech, idx) => {
                    return (
                        <span key={idx} className="border rounded-lg border-white p-2 mr-2">{tech}</span>
                    )
                })
            }
        </div>
    )
}