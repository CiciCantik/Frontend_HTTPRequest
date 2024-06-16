import { useState } from "react";

function State() {
    const [bilangan1, setBilangan1] = useState(0); // Deklarasi state bilangan1
    const [bilangan2, setBilangan2] = useState(0); // Deklarasi state bilangan2
    const [Hasil, setHasil] = useState(0); // Deklarasi state Hasil

    const penambahan = () => {
        setHasil(bilangan1 + bilangan2);
    };

    const pengurangan = () => {
        setHasil(bilangan1 - bilangan2);
    };

    const perkalian = () => {
        setHasil(bilangan1 * bilangan2);
    };

    return (
        <>
            <div>
                <label>Bilangan 1: </label>
                <input
                    type="text"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(Number(e.target.value))}/>
            </div>
            <div>
                <label>Bilangan 2: </label>
                <input
                    type="text"
                    value={bilangan2}
                    onChange={(e) => setBilangan2(Number(e.target.value))}/>
            </div>
            <div>
                <p>Hasil: {Hasil}</p> {/* Menampilkan hasil operasi */}
            </div>
            <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={penambahan}>
                Penambahan
            </button>
            <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={pengurangan}>
                Pengurangan
            </button>
            <button
                type="button"
                className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={perkalian}>
                Perkalian
            </button>
        </>
    );
}

export default State;
