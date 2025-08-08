import React, { useState, useMemo } from 'react';
import { publicationConstant } from '../constants/publicationConstants';

const Publications = () => {
    const allYears = useMemo(() => {
        const years = new Set();
        publicationConstant.forEach(pub => {
            const yearMatch = pub.other_details.match(/\((\d{4})\)/);
            if (yearMatch) years.add(parseInt(yearMatch[1]));
        });
        return Array.from(years).sort((a, b) => b - a);
    }, []);

    const [selectedYear, setSelectedYear] = useState('all');

    const filteredPublications = useMemo(() => {
        if (selectedYear === 'all') return publicationConstant;
        return publicationConstant.filter(pub => {
            const yearMatch = pub.other_details.match(/\((\d{4})\)/);
            return yearMatch && parseInt(yearMatch[1]) === parseInt(selectedYear);
        });
    }, [selectedYear]);

    const groupedPublications = useMemo(() => {
        return filteredPublications.reduce((acc, publication) => {
            const yearMatch = publication.other_details.match(/\((\d{4})\)/);
            if (!yearMatch) return acc;

            const year = parseInt(yearMatch[1]);
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(publication);
            return acc;
        }, {});
    }, [filteredPublications]);

    const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
                        Publications
                    </h1>
                    {/* <p className="max-w-3xl mx-auto text-xl text-gray-600">
                        Explore our collection of published research works
                    </p> */}
                </div>

                <div className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h2 className="text-lg font-medium text-gray-900">Filter Publications</h2>
                        <div className="flex items-center gap-3">
                            <label htmlFor="year-filter" className="text-sm font-medium text-gray-700">
                                By Year:
                            </label>
                            <select
                                id="year-filter"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
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
                </div>

                <div className="space-y-12">
                    {sortedYears.length > 0 ? (
                        sortedYears.map((year) => (
                            <div key={year} className="space-y-6">
                                <div className="flex items-center">
                                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                        <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                                        {year}
                                    </h2>
                                    <span className="ml-4 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        {groupedPublications[year].length} publication{groupedPublications[year].length !== 1 ? 's' : ''}
                                    </span>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                                    {groupedPublications[year].map((pub) => (
                                        <PublicationItem key={pub.id} publication={pub} />
                                    ))}
                                </div>
                            </div>
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

const PublicationItem = ({ publication }) => {
    return (
        <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                    {publication.title}
                </h3>

                <div className="mb-4">
                    {publication.authors.map((author, index) => (
                        <span
                            key={index}
                            className={`text-gray-700 ${index === 0 ? 'font-medium' : ''}`}
                        >
                            {author.trim()}
                            {index < publication.authors.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </div>

                <div className="flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {publication.other_details}
                </div>
            </div>
        </div>
    );
};

export default Publications;