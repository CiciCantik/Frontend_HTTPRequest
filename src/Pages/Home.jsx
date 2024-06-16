// Home.jsx
import React from 'react';
import Layout from "../componen/Layout";
import Navbar from "../componen/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <Layout>
                <Navbar />
                <div className="my-8">
                    <Link to="/landingpage" 
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Landing Page
                    </Link>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/landingpage')}>
                            LandingPage
                    </button>

                    {/* Tautan ke galeri */}
                    <Link to="/gallery" 
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Gallery
                    </Link>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/gallery')}>
                            Gallery
                    </button>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/state')}>
                            State
                    </button>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/event')}>
                            EventHandling
                    </button>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/effect')}>
                            UseEffect
                    </button>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/combine')}>
                            Combined
                    </button>

                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/context')}>
                            Context
                    </button>
                    <button type="button"
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => navigate('/GetMhs')}>
                            GetMahasiswa
                    </button>
                </div>
            </Layout>
        </>
     );
}

export default Home;
