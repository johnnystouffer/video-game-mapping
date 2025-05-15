import SearchMaps from './SearchMaps'
import Map from './Map.jsx'
import AuthPage from './AuthPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/:id' element={<Map/>}/>
          <Route path='/login' element={<AuthPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
  