import { useState } from 'react';
import { Link } from 'react-router-dom';
import CATALYST1 from "../assets/researchcard/Catalysis1.jpg";
import CATALYST2 from "../assets/researchcard/2Catalysis.png";
import CATALYST3 from "../assets/researchcard/3Catalysis.jpg";
import CATALYST4 from "../assets/researchcard/4Catalysis.png";
import CATALYST5 from "../assets/researchcard/5Catalysis.png";
import CATALYST6 from "../assets/researchcard/6Catalysis.png";
import CATALYST7 from "../assets/researchcard/7Catalysis.png";
import CATALYST8 from "../assets/researchcard/8Catalysis.png";

const CatalysisPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Catalyst development for CO2 reduction",
            description: "CO2 utilization is one of the intensely pursued research by scientist across the discipline due to the alarming effect it has on climate change and other socio-economic issues. Our group targets the development of heterogeneous catalysts for converting CO2 to valuable platform molecules.",
            images: [
                {
                    src: CATALYST1,
                    alt: "CO2 Reduction Catalyst 1",
                    description: "Chemical Engineering Journal, 165921 (2025)"
                },
                {
                    src: CATALYST2,
                    alt: "CO2 Reduction Catalyst 2",
                    description: "Chemical Engineering Journal 508, 160705 (2025)"
                },
                {
                    src: CATALYST3,
                    alt: "CO2 Reduction Catalyst 3",
                    description: "The Journal of Physical Chemistry C 127 (27), 13055-13064 (2023)"
                }
            ],
            publications: [
                "The Journal of Physical Chemistry C 128 (44), 18782-18792 (2024)",
                "Molecular Catalysis 511, 111732 (2021)",
                "ACS Sustainable Chemistry & Engineering 8 (39), 14765-14774 (2020)",
                "Applied Materials Today 19, 100586 (2020)"
            ]
        },
        {
            id: 1,
            title: "Catalysis by Gold for CO Oxidation reaction",
            description: "One of the challenges in gold catalysis is to prevent sintering to improve the stability and life time of the catalyst. This can be achieved by encapsulating the metal nanoparticle inside the porous support. Here we have successfully encapsulated Au inside porous silica as well as Ti modified silica which showed improved room temperature activity for CO oxidation reaction.",
            images: [
                {
                    src: CATALYST4,
                    alt: "Gold Catalyst 1.",
                },
                {
                    src: CATALYST5,
                    alt: "Gold Catalyst 2.",
                },
                {
                    src: CATALYST6,
                    alt: "Gold Catalyst 3.",
                },
                {
                    src: CATALYST7,
                    alt: "Gold Catalyst 4",
                    description: "Synthesis and catalytic activity of monodisperse gold–mesoporous silica core–shell nanocatalysts”, Catal. Sci. Technol., 3, 1190 (2013)"
                },
                {
                    src: CATALYST8,
                    alt: "Gold Catalyst 5",
                    description: "Activity enhancement on Titanium incorporation: Au@Ti-SiO2 core shell nanocatalysts for CO oxidation reaction, ChemCatChem., 7 (7), 1222 - 1230 (2015), DOI:10.1002/cctc.201402954."
                }
            ],
            publications: [
                "Catalysis Today., 198, 92 (2012)",
                "The Journal of Physical Chemistry C., 121(9), 4946 - 4957 (2017)",
                "Chemical Communications., 54 (91), 12412 - 12415 (2018)",
                "Applied Catalysis B: Environmental., 272, 118934 (2020)"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>

                        <nav className="hidden md:flex space-x-6">
                            <Link to="/research" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">All Research</Link>
                            <Link to="/publications" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Publications</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="relative overflow-hidden py-16">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
                    style={{ backgroundImage: `url(${CATALYST2})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            Advanced Catalysis Research
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Catalyst Development & Applications
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Pioneering research in sustainable catalytic processes for environmental applications
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-16 z-40 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === index
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    {tabs.map((tab, index) => (
                        <div
                            key={tab.id}
                            className={`transition-opacity duration-300 ${activeTab === index ? 'block opacity-100' : 'hidden opacity-0'}`}
                        >
                            <div className="max-w-3xl mx-auto mb-12 text-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">{tab.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {tab.description}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {tab.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-fit object-cover"
                                            />
                                        </div>
                                        {image.description && (
                                            <div className="p-4">
                                                <p className="text-gray-600">{image.description}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                    Relevant publications from the group:
                                </h3>
                                <ul className="space-y-4 max-w-3xl mx-auto">
                                    {tab.publications.map((publication, pubIndex) => (
                                        <li key={pubIndex} className="flex items-start">
                                            <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                            <span className="text-gray-700">{publication}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CatalysisPage;