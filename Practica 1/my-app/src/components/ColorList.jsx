import { Component, useState } from "react";
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

//Componente funcional
/* const ColorList = () => {
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

} */

//Componente de clase
/* class ColorList extends Component {

  constructor(props){
    super(props);
    this.state={
      colorList: [],
      isLoading: false
    }
  }

  render() {
    const cargarColores = () => {
      this.setState({isLoading: !isLoading});
      setTimeout(() => {
        this.setState({
          colorList: colors,
          isLoading: false
        })
      }, 3000);
    }

    const { colorList, isLoading } = this.state;

    return (
      <>
        <h1> {this.props.title} </h1>
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
} */

//ColorPicker Lifting state up
const ColorList = () => {
  const [ backgroundColor, setBackgroundColor ] = useState('white')
  const [ isLoading, setIsLoading ] = useState(false);

  const cargarColores = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
  return (
    <>
      <button onClick={ () => cargarColores ()}>Load Colors</button>
      {
        isLoading && <div>Loading...</div>
      } 
      <div className='page' style={{ backgroundColor }}>
        {
          colors.map(color => (
            <Color key={color.id} hex={color.hex} name={color.name} setBackgroundColor={setBackgroundColor} />
          ))
        }
      </div>
    </>
    
  )
}

export default ColorList;