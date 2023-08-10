import './App.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState('Data not received from backend');
  const fetchData = async () => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_URL}`);
      setData(res.data?.message);
    } catch(err){
      console.log(err);
    }
    
  }
  useEffect(() => {

    fetchData();
  }, [])
  return (
    <div className="App">
      Client says:
      {data}
    </div>
  );
}

export default App;
