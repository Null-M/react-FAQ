// WHAT YOU ARE GONNA DO IS TO CHANGE THE BUTTTON AND ADD FUNCTIONS SO WHEN CLICKED IT WOULD SHOW THE AWNSER
//IMPORTING ASSETS
import desktopBackground from "./assets/images/background-pattern-desktop.svg";
import mobileBackground from "./assets/images/background-pattern-mobile.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import star from "./assets/images/icon-star.svg";

import "./App.css";

function App() {
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
                <button>+</button>
              </div>
              {/* first awnser (hidden) */}
              <div className="awnser ">
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
                <button>+</button>
              </div>
              {/* second awnser (hidden) */}
              <div className="awnser">
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
                <button>+</button>
              </div>
              {/* third awnser (hidden) */}
              <div className="awnser">
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
                <button>+</button>
              </div>
              {/* forth awnser (hidden) */}
              <div className="awnser">
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
