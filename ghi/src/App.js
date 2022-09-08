import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import CreateReviewForm from './CreateReviewForm';
import MovieDetail from './MovieDetail';
import GenreList from './GenreList';
import SignupPage from './SignupPage';
import Login from './login';
import { AuthProvider } from "./token";
import UserProfile from './UserProfile';
import Footer from './Footer';
import { useState } from 'react';
import { MainContext } from './MainContext.js'


function App(props) {

  const [userName, setUserName] = useState("")



  return (
    <AuthProvider>
      <BrowserRouter>
        <DropdownNav />

        <div title="App" className="container" style={{ backgroundColor: "black" }}>
          {/* <MainContext.Provider> value = {{
            
          }}</MainContext.Provider> */}
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* <Route path="" element={<CreateReviewForm />} /> */}


            <Route path=":movieTitle-:movieId" element={<MovieDetail />} />
            <Route path=":genreName/:genreId" element={<GenreList />} />
            <Route path="SignupPage" element={<SignupPage />} />
            <Route path="Login" element={<Login />} />
            <Route path="myprofile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
