import React from 'react'
import './../css/comp/header.css';
import './../css/small-comp/header.css';
import './../css/body.css';

export default function Header() {
    return (
         <div className="header">
            <div className="logo">Shree Manjunatha Driving School</div>
            <div  className="menu">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Contact Us</li>
                <li>Rules</li>
                </ul>
            </div>
         </div>

    );

}