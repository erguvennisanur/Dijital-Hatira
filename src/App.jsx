'use client'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/page'
import AboutPage from './pages/about/page'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductPage from './pages/products/page'
import Ataturk from './pages/Ata/page'
import ContactPage from './pages/contact/page'
import Login from './pages/login/page'
import SignIn from './pages/signIn/page'
function App() {
  return (
    <div className='flex flex-col px-5 bg-slate-50'>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/products'
          element={<ProductPage />}
        />
        <Route
          path='/Ataturk'
          element={<Ataturk />}
        />
        <Route
          path='/contact'
          element={<ContactPage />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signIn'
          element={<SignIn />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
