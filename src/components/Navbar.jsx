import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src="" alt="Logo" className="h-8 w-8" />
                    <span className="font-semibold text-lg ml-2">Your Logo</span>
                </div>
                <div className="flex">
                    <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Que es una API?</Link>
                    <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cómo usar una API?</Link>
                    <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ejemplos</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
