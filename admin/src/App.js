import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Component/Login';
import Signup from './Component/Signup';
import Two from './pages/Two';
import Upload from './Component/Upload';
import List from './Component/List';

function App() {
return (
<div>

<BrowserRouter>


<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/home' element={<Two/>}/>
<Route path='/addproduct' element={<Upload/>}/>
<Route path='/list' element={<List/>}/>
</Routes>



</BrowserRouter>
</div>


);
}
export default App;