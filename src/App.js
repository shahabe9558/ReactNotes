
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import Mainheader from './components/Mainheader';

function App() {
  return (
    <div className="">
      {/* Link and NavLink are differnt navlink add active class in the element  */}
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/catalogue'}>Catalogue</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/catalogue'}>Catalogue</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav> */}
      
      {/* creating a default route parent and child relation  */}
      <Routes>
        <Route path='/' element = {<Mainheader/>}>
          <Route index element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/catalogue' element = {<Catalogue/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='*' element = {<Notfound/>} />
        </Route>
       </Routes>

      {/* this is a simple way of defining route  */}
       {/* <Routes>
          <Route path='/' element = {<div>This is home</div>} />
          <Route path='/about' element = {<div>This is about</div>} />
          <Route path='/catalogue' element = {<div>This is catalogue</div>} />
          <Route path='/contact' element = {<div>This is contact</div>} />
       </Routes> */}
    </div>
  );
}
export default App;
