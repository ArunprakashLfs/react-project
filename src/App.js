import Data from './components/datas/data';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/navbarContainer/navbarContainer';
import { Outlet } from 'react-router-dom';
import Home from './components/home/home';
import Shop from './components/shop/shop';
import Signin from './components/signincomponents/signin';
import logo from './components/assets/logo192.png';

function App() {
  return(
    <Routes>
      <Route path={'/'}
      element={<><NavbarContainer logo={logo}/><Outlet/></>}
      >
        <Route index
        element={<Home Data={Data}/>}></Route>
        <Route path='/Shop'
        element={<Shop/>}></Route>
        <Route path='/signin'
        element={<Signin/>}></Route>
      </Route> 
    </Routes>
  )
}

export default App;
