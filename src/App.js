import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';
import MyButton from './components/MyButton';
import MyImage from './components/MyImage';
import MyProducts from './components/Products';
import { useState } from "react";

function App() {

  const [count,setCount] = useState(0);
  function handleClick(){
      setCount(count+1);
      alert('MyButton Clicked ' + count);
  }

  return (
    <div className="App">
     <Greetings/>
     <Welcome/>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    <br/>
    <MyImage/>
    <MyProducts/>
    </div>
  );
}

export default App;
