import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LandingAr from "../components/LandingAr";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { Navbar, Container, Nav } from "react-bootstrap";
import "react-accessible-accordion/dist/fancy-example.css";
import logo from "../assets/img/logo.png";
import main from "../assets/img/thumb.png";
import goal1 from "../assets/img/goals/1.png";
import goal2 from "../assets/img/goals/2.png";
import goal3 from "../assets/img/goals/3.png";
import goal4 from "../assets/img/goals/4.png";
import goal5 from "../assets/img/goals/5.png";

import how1 from "../assets/img/howitworks/1.png";
import how2 from "../assets/img/howitworks/2.png";
import how3 from "../assets/img/howitworks/3.png";
import how4 from "../assets/img/howitworks/4.png";

import howrect1 from "../assets/img/howitworks/rect1.png";
import howrect2 from "../assets/img/howitworks/rect2.png";
import howrect3 from "../assets/img/howitworks/rect3.png";
import howrect4 from "../assets/img/howitworks/rect4.png";

import faq from "../assets/img/faq.png";
import sa from "../assets/img/sa.svg";

export default function Landing() {
  window.onload = function () {
    document.querySelector(".showbox").style.opacity = "0";
    document.querySelector(".showbox").style.zIndex = "-1";
  };
  //   document.getElementsByClassName("nav-link").addEventListener("click", myFunction);
  // function myFunction() {
  //   document.getElementById("navbarScroll").classList.toggle("show");
  // }
  const userSelection = Object.values(
    document.getElementsByClassName("nav-link")
  );
  userSelection.forEach((link) => {
    link.addEventListener((event) => {
      alert("jjjjjjjjjjjjjjjjjjjj");
      document.getElementById("navbarScroll").classList.remove("show");
      // more code here
    });
  });
  // const shoot = () => {
  //   document.querySelector(".email-section").classList.add("fold-up");
  //   document.getElementById("success").classList.add("mt-0");
  // };  
<BrowserRouter>
  <Routes>
    <Route path="/LandingAr" element={<LandingAr />} />
  </Routes>
</BrowserRouter>
  return (
    <div>
      {/* loader */}

      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>

      {/* mainHeader */}
      <section className="mainHeader" id="Home">
        <div className="container-fluid m-auto">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={logo} alt="goal" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0">
                  <Nav.Link href="#Join">Join</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#HowItWorks">How It Works</Nav.Link>
                  <Nav.Link href="#Faq">Faq</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                  <Nav.Link href="#About" className="ar">
                  <Link to="/LandingAr">My Profile</Link>
                    عربى
                    <img src={sa} className="lang" alt="العربية" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="row justify-content-center my-5 py-5">
            <div className="col-md-12 text-center m-auto">
              <h5 className="secondaryC mb-3">
                Investing has become easier and more profitable with Blomal
              </h5>
              <h2 className="primaryC mb-3 fa-3x">
                Invest safely and without any prior knowledge
              </h2>
              <p className="mb-5">
                You can start now with only SAR 1000 to build your wealth right
                away.
              </p>
            </div>

            {/* <div className="col-md-4">
              <div className="registration-form">
                <header>
                  <h3 className="m-0">Join us</h3>
                  <p>Join our waiting List</p>
                </header>
                <div className="input-section email-section">
                  <input
                    className="email"
                    type="email"
                    placeholder="Enter your email"
                    autocomplete="off"
                  />
                  <div className="animated-button">
                    <button className="btn btn-success" onClick={shoot}>
                      <h3 className="text-white">Join</h3>
                    </button>
                  </div>
                </div>
                <div className="success" id="success">
                  <p>Thanks for Joining us.</p>
                </div>
              </div>
            </div> */}
            <div className="container pt-5" id="Join">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form className="modernForm">
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <h3>Join our waiting List</h3>
                      </div>
                      <div className="col-md-6 group">
                        <input type="text" required></input>
                        <span className="bar"></span>
                        <label>First Name</label>
                      </div>
                      <div className="col-md-6 group">
                        <input type="text" required></input>
                        <span className="bar"></span>
                        <label>Last Name</label>
                      </div>
                      <div className="col-md-6 group">
                        <input type="email" required></input>
                        <span className="bar"></span>
                        <label>Email</label>
                      </div>
                      <div className="col-md-6 group">
                        <input type="text" required></input>
                        <span className="bar"></span>
                        <label>Phone</label>
                      </div>
                      <div className="col-md-12 text-end">
                        <button className="btn btn-primary">
                          <i className="fa fa-paper-plane text-white"></i> Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="About">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 m-auto">
              <img src={main} alt="goal" className="w-100" />
            </div>
            <div className="col-md-6 m-auto about">
              <h3 className="mb-4">About Blomal</h3>
              <p className="d-flex">
                <i className="fa fa-check"></i> Blomal is a digital investment
                management service.
              </p>
              <p className="d-flex">
                <i className="fa fa-check"></i> We create personalized
                portfolios to help investors achieve their their long term goals
                with risk-optimized returns.
              </p>
              <p className="d-flex">
                <i className="fa fa-check"></i> We help you invest in
                fully-diversified portfolios of low-cost index funds across 6
                liquid asset classes, based on your risk profile. We use
                established and reputable methodologies coupled with advanced
                technology to simplify the entire investing experience by
                automatic the rebalancing, dividend reinvesting, and tax
                optimization services which are time consuming, costly and
                complex or were only available to the ultra-rich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <The_right_way */}
      <section className="theRight text-center pt-5 my-3">
        <div className="container-fluid">
          <h3>
            You deserve an investment portfolio that matches your ambitions and
            goals
          </h3>
          <p>
            Everyone has different goals when it comes to their life, their
            money, and their investment plans.
          </p>
          <div className="d-flex justify-content-center">
            <div className="goalBlock">
              <img src={goal4} alt="goal" />
              <p>Retire early</p>
            </div>
            <div className="goalBlock">
              <img src={goal2} alt="goal" />
              <p>Buy a home</p>
            </div>
            <div className="goalBlock">
              <img src={goal5} alt="goal" />
              <p>Save for a kid's education</p>
            </div>
            <div className="goalBlock">
              <img src={goal3} alt="goal" />
              <p>Pay for a wedding</p>
            </div>
            <div className="goalBlock">
              <img src={goal1} alt="goal" />
              <p>Take the trip of a lifetime</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="JoinUs py-5" id="Join">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="registration-form">
              <header>
                <h3 className="m-0">Join us</h3>
                <p>Join our waiting List</p>
              </header>
              <div className="input-section email-section">
                <input
                  className="email"
                  type="email"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
                <div className="animated-button">
                  <button className="btn btn-success" onClick={shoot}>
                    <h3 className="text-white">Join</h3>
                  </button>
                </div>
              </div>
              <div className="success" id="success">
                <p>Thanks for Joining us.</p>
              </div>
            </div>
          </div>
        </div>
      </div></section> */}
      {/* how it works */}
      <section className="howitworks text-center pt-5 my-3" id="HowItWorks">
        <img src={howrect1} alt="how" className="howrect1" />
        <img src={howrect3} alt="how" className="howrect3" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3>How It Works</h3>
              <p>Automated Investment Management</p>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">Step 1</p>
                <img src={how1} alt="how" />
                <p className="my-3 secondaryC text-uppercase">
                  ANSWER Questionnaire
                </p>
                <p className="m-0">
                  Answer few questions to evaluate your investment risk
                  tolerance.
                </p>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img src={howrect2} alt="how" className="howrect2" />
              <div className="howBlock">
                <p className="secondaryC">Step 2</p>
                <img src={how2} alt="how" />
                <p className="my-3 secondaryC">VIEW PORTFOLIO</p>
                <p className="m-0">
                  Know about your diversified global portfolio of ETFs with a
                  long term focus on risk-optimised returns.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">Step 3</p>
                <img src={how3} alt="how" />
                <p className="my-3 secondaryC">CREATE ACCOUNT</p>
                <p className="m-0">
                  Get your Statement of Advice. Sign the MDA contract to allow
                  us to serve you. We create a brokerage account for you.
                </p>
                <img src={howrect4} alt="how" className="howrect4" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">Step 4</p>
                <img src={how4} alt="how" />
                <p className="my-3 secondaryC">INVEST</p>
                <p className="m-0">
                  Invest in your suggested or preferred Blomal portfolios for a
                  low fee and select any alpha strategies you want in addition!.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqBlock position-relative pt-5" id="Faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3 className="text-center mb-5">Asked Questions</h3>
              <img src={faq} alt="faq" className="faq" />
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is Blomal</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      ● Blomal is a digital platform that provides automated,
                      algorithmic investment services with minimal human
                      supervision.
                    </p>
                    <p>
                      ● Blomal automate and optimize passive indexing strategies
                      based on modern portfolio theory
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What investments does Blomal offer?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      For each of your financial goals, Blomal recommends a
                      specific portfolio allocation of our recommended portfolio
                      strategy. This portfolio strategy is designed to reflect
                      the total world market to help maximize expected returns
                      while minimizing risk.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      The importance of long term compound Investing?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Compounding is the ability of an asset to generate
                      earnings, which are then reinvested or remain invested
                      with the goal of generating their own earnings. In other
                      words, compounding refers to generating earnings from
                      previous earnings. The wonder of compounding (sometimes
                      called “compound interest”) has the potential to transform
                      your working money into an income-generating tool.
                      Compounding is the process of generating earnings on an
                      asset’s reinvested earnings. To work, it requires three
                      things: the original investment remains invested, the
                      reinvestment of earnings and time. The more time you give
                      your investments, the more you may be able to accelerate
                      the income potential of your original investment.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Dollar-Cost Averaging or Lump Sum Investing?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Dollar-cost averaging (DCA), is making regularly scheduled
                      investments into an investment fund over a long period of
                      time. For example, investing an equal amount on the 15th
                      of every month. DCA has been an extremely controversial
                      and hotly debated approach to investing. This applies both
                      to practitioners and theoreticians, as well as internet
                      discussion groups, which contain lively debates on the
                      subject, with a fascinating mixture of beliefs,
                      prejudices, opinions, facts and statistics. So, what are
                      investors to believe and do? Read on to learn both sides
                      of the argument.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can I move my money out if I want to?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, you can withdraw your money at any time with no fees
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="container mb-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="modernForm">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <h3>Contact us</h3>
                  </div>
                  <div className="col-md-6 group">
                    <input type="text" required></input>
                    <span className="bar"></span>
                    <label>First Name</label>
                  </div>
                  <div className="col-md-6 group">
                    <input type="text" required></input>
                    <span className="bar"></span>
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-6 group">
                    <input type="email" required></input>
                    <span className="bar"></span>
                    <label>Email</label>
                  </div>
                  <div className="col-md-6 group">
                    <input type="text" required></input>
                    <span className="bar"></span>
                    <label>Phone</label>
                  </div>
                  <div className="col-md-12 group">
                    <textarea type="text" required></textarea>
                    <span className="bar"></span>
                    <label>Message</label>
                  </div>
                  <div className="col-md-12 text-end">
                    <button className="btn btn-primary">
                      <i className="fa fa-paper-plane text-white"></i> Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="waitingApproval">
        <div className="container m-auto">
          <p className=" text-white">
            Blomal Finance is a limited liability company with commercial
            registration number 4030443697 under the procedures for obtaining a
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
