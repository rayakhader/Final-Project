import { useLocation } from 'react-router-dom';
import NotFound from '../features/error/NotFound';

export type City = {
  cityId: number;
  cityName: string;
  countryName: string;
  description: number;
  thumbnailUrl: string;
};

type LocationState = {
  city: City;
};

function City() {
  const location = useLocation();
  const { city } = (location.state as LocationState) || {};

  if (!city) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px] w-full overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src={city.thumbnailUrl}
          alt={city.cityName}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg">{city.cityName}</h1>
          <p className="text-2xl mt-2 drop-shadow-sm">{city.countryName}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About {city.cityName}</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          {city.description || "No description available."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Explore more</h3>
        <p className="text-gray-600">Discover top hotels, attractions, and dining in {city.cityName}.</p>
      </div>
    </div>
  );
}

export default City;
