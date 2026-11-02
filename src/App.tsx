// WHAT YOU ARE GONNA DO IS TO CHANGE THE BUTTTON AND ADD FUNCTIONS SO WHEN CLICKED IT WOULD SHOW THE AWNSER
//IMPORTING ASSETS
import { useState } from "react";

import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import mobileBackground from "./assets/images/background-pattern-mobile.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import star from "./assets/images/icon-star.svg";

import "./App.css";

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  return (
    <>
      {/* the mother */}
      <div className="grand-parent">
        <img src={desktopBackground} alt="" className="background-image" />
        {/* parent of FAQ */}
        <div className=" parent">
          {/* child of FAQ */}
          <div className="child">
            {/* heading */}
            <div className="heading">
              {/* star */}
              <img src={star} alt="" />
              <h1>FAQs</h1>
            </div>
            <div className="question-parent ">
              {/* first question */}
              <div className="question">
                <span>What is Frontend Mentor, and how will it help me?</span>
                <button
                  // When isOpen1 is true, the active class gets added. When it's false, the active class gets removed.
                  className={isOpen1 ? "active" : ""}
                  onClick={() => setIsOpen1(!isOpen1)}
                ></button>
              </div>
              {/* /* first awnser (hidden) */}
              <div className={`awnser ${isOpen1 ? "active" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  commodi nulla. Quos molestias officiis nihil illum, rerum
                  facilis a ipsa doloremque delectus assumenda tempore
                  molestiae? Laboriosam veritatis nulla numquam quasi.
                </p>
              </div>

              <hr />
              {/* second question */}
              <div className="question">
                <span>is Frontend Mentor free?</span>
                <button
                  // When isOpen1 is true, the active class gets added. When it's false, the active class gets removed.
                  className={isOpen2 ? "active" : ""}
                  onClick={() => setIsOpen2(!isOpen2)}
                ></button>
              </div>
              {/* second awnser (hidden) */}
              <div className={`awnser ${isOpen2 ? "active" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  commodi nulla. Quos molestias officiis nihil illum, rerum
                  facilis a ipsa doloremque delectus assumenda tempore
                  molestiae? Laboriosam veritatis nulla numquam quasi.
                </p>
              </div>
              <hr />
              {/* third question */}
              <div className="question">
                <span>
                  can i use FronetEnd Mentor projects in my portfolio?
                </span>
                <button
                  // When isOpen1 is true, the active class gets added. When it's false, the active class gets removed.
                  className={isOpen3 ? "active" : ""}
                  onClick={() => setIsOpen3(!isOpen3)}
                ></button>
              </div>
              {/* third awnser (hidden) */}
              <div className={`awnser ${isOpen3 ? "active" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  commodi nulla. Quos molestias officiis nihil illum, rerum
                  facilis a ipsa doloremque delectus assumenda tempore
                  molestiae? Laboriosam veritatis nulla numquam quasi.
                </p>
              </div>
              <hr />
              {/* forth question */}
              <div className="question">
                <span>How can i get help if i'm stuck on a challenge</span>
                <button
                  // When isOpen1 is true, the active class gets added. When it's false, the active class gets removed.
                  className={isOpen4 ? "active" : ""}
                  onClick={() => setIsOpen4(!isOpen4)}
                ></button>
              </div>
              {/* forth awnser (hidden) */}
              <div className={`awnser ${isOpen4 ? "active" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  commodi nulla. Quos molestias officiis nihil illum, rerum
                  facilis a ipsa doloremque delectus assumenda tempore
                  molestiae? Laboriosam veritatis nulla numquam quasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
