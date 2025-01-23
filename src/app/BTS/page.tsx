import Navbar from "../../components/Navbar";

const BTS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm md:p-12">
          <h1 className="mb-8 bg-gradient-to-r from-slate-800 to-slate-500  bg-clip-text text-center text-6xl font-bold text-transparent md:text-8xl">BTS SIO</h1>
          <p className="mb-12 text-center text-lg leading-relaxed text-slate-700">
            Le BTS services informatiques aux organisations apprend à exploiter des données, dispense les bases de la programmation et du développement d’applications, et apporte des enseignements sur le fonctionnement d’une entreprise.
            Le BTS SIO apporte des compétences dans le support et la mise à disposition de services informatiques, ainsi qu’en cybersécurité. À la fin du premier semestre, il propose deux options (SISR et SLAM) qui délivrent chacune une compétence supplémentaire : l’administration des systèmes et des réseaux (SISR) ou la conception et le développement d{"'"}applications (SLAM).
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-6 shadow-md transition-transform hover:scale-105">
              <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">SLAM</h2>
              <h3 className="mb-4 text-xl font-semibold text-slate-600">Solutions Logicielles et Applications Métiers</h3>
              <p className="text-slate-700">
                L’option SISR du BTS SIO forme des professionnels capables de concevoir, déployer et maintenir des infrastructures réseau et des systèmes informatiques. Elle prépare les étudiants à assurer l’installation, la configuration, la gestion et la sécurisation des réseaux d’une organisation. Les compétences acquises incluent l’administration de serveurs, la virtualisation, la sécurité des systèmes d’information, et l’assistance technique.

                Réferentiel : Conception d’une solution d’infrastructure Installation • Test et déploiement d’une solution d’infrastructure réseau • Exploitation, dépannage et supervision d’une solution d’infrastructure réseau
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-6 shadow-md transition-transform hover:scale-105">
              <h2 className="mb-2 text-3xl font-bold text-slate-800 md:text-4xl">SISR</h2>
              <h3 className="mb-4 text-xl font-semibold text-slate-600">Solutions d infrastructure, systèmes et réseaux</h3>
              <p className="text-slate-700">
                L’option SLAM du BTS SIO forme des spécialistes du développement logiciel et des applications métiers. Les étudiants apprennent à analyser les besoins d’une organisation, rédiger des spécifications techniques, développer des solutions logicielles adaptées, et les intégrer dans l’environnement professionnel. Cette formation couvre également la maintenance et l’évolution des applications existantes.

                Réferentiel : Conception et développement d’une solution applicative • Maintenance corrective ou évolutive d’une solution applicative • Gestion des données
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTS;