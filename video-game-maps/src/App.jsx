import SearchMaps from './components/SearchMaps.jsx'
import Map from './components/Map.jsx'
import AuthPage from './auth/AuthPage.jsx'
import LogIn from './auth/LogIn.jsx'
import UserProgress from './components/UserProgress.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/:id' element={<Map/>}/>
          <Route path='/auth/signup' element={<AuthPage />} />
          <Route path='/auth/login' element={<LogIn />} />
          <Route path='/progress' element={<UserProgress />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
  