import { newsData } from '../constants/newsConstants';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Latest News" 
          subtitle="Stay updated with our research activities"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsData.sort((a,b) => b.id - a.id).slice(0,8).map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/news" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            View All News
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;