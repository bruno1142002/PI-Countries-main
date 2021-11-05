import { render, screen } from '@testing-library/react';
import LandingPage  from './components/LandingPage/LandingPage'
import { MemoryRouter } from 'react-router-dom'

test('Rederiza texto de bienvenida', () => {
  render(<LandingPage />, { wrapper: MemoryRouter })

  expect(screen.getByText('Welcome To Countries')).toBeInTheDocument()
})

test('Debe tener una Imagen', () => {
  render(<LandingPage />, { wrapper: MemoryRouter })

  expect(screen.getAllByRole('img')).toHaveLength(1)
})
