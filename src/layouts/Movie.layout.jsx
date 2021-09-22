import React from 'react'
import MovieNavbar from '../components/Navbar/movieNavbar.component';

//components
import Navbar from "../components/Navbar/navbar.component";



export const MovieLayout = (props) => {
    return (
        <>
              <MovieNavbar />
        
            {props.children}
        
        </>
    );
};

export default MovieLayout;
