import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import {FcHome,FcAbout} from 'react-icons/fc';
import { BsGrid1X2Fill} from 'react-icons/bs';
import {AiTwotoneSetting} from 'react-icons/ai'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Sidebar</h2>
      <ul>
      <li><Link to="/" className="link"><FcHome className="icon" /> Home</Link></li>
        <li><Link to="/Gridel" className="link"><BsGrid1X2Fill className="icon" /> Gridel</Link></li>
        <li><Link to="/about" className="link"><FcAbout className="icon" /> About</Link></li>
        <li><Link to="/setting" className="link"><AiTwotoneSetting className="icon" /> Setting</Link></li>
      
      </ul>
      
    </div>
  )
}

export default Sidebar
