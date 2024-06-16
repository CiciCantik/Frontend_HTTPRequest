import React, { useState, useEffect } from "react";
import UseEffect from "./UseEffect";
import Animasi from "./Animasi";
import FetchApi from "./FetchApi";

function CombinedPage() {
    return (
        <div>
            <UseEffect />
            <hr/>
            <Animasi />
            <hr />
            <FetchApi />
        </div>
    );
}

export default CombinedPage;
