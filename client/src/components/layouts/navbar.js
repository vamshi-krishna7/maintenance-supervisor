import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

    const [sideBar, setSidebar] = useState(false);


    const onClick = () => {
        setSidebar(!sideBar)
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <h1 className="company-logo"><Link to='/'>Maintenance Supervisor</Link></h1>
                    <button type="button" className="nav-btn" onClick = {onClick}>
                        <BiMenu className="nav-icon"/>
                    </button>
                </div>
                <ul className={sideBar ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link to="/" >All Logs</Link>
                    </li>
                    <li>
                        <Link to="/addLog" >Add Log</Link>
                    </li>
                    <li>
                        <Link to="/addTech">Add Tech</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar;












        //     <nav className="navbar">
        //     <div className="nav-center">
        //         <div className="nav-header">
        //             <h1 className="company-logo"><Link to='/'>Maintenance Supervisor</Link></h1>
        //             <div className="toggle-icon">
        //                 <BiMenu onClick={onClick} />
        //             </div>
        //         </div>
                
        //         <ul className={`nav-link-items ${sideBar ? 'sidebar' : null }`}>
        //             <li> 
        //                 <Link to="/" >All Logs</Link>
        //             </li>
        //             <li>
        //                 <Link to="/addLog" >Add Log</Link>
        //             </li>
        //             <li>
        //                 <Link to="/addTech">Add Tech</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>