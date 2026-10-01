import {useState, useEffect} from 'react'
import '../App.css'

function Upload() {
  console.log("Upload-komponenten laddas!");
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handlesubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setResponseMessage('Please select a file to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try{
        const response = await fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        setResponseMessage(data.message);
    } catch (error) {
        console.error('Error uploading file:', error);
        setResponseMessage('Error uploading file.');
    }
    };

    return (
        <div style={{ padding: '2rem', fontfamily: 'Arial, sans-serif' }}>
            <h1>Upload Image</h1>
            <form onSubmit={handlesubmit}>
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default Upload