import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { groupMembers, groupLeader, phdAlumini } from '../constants/groupMembers';
import { projectTrainee } from '../constants/projectTrainee';

const ProfileImage = ({ src, alt, fallbackText, className = '' }) => {
    const [imageError, setImageError] = useState(false);

    if (src && !imageError) {
        return (
            <img
                src={src}
                alt={alt}
                onError={() => setImageError(true)}
                className={`rounded-full object-cover border-4 border-white ${className}`}
                loading="lazy"
            />
        );
    }

    return (
        <div className={`rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold border-4 border-white ${className}`}>
            {fallbackText.charAt(0)}
        </div>
    );
};

ProfileImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    fallbackText: PropTypes.string.isRequired,
    className: PropTypes.string,
};

const GroupLeaderCard = ({ leader }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="w-full mb-12" data-testid="group-leader-card">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="md:flex">
                    <div className="md:w-1/3 lg:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
                        <div className="relative">
                            <ProfileImage
                                src={leader.imageURL}
                                alt={leader.name}
                                fallbackText={leader.name}
                                className="w-48 h-48 shadow-lg text-6xl"
                            />
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-white text-indigo-700 shadow-md">
                                    Team Leader
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4 p-6">
                        <div className="flex flex-col h-full">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{leader.name}</h2>
                                <p className="text-lg text-indigo-600 font-medium mb-2">{leader.designation}</p>
                                <ContactInfo email={leader.mail} />
                            </div>

                            <ExpandableContent
                                content={leader.description}
                                expanded={expanded}
                                onToggle={() => setExpanded(!expanded)}
                                label="About"
                            />

                            <ContentSection title="Research Focus" content={leader.researchFocus} />

                            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                {['Surface Science', 'Nanocatalysis', 'XPS Spectroscopy', 'HRTEM/STM'].map((tag) => (
                                    <Tag key={tag} text={tag} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResearchGroupMemberCard = ({ member }) => {
    const stats = [
        { label: 'Publications', count: member.publications?.length || 0, color: 'blue' },
        { label: 'Patents', count: member.patents?.length || 0, color: 'green' },
        { label: 'Conferences', count: member.conferences?.length || 0, color: 'purple' },
        { label: 'Awards', count: member.awards?.length || 0, color: 'yellow' },
    ].filter(stat => stat.count > 0);

    return (
        <article className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
            <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <ProfileImage
                        src={member.imageURL}
                        alt={member.name}
                        fallbackText={member.name}
                        className="h-24 w-24 shadow-md text-4xl"
                    />
                </div>
            </div>

            <div className="pt-16 pb-6 px-6 flex-1 flex flex-col">
                <div className="flex-1">
                    <div className="text-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                        <div className="mt-2 flex justify-center gap-2">
                            <Tag text={member.designation} color="indigo" />
                            {member.awards?.length > 0 && <Tag text="Award Winner" color="yellow" />}
                        </div>
                    </div>

                    <ContentSection title="Research Focus" content={member.researchArea} small />

                    {stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            {stats.map((stat) => (
                                <StatBadge key={stat.label} {...stat} />
                            ))}
                        </div>
                    )}

                    <div className="space-y-4">
                        <ExpandableList items={member.publications} label="Publications" renderItem={(item) => (
                            <a
                                href={item.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 flex items-start transition-colors"
                            >
                                <span className="mr-1">•</span>
                                <span className="hover:underline">
                                    {item.title}
                                    {item.journal && <span className="text-gray-500">, {item.journal}</span>}
                                    {item.year && <span className="text-gray-500"> ({item.year})</span>}
                                </span>
                            </a>
                        )} />

                        <ExpandableList items={member.awards} label="Awards" renderItem={(item) => (
                            <div className="text-gray-600">
                                <div className="font-medium">• {item.title}</div>
                                {item.conference && <div className="text-xs text-gray-500 ml-3">{item.conference}</div>}
                            </div>
                        )} />

                        <ExpandableList items={member.patents} label="Patents" renderItem={(item) => (
                            <div className="text-gray-600">
                                <div className="font-medium">• {item.title}</div>
                                {item.inventors && (
                                    <div className="text-xs text-gray-500 ml-3">
                                        <span className="font-medium">Inventors:</span> {item.inventors}
                                    </div>
                                )}
                                <div className="text-xs text-gray-500 ml-3">
                                    <span className="font-medium">Status:</span> {item.status}
                                    {item.applicationNo && ` (${item.applicationNo})`}
                                </div>
                            </div>
                        )} />
                    </div>
                </div>
            </div>
        </article>
    );
};

const PhdAlumniCard = ({ alumni }) => (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <ProfileImage
                    src={alumni.imageURL}
                    alt={alumni.name}
                    fallbackText={alumni.name}
                    className="h-24 w-24 shadow-md text-4xl"
                />
            </div>
        </div>

        <div className="pt-16 pb-6 px-6 flex-1">
            <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">{alumni.name}</h3>
                <p className="text-sm text-gray-600">{alumni.tenure}</p>
            </div>

            <ContentSection title="Thesis Title" content={alumni.thesisTitle} small />
           {alumni.currentPosition && ( <ContentSection title="Current Position" content={alumni.currentPosition} small />)}

            <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Contact
                </h4>
                <div className="space-y-1">
                    {Array.isArray(alumni.email) ? (
                        alumni.email.map((email) => (
                            <ContactInfo key={email} email={email} small />
                        ))
                    ) : (
                        <ContactInfo email={alumni.email} small />
                    )}
                </div>
            </div>
        </div>
    </div>
);

const ProjectTraineeCard = ({ trainee }) => (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="p-6 flex-1">
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">{trainee.name}</h3>
                <Tag text={trainee.course} color="indigo" small />
            </div>

            <div className="space-y-3">
                <ContentSection title="Tenure" content={trainee.tenure} small />
                <ContentSection title="Institution" content={trainee.college} small />
            </div>
        </div>
    </div>
);

const Tag = ({ text, color = 'blue', small = false }) => {
    const colorClasses = {
        indigo: 'bg-indigo-100 text-indigo-800',
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        purple: 'bg-purple-100 text-purple-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        gray: 'bg-gray-100 text-gray-800',
    };

    return (
        <span className={`inline-flex items-center ${small ? 'px-2 py-0.5 rounded text-xs' : 'px-3 py-1 rounded-full text-xs'} font-medium ${colorClasses[color]}`}>
            {text}
        </span>
    );
};

const StatBadge = ({ count, label, color }) => {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-800',
        green: 'bg-green-50 text-green-800',
        purple: 'bg-purple-50 text-purple-800',
        yellow: 'bg-yellow-50 text-yellow-800',
    };

    return (
        <div className={`rounded-lg p-2 text-center ${colorClasses[color]}`}>
            <div className="font-bold">{count}</div>
            <div className="text-xs">{label}</div>
        </div>
    );
};

const ContentSection = ({ title, content, small = false }) => (
    <div className="mb-4">
        <h4 className={`${small ? 'text-xs' : 'text-sm'} font-semibold uppercase tracking-wider text-gray-800 mb-1`}>
            {title}
        </h4>
        <p className={`${small ? 'text-sm' : 'text-base'} text-gray-500 ${small ? '' : 'text-justify'} text-justify`}>
            {content}
        </p>
    </div>
);

const ExpandableContent = ({ content, expanded, onToggle, label }) => (
    <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
        <p className="text-gray-600 text-justify">
            {expanded ? content : `${content.substring(0, 200)}...`}
        </p>
        {content.length > 200 && (
            <button
                onClick={onToggle}
                className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
                aria-expanded={expanded}
            >
                {expanded ? 'Show less' : 'Read more'}
            </button>
        )}
    </div>
);

const ExpandableList = ({ items = [], label, renderItem }) => {
    if (!items || items.length === 0) return null;

    return (
        <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <ul className="mt-2 space-y-2 pl-2">
                {items.map((item, idx) => (
                    <li key={idx} className="text-sm">
                        {renderItem(item)}
                    </li>
                ))}
            </ul>
        </details>
    );
};

const ContactInfo = ({ email, small = false }) => (
    <a
        href={`mailto:${email}`}
        className={`inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors ${small ? 'text-sm' : ''}`}
        aria-label={`Email ${email}`}
    >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="truncate">{email}</span>
    </a>
);

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

    const currentPhdMembers = filteredMembers.filter(member => 
        !member.designation.toLowerCase().includes('project associate')
    );
    
    const projectAssociates = filteredMembers.filter(member => 
        member.designation.toLowerCase().includes('project associate')
    );

    const renderSectionHeader = (title, description) => (
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">{description}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {renderSectionHeader(
                    "Research Team",
                    "Researchers driving advancements in sustainable catalysis and green chemistry solutions at Cat&MOSS."
                )}

                {groupLeader.length > 0 && (
                    <section aria-labelledby="group-leader-heading" className="mb-12">
                        <h3 id="group-leader-heading" className="sr-only">Team Leader</h3>
                        <GroupLeaderCard leader={groupLeader[0]} />
                    </section>
                )}

                <section aria-labelledby="team-members-heading" className="mb-16">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm">
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

                    <div className="mb-4 text-sm text-gray-600">
                        Showing {filteredMembers.length} of {groupMembers.length} researchers
                    </div>
                    {currentPhdMembers.length > 0 && (
                        <>
                            <p className='text-gray-600 font-medium pb-4'>Current PhD Students</p>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                                {currentPhdMembers.map((member) => (
                                    <ResearchGroupMemberCard
                                        key={member.id}
                                        member={member}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Project Associates Section */}
                    {projectAssociates.length > 0 && (
                        <>
                            <p className='text-gray-600 font-medium pb-4'>Project Associates</p>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
                                {projectAssociates.map((member) => (
                                    <ResearchGroupMemberCard
                                        key={member.id}
                                        member={member}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {filteredMembers.length === 0 && (
                        <EmptyState message="No researchers found" suggestion="Try adjusting your search or filter criteria" />
                    )}
                </section>

                <section aria-labelledby="phd-alumni-heading" className="mt-16">
                    {renderSectionHeader(
                        "PhD Alumni",
                        "Our distinguished alumni who have contributed significantly to our research"
                    )}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {phdAlumini.map((alumni) => (
                            <PhdAlumniCard key={alumni.id} alumni={alumni} />
                        ))}
                    </div>
                </section>

                <section aria-labelledby="trainees-heading" className="mt-16">
                    {renderSectionHeader(
                        "Project Trainees & Interns",
                        "Students who have worked with us on short-term research projects"
                    )}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projectTrainee.map((trainee) => (
                            <ProjectTraineeCard key={trainee.id} trainee={trainee} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const EmptyState = ({ message, suggestion }) => (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">{message}</h3>
        <p className="mt-1 text-gray-500">{suggestion}</p>
    </div>
);

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

PhdAlumniCard.propTypes = {
    alumni: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tenure: PropTypes.string.isRequired,
        thesisTitle: PropTypes.string.isRequired,
        currentPosition: PropTypes.string.isRequired,
        email: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]).isRequired,
        imageURL: PropTypes.string,
    }).isRequired,
};

ProjectTraineeCard.propTypes = {
    trainee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tenure: PropTypes.string.isRequired,
        college: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
    }).isRequired,
};

export default GroupMembers;