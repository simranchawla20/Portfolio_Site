import React from "react";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import CreatedBy from './PortfolioContainer/Created By/CreatedBy'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><AboutMe /></section>
      <section id="resume"><Resume /></section>
      <section id="testi"><Testimonial /></section>
      <section id="contact"><ContactMe /></section>
      <section><CreatedBy /></section>

    </div>
  );
}

export default App;
