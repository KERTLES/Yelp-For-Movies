import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import Login from './Login';
import { AuthProvider } from "./token";
import ListReviewForMovie from './ListReviewForMovie'
import MovieDetail from './MovieDetail';

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DropdownNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="SignupPage" element={<SignupPage />} />
            <Route path="Login" element={<Login />} />
            <Route path="" element={<MovieDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
