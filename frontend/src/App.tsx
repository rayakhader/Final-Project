
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/HomePage/Home';
import Nav from './components/Nav/Nav';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';
import Hotel from './components/Hotel/Hotel';
import { useContext } from 'react';
import { TokenContext } from './context/TokenProvider';
import Checkout from './components/CheckoutPage/Checkout';
import ConfirmationPage from './components/CheckoutPage/ConfirmationPage';

function App() {
  const {token} = useContext(TokenContext)
  return (
      <Router>
        <Nav />
      <Routes>
        <Route path='/' element={token? <Home /> : <Navigate to='/login' replace />} />
        <Route path='/search-results' element={<SearchResultsPage />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/hotels/:hotelId/checkout' element={<Checkout />} />
        <Route path='/hotels/:hotelId/checkout/confirmation' element={<ConfirmationPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Router>
  );
}

export default App;
