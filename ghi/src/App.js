import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
import HomePage from './HomePage';
import MovieDetail from './MovieDetail';



function App(props) {
  return (
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="minions:-the-rise-of-gru" element={<MovieDetail />} />
          {/* <Route path="movie">
            <Route path="" element={<MovieDetail />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route> */}
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
