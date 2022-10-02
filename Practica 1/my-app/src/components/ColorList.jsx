import { useState } from "react";
import Color from "./Color";

 const colors = [
    {
        id: 1,
        name: 'azul',
        hex: '#0496FF'
    },
    {
        id: 2,
        name: 'naranja',
        hex: '#F8BD7F'
    },
    {
        id: 3,
        name: 'amarillo',
        hex: '#FFFC31'
    }
];

const ColorList = () => {

  const [ colorList, setColorList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const cargarColores = () => {
    setIsLoading(true);
    setTimeout(() => {
      setColorList(colors);
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <button onClick={() => cargarColores()}> Click Me </button>
      { isLoading && <h1>Loading...</h1> }
      <div>
        {
          colorList.map(color => 
            <Color 
              name={color.name}
              hex={color.hex}
              key={color.id}
              id={color.id}
            />
          )
        }
      </div>
    </>
  )
  
}

export default ColorList;