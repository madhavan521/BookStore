import React from 'react';  
import { Link, useParams,useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2';  
const Home = ({ books, setBooks }) => { 
  const {_id}=useParams;
const navigate=useNavigate()
  const handleDelete = (id) => {  
    const updatedBooks = books.filter(item => item._id !== id);  
    setBooks(updatedBooks);  
     };   
    
     

     Swal.fire({  
      title: 'Please Login to Continue',  
      text: 'You need to log in to access this feature.',  
      icon: 'warning',  
      showCancelButton: false,  
      confirmButtonText: 'Go to Login',  
  }).then((result) => {  
      if (result.isConfirmed) {  
          navigate('/login');  
      }  
  }); 
  return (  
    <div > 
    <div className="container">
    <div className="row">
    <Link to='/create' className='btn createbutton'> 
     <button  width="90%"><strong>Click Here To Add Books</strong></button>
    </Link></div> </div>
    <div className="container-fluid">
    
      <div className="row">
  {books && books.map((book, index) => (  
    <div key={book._id || index} className="col-md-4  col-sm-12">  
          <div className="card my-3">
  <div className='d-flex justify-content-center align-tem-center my-3'>
      <img src={book.imageurl} alt={`${book.name} cover`} className="card-image " width="270px" height='150px'/>  

  </div>
      <div className="card-content ms-3">  
        <h5 className='card-title'>Name:{book.name}</h5>  
        <h6 className='card-author'>Author:{book.author}</h6>  
        <div className='row'>
          <div className="col-6">
           <h6 className='card-release-date'>Year:{book.releaseDate}</h6>  
</div>
          <div className="col-6">
<Link to={`/details/${book._id}`}><h6>View Details</h6></Link>
          </div>
        </div>
      </div> 
      <div className='row my-2'>
        <div className="col d-flex justify-content-start ms-1">
          <Link to={`/edit/${book._id}`}><button className='btn btn-warning' style={{height:"35px",paddingBottom:"15px"}}>Edit</button></Link>
        </div>
        <div className="col d-flex justify-content-end me-1">
            <button className='btn btn-danger btndelete' onClick={()=>handleDelete(book._id)} style={{height:"35px",paddingBottom:"15px"}}>Delete</button>
        </div>
      </div> 
    </div></div>  
  ))}  
</div>  
      </div>
    </div>

         )
        }
export default Home;




