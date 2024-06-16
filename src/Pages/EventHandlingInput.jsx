import React from 'react';

const EventHandlingInput = ({
    name, address, selectedOption, gender, academicAchievement, nonAcademicAchievement, inputValue,
    handleNameChange, handleAddressChange, handleOptionChange, handleGenderChange, handleAchievementChange, handleInputChange, handleClick
}) => {
    return (
        <div className="container mt-4 ml-4" style={{ width: '1000px' }}>
            <h1 className="text-gray-700 font-bold mb-2">Form Pendaftaran</h1>
            <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nama :
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan Nama Anda"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <div className="mt-4">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                    Alamat :
                </label>
                <input
                    type="text"
                    id="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan Alamat Anda"
                    value={address}
                    onChange={handleAddressChange}
                />
            </div>

            <div className="mt-8">
                <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                    Program Studi :
                </label>
                <select
                    id="program-studi"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                    <option value="S1 Sistem Informatika">S1 Sistem Informatika</option>
                    <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                </select>
            </div>

            <div className="mt-8">
                <span className="block text-gray-700 font-bold mb-2">Gender : </span>
                <div className="flex flex-row items-center">
                    <label className="inline-flex items-center mr-6">
                        <input
                            type="radio"
                            className="form-radio text-indigo-600"
                            name="gender"
                            value="Pria"
                            checked={gender === 'Pria'}
                            onChange={handleGenderChange}
                        />
                        <span className="ml-2">Pria</span>
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input
                            type="radio"
                            className="form-radio text-indigo-600"
                            name="gender"
                            value="Wanita"
                            checked={gender === 'Wanita'}
                            onChange={handleGenderChange}
                        />
                        <span className="ml-2">Wanita</span>
                    </label>
                </div>
            </div>

            <div className="mt-8">
                <label className="block text-gray-700 font-bold mb-2">Prestasi :</label>
                <label className="inline-flex items-center mr-6">
                    <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        value="Prestasi Akademik"
                        checked={academicAchievement}
                        onChange={handleAchievementChange}
                        name="academicAchievement"
                    />
                    <span className="ml-2">Prestasi Akademik</span>
                </label>
                <label className="inline-flex items-center mr-6">
                    <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600"
                        value="Prestasi Non Akademik"
                        checked={nonAcademicAchievement}
                        onChange={handleAchievementChange}
                        name="nonAcademicAchievement"
                    />
                    <span className="ml-2">Prestasi Non Akademik</span>
                </label>
            </div>

            <div className="mt-8">
                <label htmlFor="inputValue" className="block text-gray-700 font-bold mb-2">
                    Masukan :
                </label>
                <textarea
                    id="inputValue"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan Masukan Anda"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default EventHandlingInput;
