import React from 'react';
import Navbar from './navbar';
function Container({children}) {
    return (
        <div className="w-full min-h-screen  relative font-sans overflow-hidden">
            <Navbar/>
            {children}
        </div>
    );
}

export default Container;