import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './userContext/userContext'
import { UserLogContextProvider } from './userContext/UserLogContext'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.scss'
import SignOut from './pages/Login/SignOut/SignOut'
import Clasificados from './pages/Clasificados/Clasificados'
import Loader from './components/Loader/Loader'

import Dev from './pages/Dev/Dev'
import LogScreen from './pages/Login/LogScreen/LogScreen'
import NewUserProyect from './pages/NewUserProyect/NewUserProyect'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserLogContextProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/LogScreen' element={<LogScreen />} />
              <Route path='/SignIn' element={<SignIn />} />
              <Route path='/SignUp' element={<SignUp />} />
              <Route path='/SignOut' element={<SignOut />} />
              <Route path='/UserProfile' element={<UserProfile />} />
              <Route path='/UserProfile/NewUserProyect' element={<NewUserProyect />} />
              <Route path='/Clasificados' element={<Clasificados /> } />
              <Route path='/Loader' element={<Loader />} />

              <Route path='/dev' element={<Dev /> } />

            </Routes>
          <Footer />
        </UserLogContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
