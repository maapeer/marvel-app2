
import Titre from './component/titre'
import Compter from './component/nombre_total'
import liste from './component/liste'


const characters = require('./../characters.json')

Compter(characters)
liste(characters)
Titre()

function App(){
  <React.StrictMode>
    <Titre></Titre>
    <Compter></Compter>
    <liste></liste>
  </React.StrictMode>
  );
}
export default App;



