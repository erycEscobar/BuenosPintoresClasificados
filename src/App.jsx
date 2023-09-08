import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './userContext/userContext'
import { UserLogContextProvider } from './userContext/UserLogContext'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import './App.scss'
import Dev from './pages/Dev/Dev'

const SignIn = lazy(() => import("./pages/Login/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/Login/SignUp/SignUp"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const SignOut = lazy(() => import("./pages/Login/SignOut/SignOut")); 
const Clasificados = lazy(() => import("./pages/Clasificados/Clasificados"));
const LogScreen = lazy(() => import("./pages/Login/LogScreen/LogScreen"));
const NewUserProyect = lazy(() => import("./pages/NewUserProyect/NewUserProyect"));

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserLogContextProvider>
          <NavBar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/LogScreen' element={<LogScreen />} />
                <Route path='/SignIn' element={<SignIn />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/SignOut' element={<SignOut />} />
                <Route path='/UserProfile/*' element={<UserProfile />} />
                <Route path='/UserProfile/NewUserProyect' element={<NewUserProyect />} />
                <Route path='/Clasificados' element={<Clasificados /> } />
                <Route path='/Loader' element={<Loader />} />
                <Route path='/dev' element={<Dev />} />
              </Routes>
            </Suspense>
          <Footer />
        </UserLogContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
