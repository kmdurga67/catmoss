import PropTypes from 'prop-types';

const NewsCard = ({ newsItem }) => {
  const hasImage = newsItem.image && newsItem.image !== '#';
  const categoryColors = {
    publication: { bg: 'bg-blue-100', text: 'text-blue-800' },
    award: { bg: 'bg-purple-100', text: 'text-purple-800' },
    'new member': { bg: 'bg-green-100', text: 'text-green-800' },
    thesis: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    collaboration: { bg: 'bg-indigo-100', text: 'text-indigo-800' },
    conference: { bg: 'bg-pink-100', text: 'text-pink-800' },
    'alumni achievement': { bg: 'bg-teal-100', text: 'text-teal-800' },
    funding: { bg: 'bg-orange-100', text: 'text-orange-800' },
    achievement: { bg: 'bg-amber-100', text: 'text-amber-800' },
    recognition: { bg: 'bg-cyan-100', text: 'text-cyan-800' }
  };

  const colorClass = categoryColors[newsItem.category] || { bg: 'bg-gray-100', text: 'text-gray-800' };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col group">
      {hasImage ? (
        <div className="h-48 overflow-hidden relative">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div class="w-full h-full flex items-center justify-center ${colorClass.bg}">
                  <span class="text-4xl font-bold ${colorClass.text}">${newsItem.title.charAt(0).toUpperCase()}</span>
                </div>
              `;
            }}
          />
        </div>
      ) : (
        <div className={`h-48 flex items-center justify-center ${colorClass.bg} relative`}>
          <span className="text-4xl font-bold ${colorClass.text}">
            {newsItem.title.charAt(0).toUpperCase()}
          </span>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-blue-600 font-medium">
            {newsItem.date}
          </span>
          <span className={`text-xs px-2 py-1 ${colorClass.bg} ${colorClass.text} rounded-full capitalize`}>
            {newsItem.category.replace(/-/g, ' ')}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{newsItem.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{newsItem.summary}</p>
        <div className="mt-auto">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors flex items-center">
            Read more
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default NewsCard;