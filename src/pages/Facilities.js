import { useState } from 'react';
import PropTypes from 'prop-types';
import { facilitiesConstant } from '../constants/facilitiesConstant';

const ImagePopup = ({ imageUrl, altText, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          aria-label="Close image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const FacilityCard = ({ facility }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <article className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:ring-2 hover:ring-primary-500 h-full flex flex-col">
        <div 
          className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
          onClick={togglePopup}
        >
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

      {showPopup && (
        <ImagePopup
          imageUrl={facility.imageURL}
          altText={facility.nameOfInstrument}
          onClose={togglePopup}
        />
      )}
    </>
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
            Explore our cutting-edge instruments and research infrastructure
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilitiesConstant.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
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