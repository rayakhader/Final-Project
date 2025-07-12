// Hotel.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Hotel from './Hotel';

// ✅ Mock hook & spinner
jest.mock('../../hooks/useHotel', () => ({
  useHotel: () => ({
    hotelDetails: {
      hotelName: 'Test Hotel',
      starRating: 4,
      description: 'A nice place to stay.',
      location: '123 Test Street',
      latitude: 37.7749,
      longitude: -122.4194,
      availableRooms: 5,
    },
    availableRooms: [
      {
        roomId: 1,
        roomPhotoUrl: 'https://example.com/room.jpg',
        roomNumber: '101',
        roomType: 'Deluxe',
        capacityOfAdults: 2,
        capacityOfChildren: 1,
        price: 200,
        roomAmenities: [{ name: 'WiFi' }, { name: 'TV' }]
      }
    ],
    checkIn: '2025-07-11',
    checkOut: '2025-07-12',
    fullscreen: false,
    reviews: [
      {
        reviewId: 1,
        customerName: 'John Doe',
        rating: 5,
        description: 'Great stay!'
      }
    ],
    loading: false,
    cartItems: [],
    validationError: '',
    setCheckIn: jest.fn(),
    setCheckOut: jest.fn(),
    setFullscreen: jest.fn(),
    handleFetchAvailableRoom: jest.fn(),
    handleAddToCart: jest.fn(),
    handleOpenCart: jest.fn(),
  })
}));

jest.mock('../LoadingSpinner', () => () => <div>MockLoadingSpinner</div>);

describe('<Hotel />', () => {
  it('renders hotel details and rooms', () => {
    render(<Hotel />);

    expect(screen.getByText(/Test Hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/A nice place to stay/i)).toBeInTheDocument();
    expect(screen.getByText(/⭐ 4 stars/i)).toBeInTheDocument();
    expect(screen.getByText(/List of Available Rooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Deluxe — Room #101/i)).toBeInTheDocument();
    expect(screen.getByText(/Guest Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });

 it('shows loading spinner if loading is true', () => {
  jest.resetModules(); 
  jest.doMock('../../hooks/useHotel', () => ({
    useHotel: () => ({ loading: true })
  }));
  jest.doMock('../LoadingSpinner', () => () => <div>MockLoadingSpinner</div>);

  const HotelWithLoading = require('./Hotel').default;
  render(<HotelWithLoading />);
  expect(screen.getByText(/MockLoadingSpinner/i)).toBeInTheDocument();
});

});
