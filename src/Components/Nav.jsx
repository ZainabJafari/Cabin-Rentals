import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className='card'>
      <div className='navlink'>
      <img src={logo} alt="logo" />
       <div className='navlink-link'>

        <p className='home'>home</p>
        <p>home</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0C8.95161 0 0 8.88704 0 19.8557C0 30.8244 8.95161 39.7115 20 39.7115C31.0484 39.7115 40 30.8244 40 19.8557C40 8.88704 31.0484 0 20 0ZM20 7.68609C23.9194 7.68609 27.0968 10.8406 27.0968 14.7317C27.0968 18.6228 23.9194 21.7773 20 21.7773C16.0806 21.7773 12.9032 18.6228 12.9032 14.7317C12.9032 10.8406 16.0806 7.68609 20 7.68609ZM20 35.2279C15.2661 35.2279 11.0242 33.0982 8.18548 29.7676C9.70161 26.9333 12.6694 24.9798 16.129 24.9798C16.3226 24.9798 16.5161 25.0118 16.7016 25.0679C17.75 25.4041 18.8468 25.6203 20 25.6203C21.1532 25.6203 22.2581 25.4041 23.2984 25.0679C23.4839 25.0118 23.6774 24.9798 23.871 24.9798C27.3306 24.9798 30.2984 26.9333 31.8145 29.7676C28.9758 33.0982 24.7339 35.2279 20 35.2279Z" fill="#CBB26A" />
        </svg></p>
       </div>

      </div>
      <h1 className='h1'>Explore our luxury & </h1> <h1 className='h1'>romantic cabins for couples</h1>
     
      <div className='hero'>seee</div>

    </div>
  )
}

export default Nav