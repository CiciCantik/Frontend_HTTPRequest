import { useState, useEffect } from "react";

function UseEffect() {
    const [harga, setHarga] = useState(0)
    const [qty, setQty] = useState(0)
    const [subTotal, setSubTotal] = useState(0) 

    useEffect(() => {
        setSubTotal(harga * qty) //merender effect
    }, [harga, qty]);

    return ( 
        <div className="container ml-8">
            <div className="mt-8">
                <h1 className="text-xl font-bold">UseEffect</h1>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Harga :
                </label>
                <input type="text" id="name" className="shadow appearane-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder = "masukkan nama anda"
                        value={harga}
                        onChange={(e) => {setHarga(e.target.value)}}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Qty :
                </label>
                <input type="text" id="name" className="shadow appearane-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder = "masukkan nama anda"
                        value={qty}
                        onChange={(e) => {setQty(e.target.value)}}
                />
            </div>
            <p className="text-red-600 text-sm italic mt-2">Sub Total : {subTotal}</p> 
        </div>
     );
}

export default UseEffect;