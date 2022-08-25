
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownNav from './DropdownNav';
// import HomePage from './HomePage';
import ListReviewForMovie from './ListReviewForMovie'



function App(props) {
  return (
    <BrowserRouter>
      <DropdownNav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          
            <Route path="" element={<ListReviewForMovie />} />
            
         
        </Routes> 
      </div>
    </BrowserRouter>
  )
}
export default App

