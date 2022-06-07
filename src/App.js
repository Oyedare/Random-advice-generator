import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
function App() {
  const [advice, setAdvice] = useState('')
  const [adviceClick, setAdviceClick] = useState(false)
  useEffect(() => {
    fetchAdvice()
  }, [adviceClick]);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res)=>{
      setAdvice(res.data.slip.advice);
      })
      .catch((err)=>{
      console.log(err);
      })
  }
  return (
    <div className="App">
      <div className="card">
        <h1>{advice}</h1>
        <button className='button' onClick={()=>{setAdviceClick(!adviceClick)}}>
          <span>Click for Advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
