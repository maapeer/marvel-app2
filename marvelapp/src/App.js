import Titre from './component/titre';
import Compter from './component/nombre_total';
import Liste from './component/liste';


const characters = require('./characters.json')

function App(){
  return(
  <>
    <Titre></Titre>
    <Compter characters={characters}></Compter>
    <Liste characters={characters}></Liste>
  </>
  );
}
export default App;



