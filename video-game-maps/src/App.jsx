import SearchMaps from './components/SearchMaps.jsx'
import SideBar from './components/SideBar.jsx'
import AuthPage from './auth/AuthPage.jsx'
import LogIn from './auth/LogIn.jsx'
import UserProgress from './components/UserProgress.jsx'
import MapProgress from './components/MapProgress.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMaps/>}/>
          <Route path='/:id' element={<SideBar/>}/>
          <Route path='/progress/:id' element={<MapProgress/>}/>
          <Route path='/auth/signup' element={<AuthPage />} />
          <Route path='/auth/login' element={<LogIn />} />
          <Route path='/profile' element={<UserProgress />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
  