//import { useEffect, useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';
//import ColorList from './components/ColorList';

function App() {
  // const [ name, setName] = useState('Matias');

  // useEffect( () => {
  //   console.log('useEffect called');
  //   document.title = `Welcome ${name}`
  // }, [ name])

  // console.log('App rendered!');

  return (
    //props = title={'New prop'}
    <div className="App">
      {/* {<p>Good Morning {name} </p>
      <button onClick={ () => setName('Joaquin') }>Change name</button>} */}
      <ColorList />
    </div>
  );
}

export default App;
