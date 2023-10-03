
function Titre() {
  return (
    // Commentaire JSX
    <h1>Marvel Characters</h1>
  );
}

function Compter() {
  const characters = require('./characters.json')
  return (
    // Commentaire JSX
    <h2>`Number of characters: ${characters.length}`</h2>
  );
}

//const characters = require('./../characters.json')

function App() {
  return (
    <>
    {/*

  */}
    <Titre></Titre>
    <Compter></Compter>
    </>
  );
}

export default App;



