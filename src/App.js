import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/common/Navbar';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import MovieDetails from './components/MovieDetails';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div id="main">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route exact path="/" element={<Navigate replace to="/movies" />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
