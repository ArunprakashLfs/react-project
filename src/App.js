import Data from './components/datas/data';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarContainer from './components/navbarContainer/navbarContainer';
import { Outlet } from 'react-router-dom';
import Home from './components/home/home';
import Shop from './components/shop/shop';

function App() {
  return(
    <Routes>
      <Route path={'/'}
      element={<><NavbarContainer /><Outlet/></>}
      >
        <Route path='/Home'
        element={<Home Data={Data}/>}></Route>
        <Route path='/Shop'
        element={<Shop/>}></Route>
        <Route path='/signin-page'
        element={<signin/>}></Route>
      </Route> 
    </Routes>
  )
}

export default App;
