import { Link } from 'react-router-dom';
import NANOMATERIAL1 from "../assets/researchcard/1Surface.png";
import NANOMATERIAL2 from "../assets/researchcard/2Surface.jpg";
import NANOMATERIAL3 from "../assets/researchcard/3Surface.png";
import NANOMATERIAL4 from "../assets/researchcard/4Surface.png";
import NANOMATERIAL5 from "../assets/researchcard/5Surface.png";
import NANOMATERIAL6 from "../assets/researchcard/6Surface.png";
import NANOMATERIAL7 from "../assets/researchcard/7Surface.png";
import NANOMATERIAL8 from "../assets/researchcard/8Surface.png";

const NanomaterialsPage = () => {
  const nanomaterialsData = {
    title: "Catalysis by Gold",
    description: "Since the discovery of catalysis by gold in late 1980's there is a lot of interest in understanding the active site responsible for activating molecules on the Au nanoparticle surface. We have unambiguously proved by our studies on structured Au nanoparticles that it is the undercoordinated atoms like step and kink atoms that does the trick. Even though gold shows strong size dependence (3-5 nm) in catalysis, we showed that if under coordinated atoms are present then size of the nanoparticle is not very crucial.",
    sections: [
      {
        title: "Trisoctahedral (TOH) Au nanoparticle with {310} sites catalyze CO oxidation",
        description: "Oxidation catalysis by large trisoctahedral gold nanoparticles: Mind the step!, Catalysis Today., 244, 177 - 183 (2015), DOI:10.1016/j.cattod.2014.02.049",
        images: [
          {
            src: NANOMATERIAL1,
            alt: "Trisoctahedral Au nanoparticle",
            description: "Trisoctahedral (TOH) Au nanoparticle with {310} sites"
          }
        ]
      },
      {
        title: "Structure sensitivity of reactions on Pd and Ru nanostructures",
        description: "Many surface science studies in the past has shown the dependence of specific exposed planes and facets for reactivity. Our group explores this by creating model nanoparticle surfaces and validating this with specific catalytic reactions.",
        subsections: [
          {
            title: "Pd concave nanocube",
            description: "Structure Sensitive Chemical Reactivity by Palladium Concave Nanocubes and Nanoflowers Synthesised by Seed Mediated Procedure in Aqueous Medium. Nanoscale., 6, 7496 - 7502 (2014), DOI:10.1039/c4nr01283f.",
            images: [
              {
                src: NANOMATERIAL2,
                alt: "Pd concave nanocube 1",
                description: "Pd concave nanocube"
              },
              {
                src: NANOMATERIAL3,
                alt: "Pd concave nanocube 2",
                description: "Pd concave nanocube structure"
              }
            ]
          },
          {
            title: "Ru nanochains",
            description: "Surfactant assisted formation of Ruthenium nanochains under mild conditions and their catalytic CO oxidation activity, Chemical Communications., 51, 10178 - 10181 (2015), DOI:10.1039/C4CC09430A",
            images: [
              {
                src: NANOMATERIAL4,
                alt: "Ru nanochains 1",
                description: "Ru nanochains"
              },
              {
                src: NANOMATERIAL5,
                alt: "Ru nanochains 2",
                description: "Ru nanochains structure"
              }
            ]
          }
        ]
      },
      {
        title: "Understanding product selectivity trends in phenol hydrogenation over palladium nanostructures",
        description: "Govind Porwal, Shelaka Gupta, S. Sreedhala, Joes Elizabeth, Tuhin Suvra Khan, M. Ali Haider, and C. P. Vinod, ACS Sustainable Chem. Eng. 2019, 7, 20, 17126–17136",
        images: [
          {
            src: NANOMATERIAL6,
            alt: "Phenol hydrogenation 1",
            description: "Palladium nanostructures for phenol hydrogenation"
          },
          {
            src: NANOMATERIAL7,
            alt: "Phenol hydrogenation 2",
            description: "Product selectivity in phenol hydrogenation"
          }
        ]
      },
      {
        title: "Palladium nanostructures catalyzed acetalization of furfural",
        description: "Govind Porwal, Pallavi Dandekar, Twinkle Gorai, Tuhin Suvra Khan, M Ali Haider, Shelaka Gupta and CP Vinod, Chem. Eng. Journal. 2025,514, 163159",
        images: [
          {
            src: NANOMATERIAL8,
            alt: "Palladium nanostructures for furfural acetalization",
            description: "Palladium nanostructures catalyzed acetalization"
          }
        ]
      }
    ],
    publications: [
      "ACS Engineering Au., 3, 6, 477 - 487 (2023)",
      "Nanoparticles and Clusters Advances in Synthesis, Properties and Applications, Springer (2017) 165 - 199 (2018)",
      "Applied Catalysis A: General., 524, 1 - 7 (2016)",
      "Journal of Catalysis., 337, 138 - 144 (2016)",
      "Applied Materials Today 19, 100586 (2020)",
      "The Journal of Physical Chemistry C 127 (27), 13055-13064 (2023)",
      "Nano-Structures & Nano-Objects 23, 100504 (2020)",
      "The Journal of Physical Chemistry C 128 (44), 18782-18792 (2024)"
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
          style={{ backgroundImage: `url(${NANOMATERIAL1})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Advanced Nanomaterials Research
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Nanomaterials for Catalysis
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Designing and synthesizing structured nanoparticles for enhanced catalytic performance
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{nanomaterialsData.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {nanomaterialsData.description}
            </p>
          </div>
          {nanomaterialsData.sections.map((section, index) => (
            <div key={index} className="mb-16">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              {section.images && (
                <div className={`grid grid-cols-1 ${section.images.length > 1 ? 'md:grid-cols-2' : ''} gap-8 mb-8`}>
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                      <div className="h-96 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-cover object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm md:text-base">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.subsections && section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{subsection.title}</h4>
                  <p className="text-gray-600 mb-4">{subsection.description}</p>

                  {subsection.images && (
                    <div className={`grid grid-cols-1 ${subsection.images.length > 1 ? 'md:grid-cols-2' : ''} gap-8 mb-8`}>
                      {subsection.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                          <div className="h-96 overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-fit object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="text-gray-600 text-sm md:text-base">{image.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Relevant publications from the group:
            </h3>
            <ul className="space-y-4 max-w-3xl mx-auto">
              {nanomaterialsData.publications.map((publication, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-700">{publication}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Research Impact</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Active Site Elucidation</h4>
                  <p className="text-blue-700">
                    Our work has unambiguously identified undercoordinated atoms (step and kink atoms) as the active sites responsible for catalytic activity on gold nanoparticle surfaces.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Size Dependence Understanding</h4>
                  <p className="text-green-700">
                    We've demonstrated that while gold shows strong size dependence in catalysis, the presence of undercoordinated atoms can make nanoparticle size less crucial for activity.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-2">Structure-Property Relationships</h4>
                  <p className="text-purple-700">
                    Our research establishes clear relationships between nanoparticle structure and catalytic properties, enabling rational design of more effective catalysts.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Methodology</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Controlled Synthesis</h4>
                    <p className="text-gray-600">Precise synthesis of structured nanoparticles with specific facets and coordination environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Advanced Characterization</h4>
                    <p className="text-gray-600">Comprehensive characterization using electron microscopy, X-ray techniques, and surface analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Catalytic Testing</h4>
                    <p className="text-gray-600">Evaluation of catalytic performance under relevant reaction conditions to establish structure-activity relationships</p>
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

export default NanomaterialsPage;