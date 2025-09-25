
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Collection2 from './Pages/Collection2';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Subscribe from './Components/Subscribe';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Singlepage from './Pages/Singlepage';
function App() {
  return (
  <BrowserRouter>
  <Header/>
  
  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/collection' element={<Collection2/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/singlepage' element={<Singlepage/>}></Route>
  </Routes>

 <Footer/>
  </BrowserRouter>
  
  );
}

export default App;
