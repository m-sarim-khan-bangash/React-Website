import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column">
              <h1 className="dispaly-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                a eligendi temporibus, necessitatibus voluptatum provident qui
                similique et quibusdam blanditiis modi! Ipsam aperiam atque
                mollitia recusandae modi totam exercitationem fuga!
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text "
                  placeholder="Enter your email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/* Header right side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./images/hero1.jpg" className="img-fluid" />
              <img
                src="./images/hero4.jpg"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
