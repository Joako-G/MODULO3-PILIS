import { Component } from "react";
import Color from "./Color";

const colors = [
    {
        id: 1,
        name: 'azul',
        hex: '#0496FF'
    },
    {
        id: 2,
        name: 'anaranjado',
        hex: '#F8BD7F'
    },
    {
        id: 3,
        name: 'amarillo',
        hex: '#FFFC31'
    }
];

class ColorList extends Component {

  constructor() {
    super()

    this.state = {
      colorList: [],
      isLoading: false,
    }
  }

  //const [ colorList, setColorList] = useState(colors)
  //const [colorList, setColorList] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

    render() {

      const cargarColores = () => {
        this.setState({isLoading: !isLoading})
        setTimeout(() => {
          this.setState({
            colorList: colors,
            isLoading: false
          })
          //setColorList(colors);
          //setIsLoading(false);
        }, 3000)
      }

      const {colorList, isLoading} = this.state

      return (
        <>
          <button onClick={() => cargarColores()}>Click me</button>
          {isLoading && <h1>Loading</h1> }
          <div>
            {
              colorList.map( color => 
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
      );
    }
}

export default ColorList;