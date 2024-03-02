import './App.css';
import NavBar from './Components/Navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainPart from './Components/MainPart';


function Home() {
  
    const { pagina } = useParams()
    useEffect(() => {
         

    }, [pagina])


// ver como hacer el background
  return(
    <div className='App' >
      <div>
        <NavBar/>
      </div>
      <div>
        <MainPart></MainPart>
      </div>
    </div>
  )
}

export default Home;
