import React from 'react';
import './Gallery.css'; // Import file CSS untuk gaya tambahan
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
    const navigate = useNavigate();

    const images = [
        {id:1, src: "https://awsimages.detik.net.id/community/media/visual/2024/04/26/syifa-hadju-9.jpeg?w=600&q=90", alt:"images1"},
        {id:2, src: "https://rm.id/images/berita/med/syifa-hadju-berjuang-sampai-keluar-air-mata_176676.jpg", alt:"images1"},
        {id:1, src: "https://cdn.popmama.com/content-images/community/20230620/community-0a6cb9e53f505da2be870403066a066b.jpg?1687239525", alt:"images1"},
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-heading">Gallery</h1>
            <div className="image-grid">
                {images.map(image => (
                    <div key={image.id} className="image-card">
                        <img src={image.src} alt={image.alt} className="image" />
                        <div className="image-overlay">
                            <h3 className="image-title">{image.alt}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="my-8">
                <Link to="/" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                    Home
                </Link>

                <button
                    type="button"
                    className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => navigate('/')}>
                    Home
                </button>
            </div>
            <div className="my-8">
                <Link to="/landingpage" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                    Landing Page
                </Link>

                <button
                    type="button"
                    className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => navigate('/landingpage')}>
                    Landing Page
                </button>
            </div>
        </div>
    );
};

export default Gallery;
