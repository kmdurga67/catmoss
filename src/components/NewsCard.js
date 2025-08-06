const NewsCard = ({ newsItem }) => {
  const imageUrl = newsItem.image !== '#' 
    ? newsItem.image 
    : `https://source.unsplash.com/random/400x300/?${newsItem.category}`;

  const categoryColors = {
    publication: 'bg-blue-100 text-blue-800',
    award: 'bg-purple-100 text-purple-800',
    'new member': 'bg-green-100 text-green-800',
    thesis: 'bg-yellow-100 text-yellow-800',
    collaboration: 'bg-indigo-100 text-indigo-800',
    conference: 'bg-pink-100 text-pink-800',
    'alumni achievement': 'bg-teal-100 text-teal-800',
    funding: 'bg-orange-100 text-orange-800',
    achievement: 'bg-amber-100 text-amber-800',
    recognition: 'bg-cyan-100 text-cyan-800'
  };

  const colorClass = categoryColors[newsItem.category] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl}
          alt={newsItem.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{newsItem.date}</span>
          <span className={`text-xs px-2 py-1 ${colorClass} rounded-full capitalize`}>
            {newsItem.category.replace(/-/g, ' ')}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{newsItem.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{newsItem.summary}</p>
        <div className="mt-auto">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;