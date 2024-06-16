import React, { useState } from "react";

const Eventhandling = () => {
    const [name, setNAme] = useState('')

    const [selectedOption,setselectedOption] = useState('S1 Teknik Informatika');

    const [gender, setGender] = useState('Pria');

    const [chkAkademik, setChkAkademik] = useState(false)
    const [chkNonAkademik, setChkNonAkademik] = useState(false)

    function handleGenderChange(event) {
        setGender(event.target.value);
    }
    function handleOptionChange(event) {
        setselectedOption(event.target.value)
    }
    function handleNameChange(event) {
        setNAme(event.target.value);
    }

    function handleClick() {
        alert('Tombol ini diklik!');
    }

    return ( 
        <div className="container mt-4 ml-4">
            <button
                className="bg-blue-500 hover:bg0blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >
                Klik Saya!
            </button>
            <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nama:
                </label>
                <input
                    type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan data anda"
                    value={name}
                    onChange={handleNameChange}
                />
                <p className="text-gray-600 text-xs italic mt-2">Nama Anda : {name}</p>
                <div className="mt-8">
                    <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                        Program Studi:
                    </label>
                    <select
                        id="program-studi"
                        className="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                        <option value="S1 Sistem Informatika">S1 Sistem Informatika</option>
                        <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                    </select>
                    <p className="text-gray-600 text-xs italic mt-2">Prodi : {selectedOption}</p>
                    <div className="mt-8">
                        <span className="block text-gray-700 font-bold mb-2">Gender</span>
                        <div className="flex flex-row item-center">
                            <label className="inline-flex items-center mr-6">
                                <input
                                    type="radio"
                                    className="from-radio text-indigo-600"
                                    name="gender"
                                    value="Pria"
                                    checked={gender === 'Pria'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Pria</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="from-radio text-indigo-600"
                                    name="gender"
                                    value="wanita"
                                    checked={gender === 'wanita'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Wanita</span>
                            </label>
                        </div>
                        <p className="text-gray-600 text-xs italic mt-2">Gender : {gender}</p>
                        <div className="container mx-8 mt-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-5/12">
                                    <h3 className="text-2x1 font-semibold">From Pendaftaran</h3>
                                    <hr className="my-2"/>
                                    <div className="mb-4">
                                        <label htmlFor="" className="block text-sm font-medium">Prestasi</label><br/>
                                        <input type="checkbox" name="chkAkademik" id="chkAkademik"
                                            className="form-checkbox"
                                            checked={chkAkademik}
                                            onChange={(e) => setChkAkademik(e.target.checked)} />
                                        <label htmlFor="chkAkademik" className="ml-1">Prestasi Akademik</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input type="checkbox" name="chkAkademik" id="chkAkademik"
                                                className="form-checkbox"
                                                checked={chkNonAkademik}
                                                onChange={(e) => setChkNonAkademik(e.target.checked)} />
                                            <label htmlFor="chkAkademik" className="ml-1">Prestasi Non Akademik</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-7/12 mt-6 md:mt-0">
                                <hr className="my-2"/>
                                
                                <h5 className="mb-2">Prestasi Akademik : {chkAkademik ? " Ada" : " -"}</h5>
                                <h5 className="mb-2">Prestasi Non Akademik : {chkNonAkademik ? " Ada" : " -"}</h5>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Eventhandling;

