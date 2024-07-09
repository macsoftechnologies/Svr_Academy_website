import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from "./pages/Courses";
import Speciality from "./pages/Speciality"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/speciality' element={<Speciality />} />
          


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
