import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UrlRegister from './pages/urlPages/UrlRegister'
import ShortUrlPage from './pages/urlPages/ShortUrlPage'
import Register from './pages/userPages/Register'
import Login from './pages/userPages/Login'
import Verification from './pages/userPages/Verification'
import Info from './pages/userPages/Info'
import PrivateRoute from './pages/userPages/PrivateRoute'
import ForgotPassword from './pages/userPages/ForgotPassword'
import InfoForForgotPage from './pages/userPages/InfoForForgotPage'
import VerificationForPassword from './pages/userPages/VerificationForPassword';
import SuccessPage from './pages/userPages/SuccessPage'
import UpdatePassword from './pages/userPages/UpdatePassword'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index path='/urlregister' element={ <PrivateRoute element={<UrlRegister/>}/>}/>

      <Route  path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shortUrl/:urlId' element={<ShortUrlPage/>}/>
      <Route path='/verify' element={<Verification/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/forgotInfo' element={<InfoForForgotPage/>}/>
      <Route path='/verifyPassword' element={<VerificationForPassword/>}/>
      <Route path='/success' element={<SuccessPage/>}/>
      <Route path='/updatePassword' element={<UpdatePassword/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
