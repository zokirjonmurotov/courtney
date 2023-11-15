import React from "react";
import "./Apply.scss";
import applying from "../../assets/apply.png";
import Button from "../Button/Button";

export default function Apply() {
  return (
    <div className="apply-section">
      <img src={applying} className="apply-img" />
      <div className="apply-form">
        <h4 className="header-form">
          Connect With Your
          <br /> Next Great Hire Today!
        </h4>
        <form>
          <div className="input-wrapper">
            <label htmlFor="ab" className="label">
              Company
            </label>
            <input
              type="text"
              placeholder="placeholder"
              id="ab"
              className="input"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="abc" className="label">
              Your Name
            </label>
            <input
              type="text"
              placeholder="placeholder"
              id="abc"
              className="input"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="abd" className="label">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="placeholder"
              id="abd"
              className="input"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="abe" className="label">
              Email
            </label>
            <input
              type="text"
              placeholder="placeholder"
              id="abe"
              className="input"
            />
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="ab" className="label">
              Project Detail
            </label>
            <textarea placeholder="placeholder" className="textarea" />
          </div>

          <div className="check-box-container">
            <input type="checkbox" className="check-box" id="privacy"/>
            <label className="checkbox-label" htmlFor='privacy'>
              By sending this form I confirm that I have read and accept the{" "}
              <span className="span"> Privacy Policy</span>
            </label>
          </div>
          <Button btnText='GET CONSULTATION' styles='orange'/>
        </form>
      </div>
    </div>
  );
}
