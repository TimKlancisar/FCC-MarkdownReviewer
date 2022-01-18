import { useEffect, useRef, useState } from 'react';
import CodeArea from './components/CodeArea';
import DisplayArea from './components/DisplayArea';
import Keyboard from './components/Keyboard';
import { FaPowerOff } from "react-icons/fa";

function App() {
  const blackScreen = useRef(null)
  const [currentCode, setCurrentCode] = useState('# Main header\n# Sub-header\n this is a [link](www.example.com) and this is `inline code`\n> Here you can see a blockquote with some **bold text**.\n<img src="https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png"/>');
  const [turnedOn, setTurnedOn] = useState(false)
  const hadnleTurnOn = (el) => {
    el.target.style.color = turnedOn ? "rgb(255, 0, 0)" : "rgb(173, 255, 47)";
    setTurnedOn(!turnedOn);
  }
  useEffect(()=>{
    blackScreen.current.style.visibility = turnedOn ? 'hidden' : 'visible';
    blackScreen.current.style.opacity = turnedOn ? '0' : '1';
  },[turnedOn])
  return (
    <main className='universe'>
      <div className='monitor'>
        <div className='screen'>
          <div className='black-screen' ref={blackScreen}></div>
          <CodeArea currentCode={currentCode} changeCode={setCurrentCode} />
          <DisplayArea currentCode={currentCode} />
        </div>
        <button onClick={(e) => hadnleTurnOn(e)} id='turn-on'><FaPowerOff /></button>
      </div>
      <Keyboard currentCode={currentCode} changeCode={setCurrentCode} />
    </main>
  );
}

export default App;
