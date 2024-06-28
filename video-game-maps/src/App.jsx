import SearchMaps from './SearchMaps'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/:id' element={<SearchMaps/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
