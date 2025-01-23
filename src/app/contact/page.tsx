import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <Navbar />
      <div className="w-full max-w-2xl rounded-lg bg-slate-900 p-8 shadow-xl">
        <h1 className="mb-8 bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-center text-4xl font-bold text-transparent">Contact</h1>
        
        <div className="mb-8 text-center">
          <p className="mb-2 text-gray-300">N{"'"}hésitez pas à me contacter :</p>
          <a href="mailto:loiclaupro@gmail.com" 
             className="text-lg text-blue-400 hover:text-blue-300">
            loiclaupro@gmail.com
          </a>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded border border-slate-700 bg-slate-800 p-2 text-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded border border-slate-700 bg-slate-800 p-2 text-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Votre message"
              rows={6}
              className="w-full rounded border border-slate-700 bg-slate-800 p-2 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;