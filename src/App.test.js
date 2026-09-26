import { render, screen } from '@testing-library/react';
import App from './App';

describe('portfolio', () => {
  test('renders the main introduction and navigation', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /building useful things and learning in public/i
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  });

  test('links to the selected project repositories', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /view repository/i })).toHaveAttribute(
      'href',
      'https://github.com/tacojun/Portfolio-Website-React-Tailwind-'
    );

    const repositoryLinks = screen.getAllByRole('link', { name: /view repository/i });
    expect(repositoryLinks).toHaveLength(2);
    expect(repositoryLinks[1]).toHaveAttribute('href', 'https://github.com/tacojun/Flask-Chatbot');
  });
});
