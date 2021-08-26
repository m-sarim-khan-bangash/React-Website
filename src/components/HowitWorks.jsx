import React, { useState } from "react";
import workapi from "../Api/workapi";

const HowitWorks = () => {
  const [workData, setWorkData] = useState(workapi);

  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((value, index) => {
              const { id, logo, title, info } = value;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={index}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-10 text-center">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowitWorks;
