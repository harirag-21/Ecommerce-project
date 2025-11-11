
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Collection2 from './Pages/Collection2';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Singlepage from './Pages/Singlepage';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';
import { ShopProvider } from './Components/Context/ShopContext';
import Delivery from './Pages/Delivery';
import Orders from './Pages/Orders'
function App() {
  return (
    <>
<ShopProvider>
  <BrowserRouter>
  <Header/>
  <ToastContainer/>
  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/collection' element={<Collection2/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/singlepage/:id' element={<Singlepage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/delivery' element={<Delivery/>}></Route>
         <Route path='/order' element={<Orders/>}></Route>
  </Routes>



 <Footer/>
  </BrowserRouter>
</ShopProvider>
</>
  );
}

export default App;
