import React, { useState} from 'react'
import './../css/comp/main5.css';
import './../css/body.css';

export default function Main5() {
  const [main5arrow, setImg1] = useState("main5arrow");
  const [up1, setUp1] = useState("up1");
  const [down1, setDown1] = useState("down1");

  const [main5arrow2, setImg2] = useState("main5arrow");
  const up2 = document.getElementById("up2");
  const down2=document.getElementById("down2");

  const [main5arrow3, setImg3] = useState("main5arrow");
  const up3 = document.getElementById("up3");
  const down3=document.getElementById("down3");

  const [main5arrow4, setImg4] = useState("main5arrow");
  const up4 = document.getElementById("up4");
  const down4=document.getElementById("down4");

  const [main5arrow5, setImg5] = useState("main5arrow");
  const up5 = document.getElementById("up5");
  const down5=document.getElementById("down5");

  const [main5arrow6, setImg6] = useState("main5arrow");
  const up6 = document.getElementById("up6");
  const down6=document.getElementById("down6");

  const [main5arrow7, setImg7] = useState("main5arrow");
  const up7 = document.getElementById("up7");
  const down7=document.getElementById("down7");

  const [main5arrow8, setImg8] = useState("main5arrow");
  const up8 = document.getElementById("up8");
  const down8=document.getElementById("down8");
function icon1() {

  if (down.style.display === "block") {
    down.style.display = "none";
    up.style.background="none";
    up.style.border="1px solid transparent";
    setImg1("main5arrow");
  } else{
    down.style.display = "block";
    up.style.background="#0099ff";
    up.style.border="1px solid #0099ff";
    setImg1("main5arrow1");
  }
}
function icon2() {}
function icon3() {}
function icon4() {}
function icon5() {}
function icon6() {}
function icon7() {}
function icon8() {}


    return (
        <div className="main5">
            <div className="main5header">
                <div className="main5headbox">
                    <div className="main5headtext1">Frequently asked questions</div>
                    <div className="main5headtext2">If you have got other queries, feel free to contact us.</div>
                </div>
                <div className="main5five">05</div>
            </div>
            <div className="main5body">
                <div className="main5bodyleft">
                    <div className="main5bodylefttabs" id="tabs">


                    <div className="main5tabs">
                        <div className={up1}>
                            <div className="main5tabicon" onClick={icon1}><div className={main5arrow} /></div>
                            <div className="main5tabtext">Do i have to do the payment in advance ?</div>
                        </div>
                        <div className="down" id="down">
                            <div className="main5tabtext1">Yes, you have to do the full payment in advance.</div>
                        </div>
                    </div>


                    <div className="main5tabs">
                        <div className="up" id="up2">
                            <div className="main5tabicon" onClick={icon2}><div className={main5arrow2} /></div>
                            <div className="main5tabtext">How many times do a student have to visit RTO office for driving licence?</div>
                        </div>
                        <div className="down" id="down2">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up3">
                            <div className="main5tabicon" onClick={icon3}><div className={main5arrow3} /></div>
                            <div className="main5tabtext">At what age can i start learning driving?</div>
                        </div>
                        <div className="down" id="down3">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up4">
                            <div className="main5tabicon" onClick={icon4}><div className={main5arrow4} /></div>
                            <div className="main5tabtext">Can shift the cars in between the courses?</div>
                        </div>
                        <div className="down" id="down4">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up5">
                            <div className="main5tabicon" onClick={icon5}><div className={main5arrow5} /></div>
                            <div className="main5tabtext">What if i cant come for class on a particular day?</div>
                        </div>
                        <div className="down" id="down5">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up6">
                            <div className="main5tabicon" onClick={icon6}><div className={main5arrow6} /></div>
                            <div className="main5tabtext">How much time will it take at RTO?</div>
                        </div>
                        <div className="down" id="down6">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up7">
                            <div className="main5tabicon" onClick={icon7}><div className={main5arrow7} /></div>
                            <div className="main5tabtext">What documents are required for the admission?</div>
                        </div>
                        <div className="down" id="down7">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up8">
                            <div className="main5tabicon" onClick={icon8}><div className={main5arrow8} /></div>
                            <div className="main5tabtext">What if I have to go out urgently for 10-15 days in between my course?</div>
                        </div>
                        <div className="down" id="down8">
                            <div className="main5tabtext1">Dummy</div>
                        </div>
                    </div>


                    </div>
                </div>
                <div className="main5bodyright">
                    <div className="main5rightimg1"></div>
                    <div className="main5rightimg2"></div>
                </div>
            </div>
        </div>
    );
}