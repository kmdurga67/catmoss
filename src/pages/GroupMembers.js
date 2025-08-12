import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { groupMembers, groupLeader } from '../constants/groupMembers';

const GroupLeaderCard = ({ leader }) => {
    const [expanded, setExpanded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="w-full mb-12" data-testid="group-leader-card">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="md:flex">
                    <div className="md:w-1/3 lg:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
                        <div className="relative">
                            {leader.imageURL && !imageError ? (
                                <img
                                    src={leader.imageURL}
                                    alt={leader.name}
                                    onError={handleImageError}
                                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-48 h-48 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-6xl font-bold border-4 border-white shadow-lg">
                                    {leader.name.charAt(0)}
                                </div>
                            )}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-white text-indigo-700 shadow-md">
                                    Group Leader
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4 p-6">
                        <div className="flex flex-col h-full">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{leader.name}</h2>
                                <p className="text-lg text-indigo-600 font-medium mb-2">{leader.designation}</p>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <a 
                                        href={`mailto:${leader.mail}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                        aria-label={`Email ${leader.name}`}
                                    >
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {leader.mail}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                                <p className="text-gray-600 text-justify">
                                    {expanded ? leader.description : `${leader.description.substring(0, 200)}...`}
                                </p>
                                {leader.description.length > 200 && (
                                    <button 
                                        onClick={() => setExpanded(!expanded)}
                                        className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
                                        aria-expanded={expanded}
                                        aria-controls="leader-description"
                                    >
                                        {expanded ? 'Show less' : 'Read more'}
                                    </button>
                                )}
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Focus</h3>
                                <p className="text-gray-600 text-justify" id="research-focus">{leader.researchFocus}</p>
                            </div>

                            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Surface Science
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Nanocatalysis
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    XPS Spectroscopy
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    HRTEM/STM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

GroupLeaderCard.propTypes = {
    leader: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        researchFocus: PropTypes.string.isRequired,
        imageURL: PropTypes.string,
    }).isRequired,
};

const ResearchGroupMemberCard = ({ member }) => {
    const {
        awards = [],
        publications = [],
        conferences = [],
        patents = [],
        achievements = [],
        imageURL = ''
    } = member;

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = '';
    };

    return (
        <article className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
            <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    {imageURL ? (
                        <img
                            src={imageURL}
                            alt={member.name}
                            onError={handleImageError}
                            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                            loading="lazy"
                        />
                    ) : (
                        <div className="h-24 w-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-md">
                            {member.name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-16 pb-6 px-6 flex-1 flex flex-col">
                <div className="flex-1">
                    <div className="text-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                    </div>

                    <div className="mb-4 text-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {member.designation}
                        </div>
                        {awards.length > 0 && (
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
                                Award Winner
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xs font-bold uppercase underline tracking-wider mb-1">
                            Research Focus
                        </h3>
                        <p className="text-sm text-gray-600 text-justify">{member.researchArea}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                        {publications.length > 0 && (
                            <div className="bg-blue-50 rounded-lg p-2 text-center">
                                <div className="text-blue-800 font-bold">{publications.length}</div>
                                <div className="text-xs text-blue-600">Publications</div>
                            </div>
                        )}
                        {patents.length > 0 && (
                            <div className="bg-green-50 rounded-lg p-2 text-center">
                                <div className="text-green-800 font-bold">{patents.length}</div>
                                <div className="text-xs text-green-600">Patents</div>
                            </div>
                        )}
                        {conferences.length > 0 && (
                            <div className="bg-purple-50 rounded-lg p-2 text-center">
                                <div className="text-purple-800 font-bold">{conferences.length}</div>
                                <div className="text-xs text-purple-600">Conferences</div>
                            </div>
                        )}
                        {awards.length > 0 && (
                            <div className="bg-yellow-50 rounded-lg p-2 text-center">
                                <div className="text-yellow-800 font-bold">{awards.length}</div>
                                <div className="text-xs text-yellow-600">Awards</div>
                            </div>
                        )}
                    </div>
                    <div className="space-y-4">
                        {publications.length > 0 && (
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-sm font-medium text-gray-700">Publications</span>
                                    <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <ul className="mt-2 space-y-2 pl-2">
                                    {publications.map((pub, idx) => (
                                        <li key={`pub-${member.id}-${idx}`} className="text-sm">
                                            <a
                                                href={pub.url || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-600 hover:text-indigo-800 flex items-start transition-colors"
                                            >
                                                <span className="mr-1">•</span>
                                                <span className="hover:underline">
                                                    {pub.title}
                                                    {pub.journal && (
                                                        <span className="text-gray-500">, {pub.journal}</span>
                                                    )}
                                                    {pub.year && (
                                                        <span className="text-gray-500"> ({pub.year})</span>
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        )}

                        {awards.length > 0 && (
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-sm font-medium text-gray-700">Awards</span>
                                    <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <ul className="mt-2 space-y-2 pl-2">
                                    {awards.map((award, idx) => (
                                        <li key={`award-${member.id}-${idx}`} className="text-sm text-gray-600">
                                            <div className="font-medium">• {award.title}</div>
                                            {award.conference && (
                                                <div className="text-xs text-gray-500 ml-3">{award.conference}</div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        )}

                        {patents.length > 0 && (
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-sm font-medium text-gray-700">Patents</span>
                                    <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <ul className="mt-2 space-y-3 pl-2">
                                    {patents.map((patent, idx) => (
                                        <li key={`patent-${member.id}-${idx}`} className="text-sm text-gray-600">
                                            <div className="font-medium">• {patent.title}</div>
                                            {patent.inventors && (
                                                <div className="text-xs text-gray-500 ml-3">
                                                    <span className="font-medium">Inventors:</span> {patent.inventors}
                                                </div>
                                            )}
                                            <div className="text-xs text-gray-500 ml-3">
                                                <span className="font-medium">Status:</span> {patent.status}
                                                {patent.applicationNo && ` (${patent.applicationNo})`}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

ResearchGroupMemberCard.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        researchArea: PropTypes.string.isRequired,
        conferences: PropTypes.array,
        awards: PropTypes.array,
        achievements: PropTypes.array,
        publications: PropTypes.array,
        patents: PropTypes.array,
        imageURL: PropTypes.string,
    }).isRequired,
};

const GroupMembers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(groupMembers);

    useEffect(() => {
        const results = groupMembers.filter(member => {
            const matchesSearch =
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.researchArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.designation.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesFilter =
                filter === '' ||
                member.designation.toLowerCase().includes(filter.toLowerCase());

            return matchesSearch && matchesFilter;
        });
        setFilteredMembers(results);
    }, [searchTerm, filter]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                        Research Team
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        Pioneering researchers driving advancements in sustainable catalysis and green chemistry solutions.
                    </p>
                </div>

                {groupLeader.length > 0 && (
                    <section aria-labelledby="group-leader-heading" className="mb-12">
                        <h2 id="group-leader-heading" className="text-2xl font-bold text-gray-800 mb-6">
                            Group Leader
                        </h2>
                        <GroupLeaderCard leader={groupLeader[0]} />
                    </section>
                )}

                <section aria-labelledby="team-members-heading">
                    <h2 id="team-members-heading" className="text-2xl font-bold text-gray-800 mb-6">
                        Team Members
                    </h2>

                    <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="w-full sm:flex-1">
                                <label htmlFor="search-researchers" className="sr-only">Search researchers</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        id="search-researchers"
                                        type="text"
                                        placeholder="Search by name, research area, or designation..."
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-64">
                                <label htmlFor="filter-designation" className="sr-only">Filter by designation</label>
                                <select
                                    id="filter-designation"
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="">All Designations</option>
                                    <option value="PhD SRF">PhD SRF</option>
                                    <option value="JRF">JRF</option>
                                    <option value="Project Associate">Project Associate</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 text-sm text-gray-600">
                        Showing {filteredMembers.length} of {groupMembers.length} researchers
                    </div>

                    {filteredMembers.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredMembers.map((member) => (
                                <ResearchGroupMemberCard
                                    key={member.id}
                                    member={{
                                        ...member,
                                        awards: member.awards || [],
                                        publications: member.publications || [],
                                        conferences: member.conferences || [],
                                        patents: member.patents || [],
                                        achievements: member.achievements || [],
                                        imageURL: member.imageURL || ''
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No researchers found</h3>
                            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default GroupMembers;