
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
       
    //   </header>
      <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      </Router>

    // </div>
  );
}

export default App;
