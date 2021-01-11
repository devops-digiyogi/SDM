import React from 'react'
import './../css/comp/main3.css';
import './../css/small-comp/main3.css';
import './../css/body.css';
import t1 from './../assets/images/main3/T1.png';
import t2 from './../assets/images/main3/T2.png';
import t3 from './../assets/images/main3/T3.png';
import t4 from './../assets/images/main3/T4.png';

export default function Main3() {
    return (
        <div className="main3">
            <div className="main3header">
                <div className="main3headbox">
                    <div className="main3headtext1">Meet Our Instructors</div>
                    <div className="main3headtext2">Well experienced instructors to make you a better & confident driver quickly.</div>
                </div>
                <div className="main3three">03</div>
            </div>

            <div className="main3footbox">
                <div className="main3footinbox">
                    <img className="main3footimg" src={t1} alt="Person1" />
                    <div className="main3foothead">Kevin Rodrigues</div>
                    <div className="main3footbody">Instrctr, 13yrs of exp</div>
                </div>
                <div className="main3footinbox">
                    <img className="main3footimg" src={t2} alt="Person2" />
                    <div className="main3foothead">James Dan</div>
                    <div className="main3footbody">Instrctr, 15yrs of exp</div>
                </div>
                <div className="main3footinbox">
                    <img className="main3footimg" src={t3} alt="Person3" />
                    <div className="main3foothead">Mike Simo</div>
                    <div className="main3footbody">Instrctr, 8yrs of exp</div>
                </div>
                <div className="main3footinbox">
                    <img className="main3footimg" src={t4} alt="Person4" />
                    <div className="main3foothead">Caler Tim</div>
                    <div className="main3footbody">Instrctr, 6yrs of exp</div>
                </div>
            </div>
        </div>
    );
}