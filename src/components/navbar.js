import React from 'react'
import '../css/navbar.css'

const navbar = () => {
  return (
      <div className='container'>
        <div className='wrapper'>
          <div className='logo'>
            <img src='https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg'></img>
          </div>
          <div className='login'>
            <h4>Log in</h4>
          </div>
        </div>
      </div>
  )
}

export default navbar