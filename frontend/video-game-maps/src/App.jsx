import SearchMaps from './SearchMaps'
import Map from './Map.jsx'
import Login from './Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/savestate' element={<Login/>}></Route>
          <Route path='/:id' element={<Map/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
