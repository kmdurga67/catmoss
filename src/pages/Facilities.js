import PropTypes from 'prop-types';
import { facilitiesConstant } from '../constants/facilitiesConstant';

const Facilities = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Facilities</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art instruments and equipment available for research and experimentation.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facilitiesConstant.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img
                  src={facility.imageURL}
                  alt={facility.nameOfInstrument}
                  className="w-full h-full object-cover min-h-[200px]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                  }}
                />
              </div>
              
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{facility.nameOfInstrument}</h2>
                {facility.description && (
                  <p className="text-gray-600 line-clamp-3">{facility.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
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