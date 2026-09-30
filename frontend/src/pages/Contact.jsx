import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'

function About() {
  console.log("App-komponenten laddas!");
  const [message1, setMessage1] = useState('message1')
  const [message2, setMessage2] = useState('message2')
  const [message3, setMessage3] = useState('message3')

useEffect(() => {
  const fetchData = async () => {
    fetch('http://127.0.0.1:5000/contact')
      .then(response => response.json())
      .then(data => {
        console.log("Contact information:", data);
        setMessage1(data.message1);
        setMessage2(data.message2);
        setMessage3(data.message3);
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
        <p>Contactinfo: <strong>{message1} </strong></p>
        <p><strong>{message2} </strong></p>
        <p><strong>{message3} </strong></p>
    </div>
  )
}


export default About
