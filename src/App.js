import React from 'react';
import Portfolio from "./Components/Portfolio";
import Profile from "./Components/Profile";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import TopNav from "./Components/TopNav";
import BotNav from "./Components/BotNav";

    
const App = () => (
    
      <div>
      <TopNav />
      <Hero />
      
      <div className = "container">
      	<div className = "row">   
          <Profile />
        </div>
        <div className = "row">
          <Portfolio />
        </div>
        <div className = "row">
          <Contact />
         </div>
      </div>
    
      <BotNav />
      </div>
  );

export default App;
