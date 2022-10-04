import { useEffect, useState } from "react";
import { getCharacters } from "../service";
import Charter from "./Charter";

const ChartList = () => {
  const [ chartList, setCharList] = useState([]);
  const [ image, setImage] = useState('No hay Imagen');
  const [ isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, []);
  
  return (
    <>
      <img src={image}/>
      <div className="page">
        
        { isLoading && <snap className='loading-text'>Loading</snap>}
        
        {
          chartList.map( charter => (
            <Charter
              name={charter.name}
              status={charter.status}
              species={charter.species}
              image={charter.image}
              setImage={setImage}
            />
          ))
        }
      </div>
      
    </>
  )

}

export default ChartList;