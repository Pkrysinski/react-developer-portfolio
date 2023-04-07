import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

function StyledNavbar() {
    return(
        <nav className='navbar'>
            <NavLink to='/' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    padding: 10
                }
            }}>About</NavLink>
            <NavLink to='/portfolio' style={({isActive, isPending}) =>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    padding: 10
                }
            }}>Portfolio</NavLink>
            <NavLink to='/contact' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    padding: 10
                }
            }}>Contact</NavLink>
            <NavLink to='/resume' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "teal" : "white",
                    textDecoration: 'none',
                    padding: 10
                }
            }}>Resume</NavLink>
        </nav>
    )
};

export default StyledNavbar;