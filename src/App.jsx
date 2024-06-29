import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import TeamsPage from './components/pages/TeamsPage';
import ContactPage from './components/pages/ContactPage';
import AwstorePage from './components/pages/AwstorePage';
import ServicesPage from './components/pages/ServicesPage';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route index element= {<HomePage/>}/>
      <Route path="aboutPage" element = {<AboutPage/>}/>
      <Route path= "teamsPage" element = {<TeamsPage/>}/>
      <Route path ="contactPage" element = {<ContactPage/>}/>
      <Route path = "awstore" element = {<AwstorePage/>}/>
      <Route path = "servicesPage" element = {<ServicesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
