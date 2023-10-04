function Liste({characters}){
    const charactersList = characters.map((character,index)=>(
      <li key={index}>{character.name}</li>
    ));
    return(
      <div>
        <h3>List of characters:</h3>
        <ul>{charactersList}</ul>
      </div>
    )
  }
  export default Liste;