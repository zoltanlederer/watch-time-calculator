# Watch Time Calculator

React practice project — search my personal Plex TV library and 
calculate total binge-watch time for any combination of shows.

Built as a React fundamentals refresher after several years without 
hands-on practice. Practice project only — not part of my portfolio.

## What it does

- Search shows by title (min. 3 characters, case-insensitive)
- Add/remove shows from a running selection
- See total watch time (episodes × episode length) formatted as 
  days/hours/minutes

## What it's built with

- React (Vite), plain JavaScript — no TypeScript, kept deliberately 
  separate from concurrent TypeScript practice
- Local data only — a cleaned export of my Plex library (title, year, 
  episode count, episode length), no external API calls

## React concepts practiced

- `useState`, controlled inputs
- Lifting state up (state lives in `App`, passed down as props)
- Filtering and rendering lists (`.filter()`, `.map()`, `.reduce()`)
- Parent → child props, child → parent callback functions

## Related project

Followed by [`binge-watch-calculator`](https://github.com/zoltanlederer/binge-watch-calculator) 
— same concept, rebuilt against the TMDB public API with posters and 
a polished UI. That one's portfolio-ready; this one isn't.