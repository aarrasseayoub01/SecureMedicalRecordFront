import { IoSend } from "react-icons/io5";
import { useForm } from "../../hooks/useForm";
import { FaFileMedicalAlt } from "react-icons/fa";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import Table from "../../components/Table";

const Home = () => {
  const { handleChange, handleSubmit, status } = useForm();
  const { handleCinChange, handleCinSubmit, searchStatus, searchResults } =
    useSearch();
  const [page, setPage] = useState("create");
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden bg-[url('/images/img.jpeg')] bg-cover bg-center opacity-90" />
      <main className="relative z-20 mt-16  md:px-6">
        {page === "create" && (
          <div className="max-w-4xl relative justify-between lg:mx-auto flex bg-white shadow-small rounded-2xl my-6 lg:my-12 px-4 mx-2 lg:px-16">
            {status === "loading" && (
              <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center transition rounded-xl z-40">
                <div className="h-12 w-12 border-4 border-t-octonary border-r-octonary border-l-octonary rounded-full animate-spin transition opacity-100" />
              </div>
            )}
            <div className="w-full flex flex-col justify-center my-8 lg:mt-10 lg:mb-10">
              <div className="text-xl lg:text-3xl font-extrabold flex text-tertiary font-gloock tracking-widest text-left">
                Dossier Medical
              </div>
              <p className="text-start mt-8 lg:mt-6 text-xl text-gray-600">
                Remplissez vos informations
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center mt-3 lg:mt-4">
                  <div className="flex items-center w-full">
                    <div className="mt-1 w-full border-b border-gray-300 focus-within:border-tertiary">
                      <label className="text-sm ml-1 font-semibold text-gray-500">
                        Nom
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        maxLength="40"
                        required
                        className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-tertiary focus:ring-0 sm:text-sm"
                        placeholder="Nom et prénom"
                      />
                    </div>
                    <div className="mt-1 ml-4 w-1/3 lg:mr-2 border-b border-gray-300 focus-within:border-tertiary">
                      <label className="text-sm ml-1 font-semibold text-gray-500">
                        Carte nationale d'identité
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="cin"
                        id="cin"
                        maxLength="40"
                        required
                        className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-tertiary focus:ring-0 sm:text-sm"
                        placeholder="CIN"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row w-full items-center my-2">
                    <div className="mt-2 lg:mt-0 w-full border-b border-gray-300 focus-within:border-tertiary">
                      <label className="text-sm ml-1 font-semibold text-gray-500">
                        Vos informations
                      </label>
                      <textarea
                        onChange={handleChange}
                        type="text"
                        name="medicalRecord"
                        id="medicalRecord"
                        maxLength="50"
                        minLength="1"
                        className="w-full border-0 border-b border-transparent min-h-[10rem] bg-gray-50 focus:border-tertiary focus:ring-0 sm:text-sm"
                        placeholder="Dossier medical"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 w-full">
                    <button
                      className="max-w-[10rem] mt-2 w-full flex justify-center py-3 text-sm md:text-base font-medium rounded-md text-[#21565a] bg-[#b3e5ec] md:hover:text-white md:hover:bg-[#59b7c3] md:px-6 active:scale-95 transition"
                      type="submit"
                    >
                      <IoSend className="mr-6 mt-[0.12rem] w-5 h-5" />
                      <span>Ajouter</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("search");
                      }}
                      className="mt-2 w-full flex justify-center py-3 text-sm md:text-base font-medium rounded-md text-[#21565a] bg-[#b3e5ec] md:hover:text-white md:hover:bg-[#59b7c3] md:px-6 active:scale-95 transition"
                    >
                      <FaFileMedicalAlt className="mr-4 mt-[0.12rem] w-5 h-5" />
                      <span>Accéder à votre dossier</span>
                    </button>
                  </div>
                  {status === "error" && (
                    <div className="text-red-500 bg-red-50 rounded-lg border-red-500 border-2 py-2 mb-2 mt-4 w-full text-center">
                      Informations invalides
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
        {page === "search" && (
          <div className="max-w-4xl relative justify-between lg:mx-auto flex bg-white shadow-small rounded-2xl my-6 lg:my-12 px-4 mx-2 lg:px-16">
            {status === "loading" && (
              <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center transition rounded-xl z-40">
                <div className="h-12 w-12 border-4 border-t-octonary border-r-octonary border-l-octonary rounded-full animate-spin transition opacity-100" />
              </div>
            )}
            <div className="w-full flex flex-col my-8 lg:mt-10 lg:mb-10">
              <div className="text-xl lg:text-3xl font-extrabold flex text-tertiary font-gloock tracking-widest text-left">
                Rechercher votre dossier Medical
              </div>

              <p className="text-start mt-8 lg:mt-6 text-xl text-gray-600">
                Recherche par carte nationale d'identité:
              </p>
              <form onSubmit={handleCinSubmit}>
                <div className="flex flex-col items-center mt-3 lg:mt-4">
                  <div className="flex items-center w-full">
                    <div className="mt-1 w-full border-b border-gray-300 focus-within:border-tertiary">
                      <label className="text-sm ml-1 font-semibold text-gray-500">
                        CIN
                      </label>
                      <input
                        onChange={handleCinChange}
                        type="text"
                        name="cin"
                        id="cin"
                        maxLength="40"
                        required
                        className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-tertiary focus:ring-0 sm:text-sm"
                        placeholder="carte nationale d'identité"
                      />
                    </div>
                  </div>
                  <div className="h-64 scroll-auto overflow-hidden w-full">
                    <Table results={searchResults} />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      className="max-w-[10rem] mt-2 w-full flex justify-center py-3 text-sm md:text-base font-medium rounded-md text-[#21565a] bg-[#b3e5ec] md:hover:text-white md:hover:bg-[#59b7c3] md:px-6 active:scale-95 transition"
                      type="submit"
                    >
                      <IoSend className="mr-6 mt-[0.12rem] w-5 h-5" />
                      <span>Chercher</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("create");
                      }}
                      className="mt-2 w-full flex justify-center py-3 text-sm md:text-base font-medium rounded-md text-[#21565a] bg-[#b3e5ec] md:hover:text-white md:hover:bg-[#59b7c3] md:px-6 active:scale-95 transition"
                    >
                      <FaFileMedicalAlt className="mr-6 mt-[0.12rem] w-5 h-5" />
                      <span>Retourner</span>
                    </button>
                  </div>
                  {searchStatus === "error" && (
                    <div className="text-red-500 bg-red-50 rounded-lg border-red-500 border-2 py-2 mb-2 mt-4 w-full text-center">
                      Aucun dossier ne corresponds à votre CIN
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
