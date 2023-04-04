import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

function StyledNavbar() {
    return(
        <header className='navbar'>
            <NavLink to='/' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                }
            }}>About Me</NavLink>
            
            <NavLink to='/portfolio' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                }
            }}>Portfolio</NavLink>
            <NavLink to='/contact' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                }
            }}>Contact</NavLink>
            <NavLink to='/resume' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                }
            }}>Resume</NavLink>
        </header>
    )
};

export default StyledNavbar;