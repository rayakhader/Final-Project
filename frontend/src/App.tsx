
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from './context/TokenProvider';
import AdminPanel from './layout/Index';
import Cities from './pages/Cities';
import Rooms from './pages/Rooms';
import Hotels from './pages/Hotels';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Hotel from './pages/Hotel';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Nav from './layout/Nav';

function App() {
  const {token} = useContext(TokenContext)
  return (
      <Router>
        {/* <Nav /> */}
      <Routes>
        <Route path='/' element={token? <Home /> : <Navigate to='/login' replace />} />
        <Route path='/search-results' element={<SearchResults />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/hotels/:hotelId/checkout' element={<Checkout />} />
        <Route path='/hotels/:hotelId/checkout/confirmation' element={<Confirmation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={token ? <AdminPanel /> : <Navigate to='/login' replace />} >
          <Route path='cities' element={<Cities />} />
          <Route path='rooms' element={<Rooms />} />
          <Route path='hotels' element={<Hotels />} />
        </Route>
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
      </Router>
  );
}

export default App;
