import { useEffect, useState } from "react";
import Color from "./Color";
import { getColors} from "../service";

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
  const [ colorList, setColorList ] = useState([]);
  const [ backgroundColor, setBackgroundColor ] = useState('white')
  const [ isLoading, setIsLoading ] = useState(false);

 /*  useEffect ( () => {
    setIsLoading(true);
    const timeOut = setTimeout(() => {
      setColorList(colors);
      setIsLoading(false);
    },2000)
    return () => {
      clearTimeout(timeOut);
    }
  }, []) */

  useEffect(() => {
    setIsLoading(true);
    getColors()
      .then((data) => setColorList(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])
  
  return (
    <>
      <div className='page' style={{ backgroundColor }}>
        { isLoading && <snap className='loading-test'>Loading</snap>}
        {
          colorList.map(color => (
            <Color 
              key={color.id} 
              hex={color.hex} 
              name={color.name} 
              setBackgroundColor={setBackgroundColor} />
          ))
        }
      </div>
    </>
    
  )
}

export default ColorList;