import Navbar from "../../components/Navbar";

const Veille = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <h1 className=" bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text p-4 text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Veille Technologique:
        </h1>
        <h2 className="mb-12 bg-gradient-to-r from-blue-500 to-cyan-200 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent "> TailwindCSS l{"'"}avenir du développement web</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <a 
            href="https://tailwindcss.com/blog/tailwindcss-v4-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Tailwind CSS v4 Beta
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="text-slate-400">
              Découvrez les nouvelles fonctionnalités de Tailwind CSS v4, incluant des améliorations de performances et de nouvelles capacités de style.
            </p>
          </a>

          <a 
            href="https://kinsta.com/fr/blog/tailwind-css/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Guide Complet Tailwind CSS 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="text-slate-400">
              Un guide détaillé sur tout ce que vous devez savoir sur Tailwind CSS, ses nouveautés et ses améliorations.
            </p>
          </a>
          <a href="https://2023.stateofcss.com/en-US/css-frameworks/" target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800">
            <h2 className="mb-3 text-2xl font-semibold text-white">State of CSS 2023 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
              <p className="text-slate-400">
                Découvrez l{"'"}état de la communauté CSS en 2023 et les frameworks CSS les plus populaires.
              </p>
          </a>
          <a href="https://niji.tech/the-modern-css-experience-with-tailwind-css" target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              L{"'"}expérience CSS moder avec Tailwind
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="text-slate-400">
              Découvrez l{"'"}avis d{"'"}une équipe de développeurs qui ont travaillé avec Tailwind CSS pendant plus de 10 ans.
            </p>
          </a>
          <a href="https://codelynx.dev/posts/pourquoi-tailwindcss-a-gagner" target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800">
            <h2 className="mb-3 text-2xl font-semibold text-white">Pourquoi TailwindCSS devient la norme
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="text-slate-400">
              Découvrez pourquoi TailwindCSS est devenu la norme pour de nombreux développeurs et pourquoi vous devriez l{"'"}utiliser.
            </p>
          </a>
          <a href="https://code-garage.fr/blog/le-plus-gros-probleme-de-tailwind-css/" target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:bg-slate-800">
            <h2 className="mb-3 text-2xl font-semibold text-white">Le plus gros problème de Tailwind CSS
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="text-slate-400">
              Découvrez le plus gros problème de Tailwind CSS et comment vous pouvez le résoudre.
            </p>
          </a>
        </div>
        
        
      </div>
    </div>
  );
};

export default Veille;