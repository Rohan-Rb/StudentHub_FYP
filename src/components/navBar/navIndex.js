import React from 'react'
import { Nav1, Nav2, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navBarElements';

const Navbar = () => {
    return (
        <>
        <Nav1>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          Second Nav
        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav1>
      <Nav2>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
            <NavLink to='/events' activeStyle>
              Events
            </NavLink>
            <NavLink to='/jobs' activeStyle>
              Jobs
            </NavLink>
            <NavLink to='/accommodations' activeStyle>
              Accommodations
            </NavLink>
            <NavLink to='/discussion' activeStyle>
              Discussions
            </NavLink>
            <NavLink to='/book' activeStyle>
              Books
            </NavLink>
          </NavMenu>
      </Nav2>
    </>
    )
}

export default Navbar

