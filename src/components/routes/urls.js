import React from "react";
import { Link } from "react-router-dom";
import '../base_template/base.css';


export default function NavigationRoutes() {
  return (
          <nav className='navigation'> 
          <Link to="/">About</Link><br></br>
          <Link to="/experience">Experience</Link><br></br>
          <Link to="/education">Education</Link><br></br>
          <Link to="/projects">Projects</Link><br></br>       
          <Link to="/skills">Skills</Link><br></br>       
          <Link to="/contact">Contact</Link><br></br>       
          <Link to="/blog">Blog</Link><br></br>
          </nav>
  );
}
