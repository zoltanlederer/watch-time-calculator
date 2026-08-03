import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// Sanity check that the whole setup (Jest, RTL, jsdom) works end to end,
// before testing any real behavior
test('renders the search input', () => {
  render(<App />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

// Confirms the 3-character search threshold works and that typing a real
// title from shows.json surfaces a matching result on screen
test('shows a matching result when typing', async () => {
  render(<App />)
  const input = screen.getByRole('textbox')
  await userEvent.type(input, 'The Big Bang Theory')
  const result = screen.getByText('The Big Bang Theory')
  expect(result).toBeInTheDocument()
})