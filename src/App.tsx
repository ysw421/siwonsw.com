import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="App">
            <div className="left-0 top-0 w-full fixed z-100">
                <Navbar />
            </div>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    main area
                </div>
            </main>
        </div>
    );
}

export default App;
