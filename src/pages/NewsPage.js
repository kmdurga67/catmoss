import { newsData } from '../constants/newsConstants';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';

const NewsPage = () => {
  return (
      <div>
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="News & Announcements" 
            subtitle="Stay updated with our latest activities"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((newsItem) => (
              <NewsCard key={newsItem.id} newsItem={newsItem} />
            ))}
          </div>
        </div>
      </section>
      </div>
  );
};

export default NewsPage;