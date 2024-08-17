import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './common/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import ContactPage from './pages/ContactPage';
import AwstorePage from './pages/AwstorePage';
import NewsPage from './pages/NewsPage';
import Footer from './common/Footer';
import { Terms } from './pages/Terms';

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
      <Route path = "NewsPage" element = {<NewsPage/>}/>
      <Route path = "Terms" element = {<Terms/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
