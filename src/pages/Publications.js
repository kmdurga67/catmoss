import React from 'react';
import { publicationConstant } from '../constants/publicationConstants';

const Publications = () => {
  const getYearFromDetails = (details) => {
    const yearMatch = details.match(/\((\d{4})\)/);
    return yearMatch ? parseInt(yearMatch[1]) : 0;
  };

  const groupedPublications = publicationConstant.reduce((acc, publication) => {
    const year = getYearFromDetails(publication.other_details);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Publications</h1>
      
      <div className="max-w-4xl mx-auto">
        {sortedYears.map((year) => (
          <div key={year} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">{year}</h2>
            <div className="space-y-6">
              {groupedPublications[year].map((pub) => (
                <PublicationItem key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PublicationItem = ({ publication }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-medium text-gray-800 mb-2">{publication.title}</h3>
      
      <div className="mb-3">
        {publication.authors.map((author, index) => (
          <span 
            key={index} 
            className={`text-gray-700 ${index === 0 ? 'font-semibold' : ''}`}
          >
            {author}
            {index < publication.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
      
      <p className="text-gray-600 italic">{publication.other_details}</p>
    </div>
  );
};

export default Publications;