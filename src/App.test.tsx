import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

describe('App', () => {
  it('renders app logo', () => {
    render(<WrappedApp />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });

  it('Renders Track Page for path /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Track');
  });

  it('Renders Track Page for path /track', () => {
    render(
      <MemoryRouter initialEntries={['/track']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Track');
  });

  it('Renders Dashboard Page for path /dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Dashboard');
  });

  it('Renders Not Implemented Page for path /not-implemented', () => {
    render(
      <MemoryRouter initialEntries={['/not-implemented']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Implemented');
  });
});
