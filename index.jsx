import {createRoot} from "react-dom/client"
import React from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Navbar/>
        <Main/>

    </>
);
