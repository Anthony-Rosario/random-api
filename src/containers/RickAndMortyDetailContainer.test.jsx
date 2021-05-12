import React from 'react'
import { render, screen } from '@testing-library/react'
import RickAndMortyDetailContainer from './RickAndMortyDetailContainer'
import { MemoryRouter } from 'react-router-dom'

describe('RickAndMortyDetailContainer', () => {
  it('should link to a page with a single character and its relational data', async() => {
    render(<MemoryRouter><RickAndMortyDetailContainer match={{
      params: {
        id: 1
      }
    }}/></MemoryRouter>);
    const li = await screen.findByRole('list', { name: 'character' });

    expect(li).toMatchSnapshot();
  })
})