import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import portfolio from "./components/Portfolio";
import profile from "./components/Profile";
import hero from "./components/Hero";
import contact from "./components/Contact";
import topNav from "./components/TopNav";
import botNav from "./components/BotNav";
import './App.css';
    
const App = () => (
    
      <div>
          <topNav />
          <hero />
          <profile />
          <portfolio />
          <contact />
          <botNav />
      </div>
    
  );

export default App;
