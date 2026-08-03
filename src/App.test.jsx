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

// Once a show is added, it should disappear from search results and
// appear in the selected list — checking for the Remove button confirms
// it made it into SelectedList (Remove only exists there)
test('clicking Add moves the show to selected list', async () =>{
    render(<App />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'The Big Bang Theory')

    const addButton = screen.getByRole('button', { name: 'Add' })
    await userEvent.click(addButton)

    const removeButton = screen.getByRole('button', { name: 'Remove' })
    expect(removeButton).toBeInTheDocument()
})

