import React from 'react'
import './../css/comp/header.css';
import './../css/min-width-1850/header.css';
import './../css/min-width-1250/header.css';
import './../css/min-width-1000/header.css';
import './../css/min-width-800/header.css';
import './../css/min-width-700/header.css';
import './../css/min-width-600/header.css';
import './../css/body.css';

export default function Header() {
function Menu(){
 if (document.getElementById("menublock").style.display === "block") {
document.getElementById("menublock").style.display = "none";
}
else
document.getElementById("menublock").style.display = "block";
}
function Home(){
var main1=document.getElementById("main1");
         main1.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function About(){
var foot=document.getElementById("foot");
         foot.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Feature(){
var main2=document.getElementById("main2");
         main2.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Contact(){
var main6=document.getElementById("main6");
         main6.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Rules(){
var main5=document.getElementById("main5");
         main5.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
    return (
         <div className="header">
         <div className="fix">
            <div className="logo">Shree Manjunatha Driving School</div>
            <div className="logo1">SDM</div>
            <div className="menu">
                <ul>
                <li onClick={Home}>Home</li>
                <li onClick={About}>About Us</li>
                <li onClick={Feature}>Features</li>
                <li onClick={Contact}>Contact Us</li>
                <li onClick={Rules}>Rules</li>
                </ul>
            </div>
            <div className="menu1" onClick={Menu}/>
            </div>
         </div>

    );

}