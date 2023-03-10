import { Children, useState } from 'react';

import {Hex} from './Hex'
import {HexInput} from './Hex'
import {Options} from './Options'

export default function App() {

  const [dimensions, setDimensions] = useState({
    w: 1000,
    h: 1000
  });

  // initiate in the center off the screen
  const [offset, setOffset] = useState({
    x: window.innerWidth / 2 - dimensions.w / 2,
    y: window.innerHeight / 2 - dimensions.h / 2
  });

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    child.style.cursor = "grabbing"

    function handleDrag(e) {
      const x = e.clientX;
      const y = e.clientY;
      const offsetX = x - startX - dimensions.w/2;
      const offsetY = y - startY - dimensions.h/2;
      setOffset({ x: offsetX, y: offsetY });
    }

    function handleDragEnd() {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
      child.style.cursor = "grab"
    }
  };

  const HexWrapper = () => {

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

    return(
    <div className='wrapper'>
      {
        arr.map((item,idx) => <Hex key={idx}/>)
      }
      <HexInput></HexInput>
    </div>
    )
  }

  return (
    <div id="App">
      <h1 className='title'>Title</h1>
      <div id="child"
        style={{
          position: "relative",
          left: offset.x,
          top: offset.y,
          width: dimensions.w + "px",
          height: dimensions.h + "px"
        }}
        onMouseDown={handleDragStart}
      >
        <HexWrapper/>
      </div>
      <Options/>
    </div>
  );
}