import React from 'react'
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'


const Header = () => {
  return (
    <header className="header">

      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>



      <nav className="header__nav">

        <ul className="header__list">

                <li className="header__item">
                  <NavLink className={({isActive}) => isActive ? 'active-link': ''} to="/login">
                  <h2><i className="fa-regular fa-user"></i></h2>
                  </NavLink>
                </li>
                
                <li className="header__item">
                  <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/purchases">
                    <h2><i className="fa-solid fa-basket-shopping"></i></h2>
                  </NavLink>
                </li>

                <li className="header__item">
                <NavLink className={({isActive}) => isActive ? 'active-link': ''}to="/cart">
                    <h2><i className="fa-solid fa-cart-plus"></i></h2>
                </NavLink>
                </li>

        </ul>

      </nav>
    </header>

  )
}

export default Header