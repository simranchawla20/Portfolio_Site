import React from "react";
import { Link } from 'react-scroll';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="top-nav">
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              HOME
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="resume">
              RESUME
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="testi">
              CERTIFICATIONS  
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
