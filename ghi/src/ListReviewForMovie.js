import React, { useState } from "react"


function toString(num) {
    let numbers = Number(num).toLocaleString();
    return numbers;
  }
  
  class ListReviewForMovie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviews: [],
      };
    }
  
    async componentDidMount() {
      const url = "http://localhost:8090/api/reviews/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
  
        this.setState({ reviews: data["reviews"] });
      }
    }
  
  
  
  
  
      render() {
          return (
              <>
                  <h2>Sales History</h2>
                  <table className="table table-striped">
                      <thead>
                          <tr>
                              <th>Sales Person</th>
                              <th>Employee number</th>
                              <th>Purchaser Name</th>
                              <th>VIN</th>
                              <th>Sale Price</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.sales?.map(sale => {
                              return (
                                  <tr key={sale.vin.vin}>
                                      <td>{sale.sales_person.name}</td>
                                      <td>{sale.sales_person.employee_number}</td>
                                      <td>{sale.customer.name}</td>
                                      <td>{sale.vin.vin}</td>
  
                                      <td>{`$${toString(sale.price)}`}</td>
  
                                  </tr>
                              );
                          })}
                      </tbody>
                  </table>
              </>
          );
      }
  }







// function ListReviewForMovie() {
//     //declare new state variable 
//     // const [movieColumns, setMovieColumns] = useState([[],[],[],[],[]]) //(Array(5).fill([]))
//     const [reviews, setReviews] = useState([])


//     useEffect(() => {
//         (async () => {//get list of all reviews 
//             const reviewsResponse = await fetch('http://localhost:8090/api/reviews/')
//             if (reviewsResponse.ok) {
//                 const reviewsResponse = await reviewsResponse.json()
//                 setReviews(moviesData.results)
//             }
//         })()
//     }, [])


//     function handleReviewChange(e) {
//         setReviews(e.target.value)
//     }

//     return (
//         <div>
//             <p>You clicked {reviews} times</p>
//             <button onClick={() => setCount(reviews.push)}>
//                 Click me
//             </button>
//         </div>

       

       
//     )
// }

export default ListReviewForMovie