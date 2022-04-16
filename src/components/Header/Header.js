import React from 'react';
import CustomLink from '../CustomLink/CoustomLink';
import './Header.css'



const Header = () => {
    return (
      
       <nav>
           <CustomLink to='/home'>Home</CustomLink>
           <CustomLink to='/review'>Review</CustomLink>
           <CustomLink to='/deshboard'>Deshboard</CustomLink>
           <CustomLink to='/blogs'>Blogs</CustomLink>
           <CustomLink to='/about'>About</CustomLink>
       </nav>
     
    );
};

export default Header;