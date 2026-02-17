import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const homeElement = screen.getByRole('main');
  expect(homeElement).toBeInTheDocument();
});

test('renders Home page on root path', () => {
  render(<App />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test('App component renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});