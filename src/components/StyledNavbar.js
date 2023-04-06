import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

function StyledNavbar() {
    return(
        <nav className='navbar'>
            <NavLink to='/' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                }
            }}>About Me</NavLink>
            <NavLink to='/portfolio' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                }
            }}>Portfolio</NavLink>
            <NavLink to='/contact' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                }
            }}>Contact</NavLink>
            <NavLink to='/resume' style={({isActive, isPending})=>{
                return{
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                }
            }}>Resume</NavLink>
        </nav>
    )
};

export default StyledNavbar;