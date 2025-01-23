import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiVite, SiZod } from "react-icons/si";
import Navbar from "../../components/Navbar";

const Projets = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 text-white">
        <h1 className="my-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text p-4 text-center text-4xl font-bold text-transparent md:text-6xl">
          Projets
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <p>Voici mon tout premier site que j{"'"}ai fait </p>
            <div>Stack utilisée: 
              <div className="flex items-center justify-center">
                <FaHtml5 size={25}/>
                <FaCss3 size={25}/>
              </div>
            </div>
          </div>
          <div className="ml-20">
            <Image src="/premierSite.png" alt="Premier site" width={500} height={500} className="transition-transform hover:scale-110" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-10">
            <Image src={"/racers.png"} alt="Site avec la structure MVC" width={500} height={500} className="transition-transform hover:scale-110" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center">Racers Hub est un site que j{"'"}ai fait avec mon ami Alex qui fan de F1.<br /> On a travaillé sur la partie accessibilité du site.</p>
            <div>Stack utilisée: 
              <div className="flex items-center justify-center">
                <FaHtml5 size={25}/>
                <FaCss3 size={25}/>
                <FaJs size={25}/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <p>Restotop est un site vitrine qui permet de voir la critique des restaurants</p>
            <div>
              Stack utilisée: 
              <div className="flex items-center justify-center">
                <FaHtml5 size={25}/>
                <FaCss3 size={25}/>
                <FaJs size={25}/>
                <FaPhp size={25}/> 
              </div>
            </div>
          </div>
          <div className="ml-20">
            <Image src={"/restotop.png"} alt="Site des critique de restaurants" width={500} height={500} className="transition-transform hover:scale-110" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <p>Voici le site que j{"'"}ai fait avec une formation React</p>
            <div>Stack utilisée: 
              <div className="flex items-center justify-center">
                <SiTypescript  size={25}/>
                <FaReact size={25}/>
                <RiTailwindCssFill size={25}/>
                <SiVite size={25}/>
              </div>
            </div>
          </div>
          <div className="ml-20">
            <Image src={"/flag.png"} alt="Site fait avec React" width={500} height={500} className="transition-transform hover:scale-110" />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-20">
            <Image src={"/nutrispark.png"} alt="Site qui permet de calculer la dose de nutriments par aliments" width={500} height={500} className="transition-transform hover:scale-110" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Nutrispark est un site qui permet de calculer la dose de nutriments par aliments</p>
            <div>Stack utilisée: 
              <div className="flex items-center justify-center">
                <SiTypescript  size={25}/>
                <FaReact size={25}/>
                <SiNextdotjs size={25}/>
                <RiTailwindCssFill size={25}/>
                <SiZod size={25}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projets;