import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import DisplayStyle from './componant/DisplayStyle';
import Code from './componant/Code';

function App() {


  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inOutSet, setInOutSet] = useState("");




  return (
    <React.Fragment>

      <div className='container'>

        {/* sliders for input */}
        <div className='slider-container'>
          <div>
            <label htmlFor="rdo1">
              <input type="radio" id="rdo1" name="radio" onClick={() => {
                setInOutSet("");
              }} defaultChecked />
              <span className="rdo"></span>
              <span>Outset</span>
            </label>

            <label htmlFor="rdo2">
              <input type="radio" id="rdo2" name="radio" onClick={() => {
                setInOutSet("inset ");
              }} />
              <span className="rdo"></span>
              <span>Inset</span>
            </label>
          </div>
          <div>
            <label htmlFor="X-direction">Offset X</label>
            <input type="range" name="X-direction" id="X-direction" min="-20" max="20" step="1" defaultValue="0" onChange={(e) => {
              setOffsetX(e.target.value);
            }}></input>
          </div>
          <div>
            <label htmlFor="Y-direction">Offset Y</label>
            <input type="range" name="Y-direction" id="Y-direction" min="-20" max="20" step="1" defaultValue="0" onChange={(e) => {
              setOffsetY(e.target.value);
            }}></input>
          </div>
          <div>
            <label htmlFor="blur">Blur</label>
            <input type="range" name="blur" id="blur" min="0" max="20" step="1" defaultValue="0" onChange={(e) => {
              setBlur(e.target.value);
            }}></input>
          </div>
          <div>
            <label htmlFor="spread">Spread</label>
            <input type="range" name="spread" id="spread" min="0" max="20" step="1" defaultValue="0" onChange={(e) => {
              setSpread(e.target.value);
            }}></input>
          </div>
          <div>
            <label htmlFor="colorpicker">Color Picker</label>
            <input type="color" name="colorpicker" id="colorpicker" onChange={(e) => {
              setColor(e.target.value);
            }}></input>
          </div>
        </div>

        {/* display styles */}
        <DisplayStyle
          color={color}
          offsetX={offsetX}
          offsetY={offsetY}
          blur={blur}
          spread={spread}
          set={inOutSet}
        >
        </DisplayStyle>

        {/* display code */}
        <Code
          color={color}
          offsetX={offsetX}
          offsetY={offsetY}
          blur={blur}
          spread={spread}
          set={inOutSet}
        >
        </Code>
      </div>

    </React.Fragment>
  );
}

export default App;
