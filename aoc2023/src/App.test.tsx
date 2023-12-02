import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock('./components/Calibration'); // Mock the Calibration component



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/advent of code/i);
  expect(linkElement).toBeInTheDocument();
});


