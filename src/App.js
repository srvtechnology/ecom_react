import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Reg from './admin/auth/Reg';
import RegLogin from './admin/auth/RegLogin';
import Login from './admin/auth/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <RegLogin />     
        <Routes>
         
        {/* <Route exact path='/' element={<RegLogin/>}/> */}
          <Route exact path='/admin/registration' element={<Reg/>}/>
          <Route exact path='/admin/login' element={<Login/>}/>
         
        </Routes>
  
    </BrowserRouter> 
    </div>
  );
}

export default App;
