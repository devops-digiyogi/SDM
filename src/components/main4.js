import React, { useState} from 'react'
import './../css/comp/main4.css';
import './../css/body.css';
import user from './../assets/images/main4/user_icon.svg';
import cake from './../assets/images/main4/birthday_cake.svg';
import cal from './../assets/images/main4/calendar_icon.svg';
import email from './../assets/images/main4/email_icon.svg';
import gender from './../assets/images/main4/gender_icon.svg';

export default function Main4() {
const [main4auto1img, setImg1] = useState("main4auto1img")
const [main4auto1text, setText1] = useState("main4auto1text")
const [main4man1img, setImg2] = useState("main4man1img")
const [main4man2text, setText2] = useState("main4man2text")
function myFunction() {
  const checkBox = document.getElementById("myCheck");
  if (checkBox.checked === true){
  // eslint-disable-next-line
        return setImg1("main4auto2img"),
        setText1("main4auto2text"),
        setImg2("main4man2img"),
        setText2("main4man1text")
  } else {
  // eslint-disable-next-line
     return setImg1("main4auto1img"),
     setText1("main4auto1text"),
     setImg2("main4man1img"),
     setText2("main4man2text")
  }
}

    return (
        <div className="main4">
            <div className="main4header">
                <div className="main4headbox">
                    <div className="main4headtext1">Sure to join !?</div>
                    <div className="main4headtext2">Book Your Session !</div>
                </div>
                <div className="main4four">04</div>
            </div>
            <div className="main4body">
                <div className="main4deco"></div>
                <div className="main4bodyup">
                    <div className="main4uppart1">Which transmission type do you prefer ?</div>
                    <div className="main4uppart2">
                        <div className={main4auto1img}></div>
                        <div className={main4auto1text}>Automatic</div>
                        <label class="switch">
                            <input type="checkbox" id="myCheck" onClick={myFunction} hidden />
                            <span class="slider round"></span>
                        </label>
                        <div className={main4man1img}></div>
                        <div className={main4man2text}>Manual</div>
                    </div>
                </div>
                <div className="main4bodydown">
                    <div className="main4downpart1">Tell us a little more about yourself</div>
                    <div className="main4downpart2">
                        <div className="main4downtextboxout">
                            <input type="text" className="main4downtextboxin" name="fname" placeholder="First name" required/>
                            <img src={user} className="main4downimg" alt="user"/>
                            <input type="text" className="main4downtextboxin" name="lname" placeholder="Last name" required/>
                            <img src={user} className="main4downimg" alt="user"/>
                        </div>
                        <div className="main4downtextboxout">
                            <input type="number" className="main4downtextboxin" name="lname" placeholder="Age" required/>
                            <img src={cake} className="main4downimg" alt="cake"/>
                            <input type="text" className="main4downtextboxin" name="gender" placeholder="Gender" required/>
                            <img src={gender} className="main4downimg" alt="gender"/>
                        </div>
                        <div className="main4downtextboxout">
                            <input type="email" className="main4downtextboxin" name="email" placeholder="Email" required/>
                            <img src={email} className="main4downimg" alt="email"/>
                            <input type="text" className="main4downtextboxin" name="date" onFocus="(this.type='date')" onBlur="(this.type='text')" placeholder="Preferred joining date" required/>
                            <img src={cal} className="main4downimg" alt="date"/>
                        </div>
                        <div className="main4downtextboxout1">
                            <div className="main4button">Join Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}