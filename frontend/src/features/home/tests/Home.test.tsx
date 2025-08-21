import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';

jest.mock('../components/Search', () => () => <div>MockSearch</div>);
jest.mock('../components/FeatureDeals', () => () => <div>MockFeatureDeals</div>);
jest.mock('../components/RecentlyVisited', () => () => <div>MockRecentlyVisited</div>);
jest.mock('../components/TrendingDestinations', () => () => <div>MockTrendingDestinations</div>);
jest.mock('./../../components/LoadingSpinner', () => () => <div>MockLoadingSpinner</div>);

jest.mock('../services/getFeatureDeals', () => ({
  getFeatureDeals: jest.fn().mockResolvedValue([]),
}));
jest.mock('../services/getRecentHotel', () => ({
  getRecentHotel: jest.fn().mockResolvedValue([]),
}));
jest.mock('../services/getTrendingDest', () => ({
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
