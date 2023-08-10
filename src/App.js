import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}`);
    setData(res.data?.message);
  }
  useEffect(() => {
    
    fetchData();
  }, [])
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
