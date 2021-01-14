import React from 'react'
import './../css/comp/footer.css';
import './../css/min-width-1850/footer.css';
import './../css/min-width-1250/footer.css';
import './../css/min-width-1000/footer.css';
import './../css/min-width-800/footer.css';
import './../css/min-width-700/footer.css';
import './../css/body.css';

export default function Main3() {
    return (
        <div className="foot" id="foot">
            <div className="footheader">
                <div className="footheadbox">
                    <div className="footheadtext1">About Us</div>
                </div>
            </div>
            <div className="footbody">
                <div className="footbodycont">
                    <div className="footbodycont1">
                        <div className="footconthead">
                        About the school
                        </div>
                        <div className="footcontbody">
                        20 YEARS OF EXPERIENCE BEHIND THE WHEELS WE ARE VERY PROUD TO SAY THAT WE ARE THE FIRST TO START A DRIVING SCHOOL IN A PLACE CALLED UJIRE. OUR MAIN AIM IS TO MAKE THE PEOPLE EDUCATED IN THE FIELD OF DRIVING.
                        </div>
                    </div>
                    <div className="footbodycont1">
                        <div className="footconthead">
                        Contact info
                        </div>
                        <div className="footcontbody">
                        ADDRESS:<br/>
                        ARIPPADI MUTT COMPLEX, 'B' BLOCK, NEAR SDM PU COLLEGE, UJIRE.<br/>
                        PHONE:<br/>
                        +91 - 9880937397<br/>
                        +91 - 9611392179<br/>
                        EMAIL:<br/>
                        mdsujire@gmail.com
                        </div>
                    </div>
                    <div className="footbodycont1">
                        <div className="footconthead">
                        Office Hours
                        </div>
                        <div className="footcontbody1">
                        <div className="footday">
                            MONDAY<br/>
                            TUESDAY<br/>
                            WEDNESDAY<br/>
                            THURSDAY<br/>
                            FRIDAY<br/>
                            SATURDAY<br/>
                            SUNDAY<br/>
                        </div>
                        <div className="foothours">
                            8AM - 6PM<br/>
                            8AM - 6PM<br/>
                            8AM - 6PM<br/>
                            8AM - 6PM<br/>
                            8AM - 6PM<br/>
                            8AM - 6PM<br/>
                            CLOSED<br/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footcopyright">Copyright © Manjunatha Driving School. All Right Received. Designed by DigiYogi Technologies</div>
            </div>
        </div>
    );
}