import React, { useState } from 'react';


const Header = () => {
  const[islogin,setIslogin]=useState(false)
  function handleAuthentication(){
    setIslogin(prevState => !prevState)
  }
  return (
  <>
    <div className="container-fluid headerbg mb-3">
      <div className="row align-items-center">
        <div className="col-8">
          <span className="h2 text-light comname">
            <strong> <a href="/" className='text-decoration-none text-light'>Book Store</a></strong>
          </span>
        </div>  
         <div className='col-4 d-flex justify-content-end '>
         {/* <button className='btn btn-info' style={{width:"110px"}} onclick={handleAuthentication} > <a href="/login" >
          {islogin ? 'login':'logout'}
         </a></button> */}
         <i><img src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000" alt="" width="45px" height="45px" /></i>
        </div>

        
      </div>
    </div> 
         </>

  )
}

export default Header;
