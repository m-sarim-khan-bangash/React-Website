import React, { useState } from "react";
import AboutApi from "../Api/AboutApi";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(AboutApi);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-left-side-img">
              <img src="./images/hero3.jpg" />
            </div>
            <div className="col-12 col-lg-7 services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use App?</h1>
              {aboutData.map((value, index) => {
                const { id, title, info } = value;
                return (
                  <>
                    <div className="row our-services-info" key={index}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* About us section 2nd part */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row our-services-rightside">
            <div className="col-12 col-lg-7 our-services-rightside-content">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br />
                available 24/7
              </h1>
              {aboutData.map((value, index) => {
                const { id, title, info } = value;
                return (
                  <>
                    <div className="row our-services-info key={index}">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border">Learn more</button>
            </div>
            <div className="col-12 col-lg-5 our-service-left-side-img">
              <img src="./images/callcenter.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
