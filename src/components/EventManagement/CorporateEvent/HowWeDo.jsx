import React from "react";
import classes from "./HowWeDo.module.css";

const HowWeDo = () => {
  return (
    <>
      <section className={classes.howWeDoWrapper}>
        {/* <div className="container"> */}
          <div className={`${classes.content}`}>
            <div className="container">
              <div className="row">
                <div className={`${classes.leftTitle} col-6  m-0`}>
                  We Are Obsessed With
                </div>
                <div className={`${classes.vr} vr p-0`}></div>
                <div className="col-5">
                  <ul className="list-unstyled">
                    <li>Every Detail</li>
                    <li>Hitting Your Goal</li>
                    <li>Communication</li>
                    <li>Design</li>
                    <li>Collaboration</li>
                    <li>Process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default HowWeDo;
