import { useState } from 'react'
import shows from './data/shows.json'

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

function SearchResults({shows, searchTerm, selectedShows, onAdd}) {
  // don't search until at least 3 characters are typed — avoids
  // showing huge unfiltered results after just 1-2 keystrokes
  if (searchTerm.length < 3) {
    return null
  }

  // compares both title AND year, since title alone isn't guaranteed
  // unique across the whole library (e.g. remakes, reused titles)
  const isAlreadySelected = (show) => {
    return selectedShows.some(selected => (
      selected.title === show.title && selected.year === show.year
    ))
  }

  // filters on two conditions: title match (case-insensitive) AND
  // not already selected, so added shows disappear from results
  const matches = shows.filter(show => (
    show.title.toLowerCase().includes(searchTerm.toLowerCase()) && !isAlreadySelected(show)
  ))

  // cap results to avoid a long list — 5 is enough to find a show
  // while typing without overwhelming the screen
  const display = matches.slice(0, 5)

  return (
    <div>
      {display.map(show => (
        <div key={`${show.title}-${show.year}`}>
          <span>{show.title}</span> 
          <button onClick={() => onAdd(show)}>Add</button>
        </div>
      ))}
    </div>
  )
}

// no filtering here — selectedShows is already the correct list to
// show; this component just displays it and reports removals upward
function SelectedList({selectedShows, onRemove}) {
  return (
    <div>
      {selectedShows.map(show => (
        <div key={`${show.title}-${show.year}`} >
          <span>{show.title}</span>
          <button onClick={() => onRemove(show)}>Remove</button>
        </div>  
      ))}
    </div>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedShows, setSelectedShows] = useState([])
  // separate function (not inline) so it's clear this is the one thing
  // passed down to SearchInput as onSearchChange
  const searchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleAdd = (show) => {
     setSelectedShows([...selectedShows, show])
  }

  // keeps every show EXCEPT the one being removed — the ! flips the
  // match condition, so filter keeps shows that do NOT match
  const handleRemove = (show) => {
    setSelectedShows(selectedShows.filter(selected => (
      !(selected.title === show.title && selected.year === show.year)
    )))
  }

  return (
    <>
      <SearchInput value={searchTerm} onSearchChange={searchChange} />
      <SearchResults
        shows={shows}
        searchTerm={searchTerm}
        selectedShows={selectedShows}
        onAdd={handleAdd}
      />
      <SelectedList selectedShows={selectedShows} onRemove={handleRemove} />
    </>
  )
}

export default App
