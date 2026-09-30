import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'

function About() {
  console.log("App-komponenten laddas!");
  const [message, setMessage] = useState('message')

useEffect(() => {
  const fetchData = async () => {
    fetch('http://127.0.0.1:5000/about')
      .then(response => response.json())
      .then(data => {
        console.log("About page and developer:", data);
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
        <p>About page and developer: <strong>{message} </strong></p>
    </div>
  )
}


export default About
