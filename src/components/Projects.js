import React from 'react';
import Profile from "../components/Profile";
import ProjectData from "../assets/project-data.json";
import Project from "../components/Project";
import "./Home.css";

  function Home() {
      return (
        <div className="App">
            {ProjectData.map((project) => ( // TODO: map bakeryData to BakeryItem components
                // <p>Bakery Item {index}</p> // replace with BakeryItem component
                <Project data={project}/>
                ))}
        </div>
      );
  }
  
  export default Home;