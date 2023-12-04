import { format, isValid } from 'date-fns';

function CharacterDetail({ character = {} }) {
    const formatModifiedDate = (modifiedDate) => {
        if (modifiedDate && isValid(new Date(modifiedDate))) {
            return format(new Date(modifiedDate), 'MMMM d, yyyy'); // 'MMMM d, yyyy' format in date-fns
        }
        return '';
    };

    return (
        <div>
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <strong>{formatModifiedDate(character.modified)}</strong>
        </div>
    );
}

export default CharacterDetail;
