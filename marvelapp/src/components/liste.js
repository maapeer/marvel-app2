import React, { useState } from 'react';
import charactersData from '../characters.json'; // Importez le fichier JSON ici

function Liste() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const charactersList = charactersData.map((character, index) => (
    <li
      key={index}
      onClick={() => handleCharacterClick(character)}
      style={{ cursor: 'pointer' }}
    >
      {character.name}
    </li>
  ));

  return (
    <div>
      <h3>List of characters:</h3>
      <ul>
        {charactersList}
      </ul>
      {selectedCharacter && (
        <div>
          <h4>Character Information:</h4>
          <p>Name: {selectedCharacter.name}</p>
          <p>Description: {selectedCharacter.description || 'N/A'}</p>
          {selectedCharacter.thumbnail && (
            <img
              src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              alt={selectedCharacter.name}
              style={{ maxWidth: '100px' }}
            />
          )}
          {/* Ajoutez d'autres informations du personnage ici */}
        </div>
      )}
    </div>
  );
}

export default Liste;
