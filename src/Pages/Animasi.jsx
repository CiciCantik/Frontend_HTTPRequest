import React, {useEffect, useState} from "react";

export default function Animasi() {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second => second + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-blue-700 ml-8 mt-8">
            Detik : {second}
        </div>
    )
}
