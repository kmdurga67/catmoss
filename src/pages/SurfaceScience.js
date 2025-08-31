import { Link } from 'react-router-dom';
import SURFACESCIENCE1 from "../assets/researchcard/SurfaceScience1.jpg";
import SURFACESCIENCE2 from "../assets/researchcard/SurfaceScience2.jpg";
import SURFACESCIENCE3 from "../assets/researchcard/SurfaceScience3.png";

const SurfaceSciencePage = () => {
  const surfaceScienceData = {
    title: "Surface Science at close to Atmospheric Pressure: NAPXPS",
    description: "X-ray Photoelectron Spectroscopy is one of the most utilized technique in identifying chemical state of the solid surfaces. Due to the inherent limitations of the electron mean free path, the technique is usually carried out at ultra high vacuum conditions (UHV) which is not normally the conditions under which many of the chemical processes occur. At NCL, we employ NAPXPS to look at gas-solid interactions at close to atmospheric pressures.",
    images: [
      {
        src: SURFACESCIENCE1,
        alt: "NAPXPS@ NCL",
        description: "NAPXPS@ NCL"
      },
      {
        src: SURFACESCIENCE2,
        alt: "The Journal of Physical Chemistry C 117 (9), 4717-4726 (2013)",
        description: "The Journal of Physical Chemistry C 117 (9), 4717-4726 (2013)"
      },
      {
        src: SURFACESCIENCE3,
        alt: "Catalysis Science & Technology 7 (19), 4489-4498 (2017)",
        description: "Catalysis Science & Technology 7 (19), 4489-4498 (2017)"
      }
    ]
  };

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
          style={{ backgroundImage: `url(${SURFACESCIENCE1})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Advanced Surface Characterization
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Surface Science at Close to Atmospheric Pressure
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Bridging the pressure gap in catalytic surface characterization with NAPXPS technology
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">NAPXPS Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {surfaceScienceData.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {surfaceScienceData.images.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm md:text-base">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Details</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Instrumentation</h4>
                  <p className="text-blue-700">
                    Our NAPXPS system allows for surface analysis at pressures up to 25 mbar, bridging the gap between UHV and realistic reaction conditions.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Applications</h4>
                  <p className="text-green-700">
                    Study of catalytic reactions in situ, surface oxidation/reduction processes, and adsorption/desorption phenomena under realistic conditions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Research Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Bridging the Pressure Gap</h4>
                    <p className="text-gray-600">Enables study of catalytic surfaces under industrially relevant conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mechanistic Insights</h4>
                    <p className="text-gray-600">Provides fundamental understanding of surface processes during catalytic reactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Catalyst Design</h4>
                    <p className="text-gray-600">Informs the rational design of improved catalysts through surface characterization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurfaceSciencePage;