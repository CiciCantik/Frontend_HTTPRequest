import React, { useState } from 'react';

function P() {
  // Variabel state untuk menyimpan hasil penjumlahan state
  const [bilanganState, setBilanganState] = useState(0);
  // Variabel state untuk menyimpan hasil penjumlahan non-state
  const [bilanganNonState, setBilanganNonState] = useState(0);

  // Variabel state untuk menyimpan hasil gabungan penjumlahan state dan non-state
  const [hasilPenjumlahanState, setHasilPenjumlahanState] = useState(0);
  // Variabel non-state untuk menyimpan hasil gabungan penjumlahan state dan non-state
  let hasilPenjumlahanNonState = 0;

  // Fungsi untuk menangani event klik tombol Tambah (state)
  const tambahState = () => {
    setBilanganState(bilanganState + 1);
  };

  // Fungsi untuk menangani event klik tombol Jumlah (non-state)
  const tambahNonState = () => {
    setBilanganNonState(bilanganNonState + 1);
    // Menghitung hasil gabungan penjumlahan
    setHasilPenjumlahanState(bilanganState + bilanganNonState + 1);
    hasilPenjumlahanNonState = bilanganState + bilanganNonState + 1;

    console.log('State:', bilanganState, 'Non-State:', bilanganNonState + 1);
    console.log('Hasil Penjumlahan State:', bilanganState + bilanganNonState + 1);
    console.log('Hasil Penjumlahan Non-State:', hasilPenjumlahanNonState);
  };

  return (
    <>
      <p>Bilangan State: {bilanganState}</p> {/* Menampilkan state */}
      <p>Bilangan Non-State: {bilanganNonState}</p> {/* Menampilkan non-state */}
      <button
        type="button"
        className="landing-button mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={tambahState}
      >
        Tambah State
      </button>
      <button
        type="button"
        className="landing-button mx-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        onClick={tambahNonState}
      >
        Tambah Non-State
      </button>
    </>
  );
}

export default P;