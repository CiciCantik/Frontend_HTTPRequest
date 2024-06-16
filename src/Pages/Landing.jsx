import React from "react";
import LandingPage from "./LandingPage";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <LandingPage>
                <div className="landing-content">
                    <div className="landing-buttons">
                        <Link
                            to="/"
                            className="landing-button font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                        >
                            Home
                        </Link>
                        <button
                            type="button"
                            className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>
                        <Link
                            to="/gallery"
                            className="landing-button font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                        >
                            Gallery
                        </Link>
                        <button
                            type="button"
                            className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => navigate("/gallery")}
                        >
                            Gallery
                        </button>
                    </div>
                </div>
            </LandingPage>
        </div>
    );
}

export default Landing;
