import React from 'react';
import Profile from "../components/Profile";
import ProjectData from "../assets/project-data.json";
import Projects from "../components/Projects";
import "./Home.css";

  function Home() {
      return (
        <div className="App">
            <Profile></Profile>
            <Profile></Profile>
          </div>
      );
  }
  
  export default Home;