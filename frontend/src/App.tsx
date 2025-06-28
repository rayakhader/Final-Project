
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/HomePage/Home';
import Nav from './components/Nav/Nav';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';
import Hotel from './components/Hotel/Hotel';

function App() {
  return (
      <Router>
        <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-results' element={<SearchResultsPage />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Router>
  );
}

export default App;
