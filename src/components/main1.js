import React from 'react'
import './../css/comp/main1.css';
import './../css/body.css';

export default function Main1() {
    return (
        <div className="main1">
            <div className="main1box1">
                <div className="main1text1">Welcome to,</div>
                <div className="main1text2">Shree Manjunatha</div>
                <div className="main1text3">Driving School</div>
                <div className="main1buttonbox">
                    <div className="main1button1">Join Now</div>
                    <div className="main1button2">Learn More</div>
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