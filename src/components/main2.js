import React from 'react'
import './../css/comp/main2.css';
import './../css/small-comp/main2.css';
import './../css/big-tab-v/main2.css';
import './../css/body.css';

import dl from './../assets/images/main2/dl.svg';
import mul from './../assets/images/main2/mul.svg';
import ex from './../assets/images/main2/exp.svg';
import veh from './../assets/images/main2/veh.svg';
import ler from './../assets/images/main2/ler.svg';
import em from './../assets/images/main2/em.svg';
import i1 from './../assets/images/main2/icon1.svg';
import i2 from './../assets/images/main2/icon2.svg';
import i3 from './../assets/images/main2/icon3.svg';
import i4 from './../assets/images/main2/icon4.svg';

export default function Main2() {
    return (
        <div className="main2">
            <div className="main2head">
                <div className="main2headbox">
                    <div className="main2headtext1">Our features</div>
                    <div className="main2headtext2">To make you as a better driver, we have some great features to support.</div>
                </div>
                <div className="main2two">02</div>
            </div>
            <div className="main2featureboxmain">
                <div className="main2deco1"></div>
                <div className="main2featurebox">
                    <div className="main2innerbox1">
                        <div className="main2feature">
                            <img className="main2featureimg" src={dl} alt="Driving Licence" />
                            <div className="main2featuretext1">Driving Licence</div>
                            <div className="main2featuretext2">If you are applying only for licence or driving classes + licence both process wont take much time here.</div>
                        </div>
                        <div className="main2feature">
                            <img className="main2featureimg" src={mul} alt="Multiple Vehicle" />
                            <div className="main2featuretext1">Multiple Vehicle</div>
                            <div className="main2featuretext2">We have variety of cars and bikes to choose from when you come here for the class.</div>
                        </div>
                        <div className="main2feature">
                            <img className="main2featureimg" src={ex} alt="Experienced Instructors" />
                            <div className="main2featuretext1">Experienced Instructors</div>
                            <div className="main2featuretext2">We have great drivers as teachers to teach you safe and quality driving.</div>
                        </div>
                    </div>
                    <div className="main2innerbox2">
                        <div className="main2feature">
                            <img className="main2featureimg" src={veh} alt="Vehicle Insurance" />
                            <div className="main2featuretext1">Vehicle Insurance</div>
                            <div className="main2featuretext2">Vehicle insurance assistance for private cars, motorised two wheelers. </div>
                        </div>
                        <div className="main2feature">
                            <img className="main2featureimg" src={ler} alt="Learning Roads" />
                            <div className="main2featuretext1">Learning Roads</div>
                            <div className="main2featuretext2">Safe and different kind of roads to learn proper driving in varies conditions.</div>
                        </div>
                        <div className="main2feature">
                            <img className="main2featureimg" src={em} alt="Emission Test" />
                            <div className="main2featuretext1">Emission Test</div>
                            <div className="main2featuretext2">Quickly get your emission testing report for both two wheeler and four wheeler.</div>
                        </div>
                    </div>
                </div>
                <div className="main2deco2"></div>
            </div>
            <div className="main2blueboxout">
                <div className="main2blueboxin">
                    <img className="main2blueimg" src={i1} alt="icon1" />
                    <div className="main2bluehead">10000+</div>
                    <div className="main2bluebody">Graduated Drivers</div>
                </div>
                <div className="main2blueboxin">
                    <img className="main2blueimg" src={i2} alt="icon2" />
                    <div className="main2bluehead">5</div>
                    <div className="main2bluebody">Top Instructors</div>
                </div>
                <div className="main2blueboxin">
                    <img className="main2blueimg" src={i3} alt="icon3" />
                    <div className="main2bluehead">25 years</div>
                    <div className="main2bluebody">Leading in market</div>
                </div>
                <div className="main2blueboxin">
                    <img className="main2blueimg" src={i4} alt="icon4" />
                    <div className="main2bluehead">20+</div>
                    <div className="main2bluebody">Students currently</div>
                </div>
            </div>
        </div>
    );
}