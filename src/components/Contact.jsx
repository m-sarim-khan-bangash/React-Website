import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // Connecting with firebase
  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://react-website-9296c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully!");
      }
    } else {
      alert("Please fill the data");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolore culpa, laudantium dolores unde optio
                    accusamus non voluptate quod deserunt.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* Right side start */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone No"
                          className="form-control"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          name="email"
                          type="text"
                          placeholder="Email ID"
                          className="form-control"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          name="address"
                          type="text"
                          placeholder="Add Address"
                          className="form-control"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          name="message"
                          type="text"
                          placeholder="Enter Your Messege"
                          className="form-control"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree with your terms and conditions
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
