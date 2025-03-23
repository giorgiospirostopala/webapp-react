import DefaultLayout from './layouts/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/books/:id" Component={FilmPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App