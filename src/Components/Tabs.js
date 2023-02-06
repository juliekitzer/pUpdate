import { useState } from "react";
import "../stylesheets/style.css";
import "../index.css";

import "bulma/css/bulma.css";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = () => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div id="tabs" className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
          <h2>Content 1</h2>
          <hr />
          <p>
            {" "}
            This is dummy text since VS code decided it wont give me the emmet
            for loremn ipsum. Really cool vs code, thanks for nothing.
          </p>
        </div>

        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
          <h2>Content 2</h2>
          <hr />
          <p>
            his is dummy text since VS code decided it wont give me the emmet
            for loremn ipsum. Really cool vs code, thanks for nothing.
          </p>
        </div>
        <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>
          <h2>Content 3</h2>
          <hr />
          <p>
            his is dummy text since VS code decided it wont give me the emmet
            for loremn ipsum. Really cool vs code, thanks for nothing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
