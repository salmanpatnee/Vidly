import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NoMatch from './components/NoMatch';
import LoginForm from './components/common/LoginForm';
import RegisterForm from './components/common/RegisterForm';
import MovieForm from './components/MovieForm';
import './App.css';




function App() {
  return (
    <div id="main">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route exact path="/" element={<Navigate replace to="/movies" />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
