import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import Login from './Login';
import { AuthProvider } from "./token";
import LogoutButton from './LogoutButton'

function App(props) {
  return (
    <AuthProvider>
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="manufacturers">
            <Route path="" element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route> */}
        <Route path="SignupPage" element={<SignupPage/>}/>
        <Route path="Login" element={<Login/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

