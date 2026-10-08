
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/About' element={<About />}> </Route>
      <Route path='/Womens'></Route>
      <Route path='/Mens'></Route>
      <Route path='/Cart'></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
