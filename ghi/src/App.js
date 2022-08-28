import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
// import HomePage from './HomePage';
import ListReviewForMovie from './ListReviewForMovie'
// import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';





function App(props) {
  return (
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          
            <Route path="" element={<MovieDetail />} />
            
         
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
