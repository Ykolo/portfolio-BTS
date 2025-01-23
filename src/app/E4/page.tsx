import Navbar from "../../components/Navbar";

const E4 = () => {  
  return (
    <div className="bg-slate-950">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">E4</h1>
        <div className="rounded-lg bg-white p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">Rapport de stage première année</h2>
              <div className="h-[800px] w-full">
                <iframe
                  src="/documents/Rapport-de-stage.pdf#toolbar=0&navpanes=0&view=FitH"
                  className="size-full rounded-lg"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="/documents/Rapport-de-stage.pdf"
                  download
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                  Télécharger le PDF
                </a>
                <a
                  href="/documents/Rapport-de-stage.pdf"
                  target="_blank"
                  className="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                >
                  Ouvrir en plein écran
                </a>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black">Rapport de stage seconde année</h2>
              <div className="h-[800px] w-full">
                <iframe 
                  src="/documents/Rapport-stage2.pdf#toolbar=0&navpanes=0&view=FitH" 
                  className="size-full rounded-lg"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="/documents/Rapport-stage2.pdf"
                  download
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                  Télécharger le PDF
                </a>
                <a
                  href="/documents/Rapport-stage2.pdf"
                  target="_blank"
                  className="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                >
                  Ouvrir en plein écran
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-semibold text-black">Tableau de synthèse</h2>
            <div className="h-[400px] w-2/3">
              <iframe 
                src="/documents/TableauSyntheseE4.pdf#toolbar=0&navpanes=0&view=FitH" 
                className="size-full rounded-lg"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="/documents/TableauSyntheseE4.pdf"
                download
                className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Télécharger le PDF
              </a>
              <a
                href="/documents/TableauSyntheseE4.pdf"
                target="_blank"
                className="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
              >
                Ouvrir en plein écran
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E4;