import React from 'react';
import ProjectData from "../assets/project-data.json";
import Project from "../components/Project";
import "./Home.css";

  function Home() {
      return (
        <div className="App">
            {ProjectData.map((project) => ( 
                <Project id={project['id']} data={project}/>
                ))}
        </div>
      );
  }
  
  export default Home;