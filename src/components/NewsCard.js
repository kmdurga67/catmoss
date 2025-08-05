import { Link } from 'react-router-dom';

const NewsCard = ({ newsItem }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={newsItem.image} 
          alt={newsItem.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{newsItem.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{newsItem.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{newsItem.summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;