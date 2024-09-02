import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './image1.png';
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { CgLivePhoto } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import { IoMenu } from "react-icons/io5";


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="div">
          <nav className="nav">
            <div>
           <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="ul">
              {/* <li><a href="#"><FaYoutube className='one' /></a></li> */}
              <li><a href="#"></a><FaHome className='one'/></li>
              <li><a href="#"></a><SiYoutubeshorts className='one'/></li>
              <li><a href="#"></a><MdSubscriptions className='one'/></li>
              <li><a href="#"></a><FaHistory className='one'/></li>
              <li><a href="#"></a><MdPlaylistPlay className='one'/></li>
              <li><a href="#"></a><BiSolidLike className='one'/></li>
              <li><a href="#"></a><CgLivePhoto className='one'/></li>
              <li><a href="#"></a><IoSettings className='one'/></li>
              <li><a href="#"></a><MdReportProblem className='one'/></li>
              <li><a href="#"></a><MdReportProblem className='one'/></li>
            </ul>
            
          </nav>
        </div> 
      </header>
    );
  }
}

export default Header;
