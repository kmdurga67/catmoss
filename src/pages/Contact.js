import React from 'react';
import { 
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdWork,
  MdSchool,
  MdScience,
  MdSend
} from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import CPVINOD from "../assets/team/cpvinod.jpeg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "cp.vinod.ncl@csir.res.in",
      href: "mailto:cp.vinod.ncl@csir.res.in"
    },
    // {
    //   icon: MdEmail,
    //   label:"Alternate email",
    //   value:"cpvinod@gmail.com",
    //   href: "mailto:cpvinod@gmail.com"
    // },
    {
      icon: MdPhone,
      label: "Phone",
      value: "+91 20 2590 2086",
      href: "tel:+912025902086"
    },
    {
      icon: MdLocationOn,
      label: "Address",
      value: `Catalysis & Inorganic Chemistry Division \nNational Chemical Laboratory\nDr. Homi Bhabha Road\nPune 411008, India`
    },
    {
      icon: MdWork,
      label: "Office",
      value: "Room No.135C, Main building"
    }
  ];

  const openPositions = [
    {
      title: "PhD Candidates",
      description: "Seeking motivated PhD students in heterogeneous catalysis, nanomaterials & surface science",
      requirements: [
        "MSc in Chemistry/ Chemical Engineering/ Materials Science with minimum 55% or 7.5 CGPA",
        "CSIR-NET/ UGC-NET/ DST-INSPIRE ",
        "Strong background in physical chemistry/ inorganic chemistry with an interest to learn & work with instruments"
      ]
    },
    {
      title: "Project Assistants/ Associates",
      description: "Opportunities for project assistants to work in the area of sustainable catalysis",
      requirements: [
        "Postgraduate in relevant discipline",
        "Please visit NCL job page for current vacancies"
      ],
      visitLink:"https://jobs.ncl.res.in/"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
            Contact Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For research collaborations, academic inquiries, or potential partnerships
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center mb-8">
                <div className="mb-4 sm:mb-0 sm:mr-6">
                  <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <img src={CPVINOD} alt='cpvinod' />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-gray-800">Dr. C. P. Vinod FRSC</h2>
                  <p className="text-indigo-600 font-medium">Chief Scientist & Prof (AcSIR)</p>
                  <p className="text-gray-600">Catalysis & Inorganic Chemistry Division</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base text-gray-800 hover:text-indigo-600 hover:underline whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base text-gray-800 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaClock className="mr-2 text-indigo-600" />
                  Availability
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium">Office Hours:</span> Monday-Friday, 10:00 AM - 6:30 PM IST
                </p>
                <p className="text-gray-600 mt-1">
                  Please email for appointment scheduling
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <MdSchool className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Research Opportunities</h2>
              </div>

              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{position.title}</h3>
                    <p className="text-gray-700 mb-3">{position.description}</p>
                    
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-700">{req} </span>
                        </li>
                      ))}
                    </ul>
                   {position.visitLink && (  <div className="mt-4">
                      <a
                        target='_blank'
                        href="https://jobs.ncl.res.in/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Apply Now
                        <MdSend className="ml-2 h-4 w-4" />
                      </a>
                    </div>)}

                    <div className="mt-4">
                      <a
                        href="mailto:cp.vinod.ncl@csir.res.in?subject=Application for Position"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Apply via Email
                        <MdEmail className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;