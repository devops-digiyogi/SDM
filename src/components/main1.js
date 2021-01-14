import React from 'react'
import './../css/comp/main1.css';
import './../css/min-width-1850/main1.css';
import './../css/min-width-1250/main1.css';
import './../css/min-width-1000/main1.css';
import './../css/min-width-800/main1.css';
import './../css/min-width-700/main1.css';
import './../css/body.css';

export default function Main1() {
function Join(){
var main4=document.getElementById("main4");
         main4.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
function Learn(){
var main5=document.getElementById("main5");
         main5.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
    return (
        <div className="main1" id="main1">
            <div className="main1box1">
                <div className="main1text1">Welcome to,</div>
                <div className="main1text2">Shree Manjunatha</div>
                <div className="main1text3">Driving School</div>
                <div className="main1buttonbox">
                    <div className="main1button1" onClick={Join}>Join Now</div>
                    <div className="main1button2" onClick={Learn}>Learn More</div>
                </div>
                <div className="main1vertext">BASE FOR YOUR <b>DRIVING </b> FUTURE</div>
            </div>
            <div className="main1box2">
                <div className="main1imgdiv"></div>
                <div className="main1dots"></div>
                <div className="main1box2last">
                    <div className="main1mouse"></div>
                    <div className="main1mousetext">scroll down</div>
                    <div className="main1one">01</div>
                </div>
            </div>
        </div>
    );
}