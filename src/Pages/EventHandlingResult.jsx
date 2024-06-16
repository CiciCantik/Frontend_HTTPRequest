import React from 'react';

const EventHandlingResult = ({ name, address, selectedOption, gender, academicAchievement, nonAcademicAchievement, inputValue }) => {
    return (
        <div className="container mt-4 ml-4" style={{ width: '1000px' }}>
            <h1 className="text-Black-700 font-bold mb-2">Resume</h1>
            <p className="text-Black-600 text-l  mt-4">Nama: {name}</p>
            <hr/>
            <p className="text-Black-600 text-l  mt-4">Alamat: {address}</p>
            <hr/>
            <p className="text-Black-600 text-l  mt-4">Gender: {gender}</p>
            <hr/>
            <p className="text-Black-600 text-l  mt-4">Program Pilihan: {selectedOption}</p>
            <hr/>
            <p className="text-Black-600 text-l  mt-3">Prestasi Akademik: {academicAchievement ? 'Ya' : '-'}</p>
            <p className="text-Black-600 text-l  mt-3">Prestasi Non Akademik: {nonAcademicAchievement ? 'Ya' : '-'}</p>
            <hr/>
            <p className="text-Black-600 text-l  mt-4">Masukan: {inputValue}</p>
        </div>
    );
};

export default EventHandlingResult;
