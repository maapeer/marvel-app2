import { render, screen } from '@testing-library/react';
import AboutPages from './AboutPages';

test('renders About Us message', () => {
  // when

  // then
  render(<AboutPages />);

  // expect the document title to be "About | Marvel App"
  expect(document.title).toEqual("About | Marvel App");

  // expect the heading and the paragraph to be in the document
  const h2Element = screen.getByRole('heading', { level: 2, name: "About Us" });
  const pElement = screen.getByText('We are a team of Marvel fans who love to create awesome apps!');

  expect(h2Element).toBeInTheDocument();
  expect(pElement).toBeInTheDocument();
});