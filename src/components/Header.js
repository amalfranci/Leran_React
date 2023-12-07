import React from "react";
import './Header.css';

const Header = (props) => {

  const {
   OnMenuclick
 }=props

    return (
          <div className='app-header' >
            <h1 className='header_title'>REACT HOME</h1>
            <div className="spanitems">
          <span onClick={() => {
            OnMenuclick('home')
      }}>Home</span>
          <span onClick={() => {
            OnMenuclick('Usage')
      }}>Counter</span>
          <span onClick={() => {
            OnMenuclick('Setting')
      }}>User Data</span>
          <span onClick={() => {
            
            OnMenuclick('Logout')
                }}>  Logout</span>
                </div>
   



    </div>



    )
}

export default Header

