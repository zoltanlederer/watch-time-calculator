import { useState } from 'react'

// value and onSearchChange come from App — SearchInput has no state of
// its own, since SearchResults will also need searchTerm to filter shows
function SearchInput({value, onSearchChange}) {
  return (
    <input
        type='text'
        value={value}
        onChange={onSearchChange}
      />
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  // separate function (not inline) so it's clear this is the one thing
  // passed down to SearchInput as onSearchChange
  const searchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <SearchInput value={searchTerm} onSearchChange={searchChange} />
    </>
  )
}

export default App
