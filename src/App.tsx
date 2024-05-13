
import './App.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/About/About';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import { AuthProvider } from './Contexts/AuthContext';

import FormCategories from './Components/Categorias/FormCategories/FormCtegories';
import ListCategories from './Components/Categorias/ListaCategorias/ListCategories';
import DeleteCategory from './Components/Categorias/DeleteCategory/DeleteCategory';





function App() {



  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categories" element={<ListCategories />} />
              <Route path="/registerCategory" element={<FormCategories />} />
              <Route path="/editCategory/:id" element={<FormCategories />} />
              <Route path="/deleteCategory/:id" element={<DeleteCategory />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App
