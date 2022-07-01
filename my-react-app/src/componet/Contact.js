import React, { useState } from "react";
import CustomSlider from "../comman/CustomSlider";

const Contact = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    alert(`User name ${data.userName}. User email ${data.email}. password ${data.password}.phone ${data.phone}  `);
  };
  return (
    <>
      <section className="container-fluid">
        <h3 className="text-center mb-4 ">Contact</h3>
        <div className="main">
          <div className="main-box">
            <h1>Ragistration form</h1>
            <form id="form" onSubmit={formsubmit}>
              <div className="form-group">
                <label className="form-label">User Name</label>
                <input type="text" className="form-control" name="userName" value={data.userName} onChange={InputEvent} placeholder="Enter your fullname" />
                <small id="usererror" className="error">
                  User name is not vaild
                </small>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email" />
                <small id="usererror" className="error">
                  Email is not vaild
                </small>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={data.password} onChange={InputEvent} placeholder="Enter your password" />
                <small id="usererror" className="error">
                  Password is not vaild
                </small>
              </div>
              {/* <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="ConPassword" value={} onChange={InputEvent} placeholder="Enter your confirm password"/>
                    <small id="usererror" className="error">Password is not match</small>

                </div> */}
              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your number" />
                <small id="usererror" className="error">
                  Number is not vaild
                </small>
              </div>
              <div className="form-group">
                <input type="submit" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
