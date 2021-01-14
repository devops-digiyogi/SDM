import React from 'react'
import './../css/comp/header.css';
import './../css/min-width-1850/header.css';
import './../css/min-width-1250/header.css';
import './../css/min-width-1000/header.css';
import './../css/min-width-800/header.css';
import './../css/min-width-700/header.css';
import './../css/body.css';

export default function Menu() {
function Home(){
var main1=document.getElementById("main1");
document.getElementById("menublock").style.display = "none";
         main1.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function About(){
var foot=document.getElementById("foot");
document.getElementById("menublock").style.display = "none";
         foot.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Feature(){
var main2=document.getElementById("main2");
document.getElementById("menublock").style.display = "none";
         main2.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Contact(){
var main6=document.getElementById("main6");
document.getElementById("menublock").style.display = "none";
         main6.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Rules(){
var main5=document.getElementById("main5");
document.getElementById("menublock").style.display = "none";
         main5.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
 return (
 <div className="menublock" id="menublock">
    <div className="fix1">
            <ul id="list">
                <li onClick={Home}>Home</li>
                <li onClick={About}>About Us</li>
                <li onClick={Feature}>Features</li>
                <li onClick={Contact}>Contact Us</li>
                <li onClick={Rules}>Rules</li>
            </ul>
    </div>
 </div>
 );
}