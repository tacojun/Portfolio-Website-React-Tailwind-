import { render, screen, within } from '@testing-library/react';
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

    const portfolioCard = screen.getByRole('heading', { name: 'Portfolio Website' }).closest('article');
    expect(within(portfolioCard).getByRole('link', { name: /view repository/i })).toHaveAttribute(
      'href',
      'https://github.com/tacojun/Portfolio-Website-React-Tailwind-'
    );

    const chatbotCard = screen.getByRole('heading', { name: 'Flask Chatbot' }).closest('article');
    expect(within(chatbotCard).getByRole('link', { name: /view repository/i })).toHaveAttribute(
      'href',
      'https://github.com/tacojun/Flask-Chatbot'
    );
  });
});
