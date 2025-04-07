'use client'
//import { useState } from "react";
import Header from "./components/header/page";


export default function Home() {
  // const [data, setData] = useState("");

  // const fetchData = async () => {
  //   try{
  //     const res = await fetch("https://randomuser.me/api");
  
  //     if(!res.ok){
  //       throw new Error("Response status: " + res.status)
  //     }
  
  //     const json = await res.json()
  //     console.log(JSON.stringify(json.results[0]))

  //     setData(JSON.stringify(json.results[0], null, 2))
  //   } 
  //   catch(err){
  //     console.error(err.message)
  //   }
  // }

  // function displayData(){
  //   if(data === ""){
  //     return
  //   }

  //   return data
  // }

  return (
    <>
    <div>
      <Header/>
    </div>
    {/* <div>
      <button className="h-50 w-50" onClick={() => fetchData()}>Click Me</button>
      <div>
        <pre>
        {displayData()}
        </pre>
      </div>
    </div> */}
    </>
  );
}
