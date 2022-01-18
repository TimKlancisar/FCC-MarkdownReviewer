import { useEffect, useRef, useState } from "react";

export const  Keyboard = ({ currentCode, changeCode }) => {
    const printKey = (key) => {
        if(key === 'Delete') {
            console.log()
            changeCode(currentCode.substring(0, currentCode.length-1))
        } else if(key === 'Return') {
            changeCode(currentCode + '\n');
        }  else if(key === 'Space') {
            changeCode(currentCode + ' ');
        } else {
        changeCode(currentCode + key);
        }
    }
    return (
    <div className="keyboard-base">
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>~</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>1</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>2</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>3</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>4</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>5</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>6</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>7</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>8</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>9</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>0</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>#</div>
        <div className="key delete" onClick={(e) => printKey(e.target.innerText)}>Delete</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>W</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>Q</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>E</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>R</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>T</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>Y</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>U</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>I</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>O</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>P</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>A</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>S</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>D</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>F</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>G</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>H</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>J</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>K</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>L</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>Z</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>X</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>C</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>V</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>B</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>N</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>M</div>
        <div className="key return" onClick={(e) => printKey(e.target.innerText)}>Return</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>-</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>+</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>(</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>)</div>        
        <div className="key space" onClick={(e) => printKey(e.target.innerText)}>Space</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>,</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>.</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>!</div>
        <div className="key" onClick={(e) => printKey(e.target.innerText)}>*</div>
    </div>
    );
}

export default Keyboard;