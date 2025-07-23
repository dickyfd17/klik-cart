import { render, screen } from '@testing-library/react';
import Deals from './Deals';

test('renders Deals component heading and a deal', () => {
  render(<Deals />);
  expect(screen.getByText(/Grab the best deal on/i)).toBeInTheDocument();
  expect(screen.getByText(/Galaxy S22 Ultra/i)).toBeInTheDocument();
});
