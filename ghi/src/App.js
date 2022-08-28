import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import Login from './Login';
import SignupPage from './SignupPage';



function App(props) {
  return (
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="manufacturers">
            <Route path="" element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route> */}
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
