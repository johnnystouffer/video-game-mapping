import SearchMaps from './SearchMaps'
import Test from './Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/:id' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
