import React from 'react';
import PropTypes from 'prop-types';
import { patents } from '../constants/patentConstant';

const PatentItem = ({ patent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{patent.title}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            patent.status === 'Granted' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {patent.status}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Inventors:</span> {patent.inventors.join(', ')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Application/Patent Number</p>
            <p className="text-sm text-gray-800">
              {patent.patentNumber || patent.applicationNumber}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Type</p>
            <p className="text-sm text-gray-800">{patent.type}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Filing Year</p>
            <p className="text-sm text-gray-800">{patent.filingDate || patent.year}</p>
          </div>
        </div>

        {patent.link && (
          <a
            href={patent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Patent
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

PatentItem.propTypes = {
  patent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    inventors: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.oneOf(['Granted', 'Pending']).isRequired,
    type: PropTypes.string.isRequired,
    patentNumber: PropTypes.string,
    applicationNumber: PropTypes.string,
    year: PropTypes.string,
    filingDate: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const PatentSection = ({ title, patents }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {patents.map((patent) => (
          <PatentItem key={patent.id} patent={patent} />
        ))}
      </div>
    </div>
  );
};

PatentSection.propTypes = {
  title: PropTypes.string.isRequired,
  patents: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Patents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Patent Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Novel technologies and refined processes cultivated by our research collective
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full">
              <p className="text-gray-600">
                Our research breakthroughs in catalysis and nanomaterials have translated into a strong intellectual property portfolio. Delve into our granted patents and promising pending applications.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  href="#published"
                  className="px-4 py-2 text-sm font-medium rounded-l-lg bg-indigo-600 text-white"
                >
                  Granted Patents
                </a>
                <a
                  href="#provisional"
                  className="px-4 py-2 text-sm font-medium rounded-r-lg bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                >
                  Pending Applications
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="published">
          <PatentSection 
            title="Granted Patents" 
            patents={patents.published} 
          />
        </div>

        <div id="provisional">
          <PatentSection 
            title="Patent Applications" 
            patents={patents.provisional} 
          />
        </div>
      </div>
    </div>
  );
};

export default Patents;