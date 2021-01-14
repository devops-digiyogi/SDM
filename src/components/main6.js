import React from 'react'
import './../css/comp/main6.css';
import './../css/min-width-1850/main6.css';
import './../css/min-width-1250/main6.css';
import './../css/min-width-1000/main6.css';
import './../css/min-width-800/main6.css';
import './../css/min-width-700/main6.css';
import './../css/min-width-600/main6.css';
import './../css/body.css';

export default function Main3() {
    return (
        <div className="main6" id="main6">
            <div className="main6header">
                <div className="main6headbox">
                    <div className="main6headtext1">Get in touch with us</div>
                    <div className="main6headtext2">Got any queries regarding training, license or insurance !? Drop a message !</div>
                </div>
                <div className="main6six">06</div>
            </div>
            <div className="main6body">
                <div className="main6bodyleft">
                    <input type="text" className="main6textbox1" placeholder="Your Name" required/>
                    <input type="email" className="main6textbox1" placeholder="Your Email" required/>
                    <textarea className="main6textbox2" placeholder="Your message..."/>
                    <div className="main6button">Send Message</div>
                </div>
                <div className="main6bodyright">
                    <div className="main6rightimg">
                        <div className="main6righttext">AN AMAZING DRIVING EXPERIENCE AWAITS YOU !</div>
                        <div className="main6deco1"></div>
                        <div className="main6deco2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}