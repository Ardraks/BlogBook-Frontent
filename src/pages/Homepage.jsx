import React, { useEffect } from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import { useNavigate } from "react-router-dom";
import "./Homepage.css";


const Homepage = () => {
  
const navigate = useNavigate();


  return (
    <div>
    <Topbar />
    <Header />
    <div className="home">
      <Posts />
      <Sidebar />
    </div>
  </div>
  )
}

export default Homepage

