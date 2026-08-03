import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the search input', () => {
  // 1. render App
  render(<App />)
  // 2. find the input element
  const input = screen.getByRole('textbox')
  // 3. assert it's in the document
  expect(input).toBeInTheDocument()
})