import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack";

const Page = () => {
  return (
    <div className=" bg-slate-950">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 text-white">
        <h1 className="my-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text p-4 text-center text-4xl font-bold text-transparent md:text-6xl">
          Salut je suis Loïc
        </h1>
        <p className="max-w-2xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
          Développeur passionné par la création d{"'"}applications web modernes et innovantes.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center">
            <p className="flex flex-row items-center justify-center gap-2"><FaGithub /> <a href="https://github.com/Ykolo">Github</a></p>
            <p className="flex flex-row items-center justify-center gap-2"><FaLinkedin /><a href="https://www.linkedin.com/feed/">LinkedIn</a></p>
        </div>
        <div>
          <div className="mt-20 grid grid-cols-2 gap-8">
            <div className="mx-auto">
              <div>
                <p className="text-4xl">Formation:</p>
                <div className="my-10 flex flex-col gap-4">
                  <div>
                    <p className="text-xl font-bold">2020-2023</p>
                    <p className="text-lg font-bold">Baccalauréat Général Spécialité Maths NSI et Physique</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">2023-2025</p>
                    <p className="text-lg font-bold">BTS SIO SLAM</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-4xl">Expérience:</p>
                    <div className="my-10 flex flex-col gap-4">
                      <div>
                        <p className="text-xl font-bold">13/5/2024 - 5/7/2024</p>
                        <p className="text-lg font-bold">Stage dans l{"'"}entrprise Dicoland </p>
                      </div>
                      <div>
                        <p className="text-xl font-bold">2/12/2024 - 24/1/2025</p>
                        <p className="text-lg font-bold">Stage dans l{"'"}entrprise Lambda Labs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-center text-4xl">Voici ma stack technique: </p>
              <Stack />
            </div>
          </div>
        <div className="mx-auto mt-10 w-96 rounded-lg bg-white p-6">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-black">CV</h2>
            <div className="h-96 ">
              <iframe
                src="/documents/CV-Loic.pdf"
                className=" size-full rounded-lg"
              />
            </div>
            <div className="mt-4">
              <a
                href="/documents/CV-Loic.pdf"
                download
                className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Télécharger le PDF
              </a>
            </div>
          </div>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;