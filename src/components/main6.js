import React from 'react'
import './../css/comp/main6.css';
import './../css/small-comp/main6.css';
import './../css/big-tab-v/main6.css';
import './../css/big-mob-h/main6.css';
import './../css/body.css';

export default function Main3() {
    return (
        <div className="main6">
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