import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import CreateReviewForm from './CreateReviewForm';


function App(props) {
  return (
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="" element={<CreateReviewForm />} />
          {/* <Route path="manufacturers">
            <Route path="" element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route> */}
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;