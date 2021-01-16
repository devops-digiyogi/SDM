import React from 'react'
import './../css/comp/main3.css';
import './../css/min-width-1850/main3.css';
import './../css/min-width-1250/main3.css';
import './../css/min-width-1000/main3.css';
import './../css/min-width-800/main3.css';
import './../css/min-width-700/main3.css';
import './../css/min-width-600/main3.css';
import './../css/min-width-500/main3.css';
import './../css/body.css';
import i1 from './../assets/images/main3/1.jpg';

export default function Main3() {
    return (
        <div className="main3" id="main3">
            <div className="main3header">
                <div className="main3headbox">
                    <div className="main3headtext1">Meet Our Instructors</div>
                    <div className="main3headtext2">Well experienced instructors to make you a better & confident driver quickly.</div>
                </div>
                <div className="main3three">03</div>
            </div>

            <div className="main3footbox">
            <div className="main2blueboxinner">
                <div className="main3footinbox">
                    <img className="main3footimg" src={i1} alt="Person1" />
                    <div className="main3foothead">Name</div>
                    <div className="main3footbody">Instrctr, 13yrs of exp</div>
                </div>
                <div className="main3footinbox">
                    <img className="main3footimg" src={i1} alt="Person2" />
                    <div className="main3foothead">Name</div>
                    <div className="main3footbody">Instrctr, 15yrs of exp</div>
                </div>
            </div>
            <div className="main2blueboxinner">
                <div className="main3footinbox">
                    <img className="main3footimg" src={i1} alt="Person3" />
                    <div className="main3foothead">Name</div>
                    <div className="main3footbody">Instrctr, 8yrs of exp</div>
                </div>
                <div className="main3footinbox">
                    <img className="main3footimg" src={i1} alt="Person4" />
                    <div className="main3foothead">Name</div>
                    <div className="main3footbody">Instrctr, 6yrs of exp</div>
                </div>
            </div>
            </div>
        </div>
    );
}