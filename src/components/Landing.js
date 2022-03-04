import React from "react";
import logo from "../assets/img/logo.png";
import main from "../assets/img/main.png";
import goal1 from "../assets/img/goals/1.png";
import goal2 from "../assets/img/goals/2.png";
import goal3 from "../assets/img/goals/3.png";
import goal4 from "../assets/img/goals/4.png";
import goal5 from "../assets/img/goals/5.png";
import time from "../assets/img/time.png";

export default function Landing() {
  return (
    <div className="">
      {/* mainHeader */}
      <section className="mainHeader parallex">
        <div class="bg-shape"></div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark pt-4">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
          </nav>
          <div className="row">
            <div className="col-md-6 m-auto">
              <h5 className="secondaryC">Smart Investing Made Easy</h5>
              <h2 className="primaryC mb-4 fa-3x">Invest in beach life</h2>
              <p>Start with SR 500 and build your wealth now.</p>
            </div>
            <div className="col-md-6 position-relative">
              <img src={main} className="w-100 position-absolute" />
            </div>
          </div>
        </div>
      </section>
      {/* <The_right_way */}
      <section className="theRight text-center parallex">
        <h3>The right way to invest? It's up to you.</h3>
        <p>
          Everyone has different goals when it comes to their life, their money,
          and their investment plans.
        </p>
        <div className="d-flex justify-content-center">
          <div className="goalBlock">
            <img src={goal1} />
            <p>Take the trip of a lifetime</p>
          </div>
          <div className="goalBlock">
            <img src={goal2} />
            <p>Buy a home</p>
          </div>
          <div className="goalBlock">
            <img src={goal3} />
            <p>Pay for a wedding</p>
          </div>
          <div className="goalBlock">
            <img src={goal4} />
            <p>Retire early</p>
          </div>
          <div className="goalBlock">
            <img src={goal5} />
            <p>Save for a kid's education</p>
          </div>
        </div>
      </section>
      <section className="waitingApproval">
        <div className="container m-auto">
          <p className=" text-white">
            Blomal Finance is a limited liability company with commercial
            registration number 1010761056 under the procedures for obtaining a
            permit from the Capital Market Authority.
          </p>
        </div>
      </section>

      <footer>
        <div className="container m-auto p-3">
          <p className="text-center m-0">
            Copyright © 2022 Blomal All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
