import React, { useState} from 'react'
import './../css/comp/main5.css';
import './../css/small-comp/main5.css';
import './../css/big-tab-v/main5.css';
import './../css/body.css';

export default function Main5() {
  const [main5arrow, setImg1] = useState("main5arrow");
  const [main5arrow2, setImg2] = useState("main5arrow");
  const [main5arrow3, setImg3] = useState("main5arrow");
  const [main5arrow4, setImg4] = useState("main5arrow");
  const [main5arrow5, setImg5] = useState("main5arrow");
  const [main5arrow6, setImg6] = useState("main5arrow");
  const [main5arrow7, setImg7] = useState("main5arrow");
  const [main5arrow8, setImg8] = useState("main5arrow");

function icon1() {

  if (document.getElementById("down").style.display === "block") {
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
  } else{
    document.getElementById("down").style.display = "block";
    document.getElementById("up").style.background="#0099ff";
    document.getElementById("up").style.border="1px solid #0099ff";
    setImg1("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon2() {

  if (document.getElementById("down2").style.display === "block") {
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow");
  } else{
    document.getElementById("down2").style.display = "block";
    document.getElementById("up2").style.background="#0099ff";
    document.getElementById("up2").style.border="1px solid #0099ff";
    setImg2("main5arrow1")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon3() {

  if (document.getElementById("down3").style.display === "block") {
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow");
  } else{
    document.getElementById("down3").style.display = "block";
    document.getElementById("up3").style.background="#0099ff";
    document.getElementById("up3").style.border="1px solid #0099ff";
    setImg3("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon4() {

  if (document.getElementById("down4").style.display === "block") {
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow");
  } else{
    document.getElementById("down4").style.display = "block";
    document.getElementById("up4").style.background="#0099ff";
    document.getElementById("up4").style.border="1px solid #0099ff";
    setImg4("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon5() {

  if (document.getElementById("down5").style.display === "block") {
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow");
  } else{
    document.getElementById("down5").style.display = "block";
    document.getElementById("up5").style.background="#0099ff";
    document.getElementById("up5").style.border="1px solid #0099ff";
    setImg5("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon6() {

  if (document.getElementById("down6").style.display === "block") {
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow");
  } else{
    document.getElementById("down6").style.display = "block";
    document.getElementById("up6").style.background="#0099ff";
    document.getElementById("up6").style.border="1px solid #0099ff";
    setImg6("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon7() {

  if (document.getElementById("down7").style.display === "block") {
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow");
  } else{
    document.getElementById("down7").style.display = "block";
    document.getElementById("up7").style.background="#0099ff";
    document.getElementById("up7").style.border="1px solid #0099ff";
    setImg7("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow")
  }
}

function icon8() {

  if (document.getElementById("down8").style.display === "block") {
    document.getElementById("down8").style.display = "none";
    document.getElementById("up8").style.background="none";
    document.getElementById("up8").style.border="1px solid transparent";
    setImg8("main5arrow");
  } else{
    document.getElementById("down8").style.display = "block";
    document.getElementById("up8").style.background="#0099ff";
    document.getElementById("up8").style.border="1px solid #0099ff";
    setImg8("main5arrow1")
    document.getElementById("down2").style.display = "none";
    document.getElementById("up2").style.background="none";
    document.getElementById("up2").style.border="1px solid transparent";
    setImg2("main5arrow")
    document.getElementById("down3").style.display = "none";
    document.getElementById("up3").style.background="none";
    document.getElementById("up3").style.border="1px solid transparent";
    setImg3("main5arrow")
    document.getElementById("down4").style.display = "none";
    document.getElementById("up4").style.background="none";
    document.getElementById("up4").style.border="1px solid transparent";
    setImg4("main5arrow")
    document.getElementById("down5").style.display = "none";
    document.getElementById("up5").style.background="none";
    document.getElementById("up5").style.border="1px solid transparent";
    setImg5("main5arrow")
    document.getElementById("down6").style.display = "none";
    document.getElementById("up6").style.background="none";
    document.getElementById("up6").style.border="1px solid transparent";
    setImg6("main5arrow")
    document.getElementById("down7").style.display = "none";
    document.getElementById("up7").style.background="none";
    document.getElementById("up7").style.border="1px solid transparent";
    setImg7("main5arrow")
    document.getElementById("down").style.display = "none";
    document.getElementById("up").style.background="none";
    document.getElementById("up").style.border="1px solid transparent";
    setImg1("main5arrow")
  }
}
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
                        <div className="up" id="up">
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
                            <div className="main5tabtext1">One time. it will be for Driving Test.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up3">
                            <div className="main5tabicon" onClick={icon3}><div className={main5arrow3} /></div>
                            <div className="main5tabtext">At what age can i start learning driving?</div>
                        </div>
                        <div className="down" id="down3">
                            <div className="main5tabtext1">Car learning license is given to anyone who is above 18 years of age.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up4">
                            <div className="main5tabicon" onClick={icon4}><div className={main5arrow4} /></div>
                            <div className="main5tabtext">Can shift the cars in between the courses?</div>
                        </div>
                        <div className="down" id="down4">
                            <div className="main5tabtext1">Yes. Please discuss with Instructor.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up5">
                            <div className="main5tabicon" onClick={icon5}><div className={main5arrow5} /></div>
                            <div className="main5tabtext">What if i cant come for class on a particular day?</div>
                        </div>
                        <div className="down" id="down5">
                            <div className="main5tabtext1">Please inform the instructor before hand. It can be rescheduled.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up6">
                            <div className="main5tabicon" onClick={icon6}><div className={main5arrow6} /></div>
                            <div className="main5tabtext">How much time will it take at RTO?</div>
                        </div>
                        <div className="down" id="down6">
                            <div className="main5tabtext1">It's between 1 hour to 2 hour.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up7">
                            <div className="main5tabicon" onClick={icon7}><div className={main5arrow7} /></div>
                            <div className="main5tabtext">What documents are required for the admission?</div>
                        </div>
                        <div className="down" id="down7">
                            <div className="main5tabtext1">ID Proof, Birth Certificate.</div>
                        </div>
                    </div>

                    <div className="main5tabs">
                        <div className="up" id="up8">
                            <div className="main5tabicon" onClick={icon8}><div className={main5arrow8} /></div>
                            <div className="main5tabtext">What if I have to go out urgently for 10-15 days in between my course?</div>
                        </div>
                        <div className="down" id="down8">
                            <div className="main5tabtext1">Please Discuss with Instructor to reschedule your class.</div>
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