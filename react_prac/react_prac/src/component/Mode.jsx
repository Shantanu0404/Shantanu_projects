import React, { useState, useEffect } from 'react';

const Mode = () => {
    const [mode, setMode] = useState("white");

    // Effect hook to change background color when mode changes
    useEffect(() => {
        document.body.style.backgroundColor = mode;
    }, [mode]);  // Depend on `mode` to update whenever it changes

    const changeMode = () => {
        // Toggle between black and white
        setMode((prevMode) => (prevMode === "black" ? "white" : "black"));
    }

    return (
        <div className="text-center my-5">
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={changeMode}>
                Toggle Dark Mode
            </button>
        </div>
    );
}

export default Mode;
