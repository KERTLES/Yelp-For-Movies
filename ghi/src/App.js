import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import MovieDetail from './MovieDetail';
import GenreList from './GenreList';
import SignupPage from './SignupPage';
import Login from './Login';
import { AuthProvider } from "./token";
import UserProfile from './UserProfile';

function App(props) {
  return (
    <AuthProvider>
    <BrowserRouter>
      <DropdownNav />
      <div title="App" className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":movieTitle-:movieId" element={<MovieDetail />} />
          <Route path=":genreName/:genreId" element={<GenreList />} />
          {/* <Route path="movie">
            <Route path="" element={<MovieDetail />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route> */}
        <Route path="SignupPage" element={<SignupPage/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="profile" element={<UserProfile/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;