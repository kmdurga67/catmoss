import { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../constants/constant";
import LOGO from "../assets/logo.png"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src={LOGO} alt="Lab Logo" className="h-12 mr-3" />
                        <span className="text-xl font-bold text-gray-800">Cat&MoSS</span>
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {NavItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    {item.submenu ? (
                                        <>
                                            <button className="flex items-center text-gray-700 hover:text-blue-600 py-2 px-1">
                                                {item.label}
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[200px] z-10">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.link}
                                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.link}
                                            className="text-gray-700 hover:text-blue-600 py-2 px-1 block"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        <ul className="space-y-2">
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                    {item.submenu ? (
                                        <>
                                            <button className="flex items-center justify-between w-full py-2 px-1 text-gray-700">
                                                {item.label}
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                            <ul className="pl-4">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.link}
                                                            className="block py-2 px-1 text-gray-600 hover:text-blue-600"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.link}
                                            className="block py-2 px-1 text-gray-700 hover:text-blue-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;