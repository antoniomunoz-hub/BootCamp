import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModakBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';


function App() {
  const baseUrl = "http://localhost:8000/apitutoriales/";
  const [data, setData] = useState([]);

  const peticionGet = async()=>{
    await axios.get(baseUrl)
    .then(response=>{
        console.log(response.data);
    })
  }

  useEffect (()=>{
    peticionGet();
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
