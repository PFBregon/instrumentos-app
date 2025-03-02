import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20 && currentScrollY > lastScrollY) {
                setIsSticky(true);
            } else if (currentScrollY < lastScrollY) {
                setIsSticky(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${isSticky ? "fixed top-0" : 
        "absolute top-0"} left-0 right-0 z-50 w-full text-white 
        flex items-center justify-between
        p-6 transition-all duration-300 ease-in-out`}>
            <p className="font-advent-pro">LOGO3DCELIA</p>
            <nav>
                <span className="font-advent-pro uppercase text-lg hover-underline"> 
                    <Link to="/grabaciones">Grabaciones</Link>
                </span>
            </nav>
        </header>
    );
};

export default Header;
