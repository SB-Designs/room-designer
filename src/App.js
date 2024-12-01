import React, { useState } from "react";
import styled from "styled-components";

const Canvas = styled.div`
  width: 80vw;
  height: 60vh;
  margin: 20px auto;
  border: 2px dashed #ccc;
  position: relative;
  overflow: hidden;
  background: #f8f8f8;
`;

const Item = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || "blue"};
  position: absolute;
  cursor: grab;
`;

function App() {
  const [furniture, setFurniture] = useState([
    { id: 1, x: 50, y: 50, color: "red" },
    { id: 2, x: 150, y: 150, color: "green" },
  ]);

  const handleDrag = (e, id) => {
    const newFurniture = furniture.map((item) =>
      item.id === id
        ? {
            ...item,
            x: e.clientX - e.target.offsetWidth / 2,
            y: e.clientY - e.target.offsetHeight / 2,
          }
        : item
    );
    setFurniture(newFurniture);
  };

  return (
    <Canvas>
      {furniture.map((item) => (
        <Item
          key={item.id}
          color={item.color}
          style={{ left: `${item.x}px`, top: `${item.y}px` }}
          onMouseDown={(e) => handleDrag(e, item.id)}
        />
      ))}
    </Canvas>
  );
}

export default App;
