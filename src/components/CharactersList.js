import { Link } from "react-router-dom";
import { format, isValid } from 'date-fns';

export function CharactersList({ characters = [] }) {

    // Fonction pour formater la date
    const formatModifiedDate = (modifiedDate) => {
        if (modifiedDate && isValid(new Date(modifiedDate))) {
            return format(new Date(modifiedDate), 'MMMM d, yyyy'); // 'MMMM d, yyyy' format in date-fns
        }
        return '';
    };

    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong> - <small>{formatModifiedDate(character.modified)}</small>
                    </Link>
                </li>
            ))}
        </ul>
    );
}





