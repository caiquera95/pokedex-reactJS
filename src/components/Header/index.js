import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import logo from '../../assets/Pokebola2.png';
import pokedex from '../../assets/Pokedex.png';
import reactLogo from '../../assets/react.png';
import {BsBookmarkHeartFill} from 'react-icons/bs';

export default function Header() {
  return(
      <header>
          <Link to="/" >
              <img className='pokebola' src={logo}/>
              <img src={pokedex} border="0"/> 
              <img className='reactLogo' src={reactLogo} border="0"/>
            </Link>

            <Link to="/favorites"><BsBookmarkHeartFill/></Link>
      </header>
  )
}
