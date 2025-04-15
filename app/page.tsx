import Header from "./components/header/page";
import Image from "next/image";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <div>
      <Header/>
    </div>

    {/* Presentation */}
    <div className="flex flex-col justify-center items-center border-b border-white pt-15 pb-20">
      <Image src={"/photo_rond.png"} alt={"Photo de Freddy Maupou"} width={250} height={100}/>
      <h1 className="m-5 text-2xl">Freddy Maupou - <span className="italic">Développeur Full Stack</span></h1>
      <p className="w-1/2 text-justify text-last-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus culpa, esse eius maiores laborum eos tempora recusandae minima illo dolorem numquam voluptatibus dignissimos libero adipisci commodi vitae illum similique fugit.</p>
    </div>

    {/* Projects */}
    <div className="border-b border-white pt-15 pb-20">
      <h1 className="text-4xl text-center mt-16">Projets</h1>
      <Projects/>
    </div>

    {/* Contact */}
    <div className="border-b border-white pt-15 pb-20">
      <h1 className="m-5 text-4xl text-center mt-16">Contact</h1>
      <Contact/>
    </div>


    {/* Footer */}
    </>
  );
}
