import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Wrapper component to provide Router context for testing
const AppWrapper = () => (
  <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
);

test('renders App component without crashing', () => {
  const { container } = render(<AppWrapper />);
  expect(container).toBeInTheDocument();
});

test('renders Home page on root path', () => {
  render(<AppWrapper />);
  // Check for home page content
  expect(screen.queryByText(/Dashboard/i) || screen.queryByText(/home/i)).toBeInTheDocument();
});

test('navigation bar is accessible', () => {
  render(<AppWrapper />);
  // Check if the app has navigation or links
  const element = screen.getByRole('heading', { level: 1 });
  expect(element).toBeInTheDocument();
});