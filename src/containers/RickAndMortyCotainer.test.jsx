import React from 'react'
import { render, screen } from '@testing-library/react'
import RickAndMortyContainer from './RickAndMortyContainer'
import { MemoryRouter } from 'react-router-dom'

describe('RickAndMortyContainer', () => {
  it('should render a list of characters', async() => {
    render(<MemoryRouter><RickAndMortyContainer /></MemoryRouter>);
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});