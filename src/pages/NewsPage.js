import { useState } from 'react';
import { newsData } from '../constants/newsConstants';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = ['all', ...new Set(newsData.map(item => item.category))];
  
  const filteredNews = activeTab === 'all' 
    ? newsData.sort((a, b) => b.id - a.id) 
    : newsData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="News & Announcements" 
            subtitle="Stay updated with our latest activities"
          />
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-sm`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>
          
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((newsItem) => (
                <NewsCard key={newsItem.id} newsItem={newsItem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No news items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;