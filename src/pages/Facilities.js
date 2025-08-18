import PropTypes from 'prop-types';
import { facilitiesConstant } from '../constants/facilitiesConstant';

const FacilityCard = ({ facility }) => {
  return (
    <article className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:ring-2 hover:ring-primary-500 h-full flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={facility.imageURL}
          alt={facility.nameOfInstrument}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/placeholder-equipment.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {facility.nameOfInstrument}
          </h3>
          {facility.description && (
            <p className="text-gray-600 line-clamp-3 mb-4">
              {facility.description}
            </p>
          )}
        </div>
        
        <button 
          className="mt-auto w-full py-2 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-200"
          aria-label={`Learn more about ${facility.nameOfInstrument}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

FacilityCard.propTypes = {
  facility: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameOfInstrument: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

const Facilities = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
            Research Facilities & Equipment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge instrumentation and specialized research infrastructure
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilitiesConstant.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            View All Equipment
          </button>
        </div> */}
      </div>
    </main>
  );
};

Facilities.propTypes = {
  facilitiesConstant: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameOfInstrument: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default Facilities;