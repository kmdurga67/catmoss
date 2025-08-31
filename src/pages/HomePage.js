import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselData, workDetails } from "../constants/constant";
import SectionTitle from "../components/SectionTitle";
import ResearchCard from "../components/ResearchCard";
import NewsSection from "../components/NewsSection";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={false}
          emulateTouch={true}
          className="carousel"
        >
          {carouselData.map((item) => (
            <div key={item.id} className="relative h-[500px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                  <div className="container mx-auto px-4 text-white text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{item.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="About Our Research"
            subtitle="Exploring the frontiers of catalysis science"
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              {workDetails}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Research Highlights"
            subtitle="Our key areas of investigation"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Link to="/catalysis">
              <ResearchCard
                title="Catalysis"
                description="Developing novel catalysts for sustainable chemical processes"
                icon="🧪"
              />
            </Link>

            <Link to="/surface-science">
              <ResearchCard
                title="Surface Science"
                description="Exploring surfaces relevant to catalysis under realistic conditions"
                icon="🔬"
              />
            </Link>

            <Link to="/nanomaterials">
              <ResearchCard
                title="Nanomaterial synthesis"
                description="Synthesis of functional nanomaterials for catalytic applications"
                icon="⚛️"
              />
            </Link>
          </div>
        </div>
      </section>

      <NewsSection />
    </div>
  );
};

export default HomePage;