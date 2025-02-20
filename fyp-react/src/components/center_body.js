
import React from 'react';
import './center_body.css'; 
import Tile from './tile';
import InfoDeck from './Info_deck';
import ChartComponent from './charts';
const CenterBody = () => {
  return (
    <div className="center-body-container">
      <div className="center-body-content">
        <p>Welcome to SprintCraft</p>
        <h1>An LLM Based Context <br /> Aware User Stories <br /> Generator</h1>
        <p>Improve Adapt <br /> and <br /> BE BETTER <br /> BE FASTER</p>
        
        <div className="tile-body-container">
          <Tile />
          <Tile />
          <Tile />
        </div>

        <div className="info-deck-container mt-8">
            <br></br>
            <h1>What is SprintCraft?</h1>
            <InfoDeck />
            <br></br>
            <div className="chart-section mt-8">
                <ChartComponent />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBody;
