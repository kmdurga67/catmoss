import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { publicationConstant } from '../constants/publicationConstants';

/**
 * Formats publication details according to academic standards
 * @param {string} details - The other_details string from publication
 * @returns {string} - Formatted publication details
 */
const formatPublicationDetails = (details) => {
  if (!details) return '';

  let formatted = details.replace(/\.\s*$/, '').trim();

  if (formatted && !formatted.endsWith('.')) {
    formatted += '.';
  }

  return formatted;
};

/**
 * Formats the title with proper punctuation
 * @param {string} title - The publication title
 * @returns {string} - Formatted title
 */
const formatTitle = (title) => {
  if (!title) return '';

  let formatted = title.trim();

  if (!/[.!?]$/.test(formatted)) {
    formatted += '.';
  }

  return formatted;
};

const PublicationItem = ({ publication }) => {
  const { title, authors, other_details, doi } = publication;

  return (
    <article className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
          {formatTitle(title)}
        </h3>

        <div className="mb-4">
          {authors.map((author, index) => (
            <span
              key={index}
              className="text-gray-700"
            >
              {author.trim()}
              {index < authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            {formatPublicationDetails(other_details)}
          </div>

          {doi && (
            <a
              href={doi.startsWith('http') ? doi : `https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <svg className="flex-shrink-0 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              View Publication
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

PublicationItem.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    other_details: PropTypes.string.isRequired,
    year: PropTypes.string,
    doi: PropTypes.string
  }).isRequired
};

const YearFilter = ({ allYears, selectedYear, onYearChange }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <h2 className="text-lg font-medium text-gray-900">Filter Publications</h2>
    <div className="flex items-center gap-3">
      <label htmlFor="year-filter" className="text-sm font-medium text-gray-700">
        By Year:
      </label>
      <select
        id="year-filter"
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="all">All Years</option>
        {allYears.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  </div>
);

YearFilter.propTypes = {
  allYears: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onYearChange: PropTypes.func.isRequired
};

const Publications = () => {
  const sortedPublications = useMemo(() => {
    return [...publicationConstant].reverse();
  }, []);

  const allYears = useMemo(() => {
    const years = new Set(sortedPublications.map(pub => pub.year));
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
  }, [sortedPublications]);

  const [selectedYear, setSelectedYear] = useState('all');

  const filteredPublications = useMemo(() => {
    if (selectedYear === 'all') return sortedPublications;
    return sortedPublications.filter(pub => pub.year === selectedYear);
  }, [selectedYear, sortedPublications]);

  const groupedPublications = useMemo(() => {
    return filteredPublications.reduce((acc, publication) => {
      const year = publication.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(publication);
      return acc;
    }, {});
  }, [filteredPublications]);

  const sortedYears = Object.keys(groupedPublications).sort((a, b) => parseInt(b) - parseInt(a));
  const totalPublications = publicationConstant.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
            Publications
          </h1>
          <p className="max-w-3xl mx-auto text-2xl font-extrabold text-orange-600">
            {totalPublications} research publication{totalPublications !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <YearFilter
            allYears={allYears}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />
        </div>

        <div className="space-y-12">
          {sortedYears.length > 0 ? (
            sortedYears.map((year) => (
              <section key={year} className="space-y-6">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                    {year}
                  </h2>
                  <span className="ml-4 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {groupedPublications[year].length} publication{groupedPublications[year].length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                  {groupedPublications[year].map((pub) => (
                    <PublicationItem key={pub.id} publication={pub} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No publications found for the selected year.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;