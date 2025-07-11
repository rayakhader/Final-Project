import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('./Search', () => () => <div>MockSearch</div>);
jest.mock('./FeatureDeals', () => () => <div>MockFeatureDeals</div>);
jest.mock('./RecentlyVisited', () => () => <div>MockRecentlyVisited</div>);
jest.mock('./TrendingDestinations', () => () => <div>MockTrendingDestinations</div>);
jest.mock('../LoadingSpinner', () => () => <div>MockLoadingSpinner</div>);

jest.mock('../../APIs/Home/getFeatureDeals', () => ({
  getFeatureDeals: jest.fn().mockResolvedValue([]),
}));
jest.mock('../../APIs/Home/getRecentHotel', () => ({
  getRecentHotel: jest.fn().mockResolvedValue([]),
}));
jest.mock('../../APIs/Home/getTrendingDest', () => ({
  getTrendingDest: jest.fn().mockResolvedValue([]),
}));

describe('Home page', () => {
  it('renders loading then content', async () => {
    render(<Home />);
    expect(screen.getByText(/MockLoadingSpinner/i)).toBeInTheDocument();
    expect(await screen.findByText(/MockSearch/i)).toBeInTheDocument();
    expect(await screen.findByText(/MockFeatureDeals/i)).toBeInTheDocument();
    expect(await screen.findByText(/MockRecentlyVisited/i)).toBeInTheDocument();
    expect(await screen.findByText(/MockTrendingDestinations/i)).toBeInTheDocument();
  });
});
