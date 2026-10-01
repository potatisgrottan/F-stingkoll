import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from "react-router-dom";
import '../App.css'

function Home() {
  console.log("App-komponenten laddas!");
  const [message, setMessage] = useState('message')

useEffect(() => {
  const fetchData = async () => {
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => {
        console.log("Data från backend:", data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    };
    fetchData();
  }, []);
  return (
    <div style={{ padding: '2rem', fontfamily: 'Arial, sans-serif' }}>
        <h1>Fästingkoll</h1>
        <Link to="/upload">
          Analyze image for ticks
        </Link>
        <br />
        <Link to="/contact">
          Contact info
        </Link>
        <br />
        <Link to="/about">
          About page and developer
        </Link>

    </div>
  )
}


export default Home
