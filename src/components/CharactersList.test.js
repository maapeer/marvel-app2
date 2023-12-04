import { render } from '@testing-library/react';
import { CharactersList } from './CharactersList';

test('renders character links based on id', () => {
  const characters = [
    { id: "1009175", modified: "2014-01-13T14:48:32-0500" },
    { id: "1009220", modified: "2020-04-04T19:01:59-0400" },
    // Add more characters as needed
  ];

  const { getByTestId } = render(<CharactersList characters={characters} />);

  characters.forEach(character => {
    const linkElement = getByTestId(`character-link-${character.id}`);
    expect(linkElement).toBeInTheDocument();
  });
});