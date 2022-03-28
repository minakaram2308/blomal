import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import logo from "../assets/img/logo.png";
import main from "../assets/img/main.png";
import goal1 from "../assets/img/goals/1.png";
import goal2 from "../assets/img/goals/2.png";
import goal3 from "../assets/img/goals/3.png";
import goal4 from "../assets/img/goals/4.png";
import goal5 from "../assets/img/goals/5.png";
import about from "../assets/img/about.png";

import how1 from "../assets/img/howitworks/1.png";
import how2 from "../assets/img/howitworks/2.png";
import how3 from "../assets/img/howitworks/3.png";
import how4 from "../assets/img/howitworks/4.png";

import howrect1 from "../assets/img/howitworks/rect1.png";
import howrect2 from "../assets/img/howitworks/rect2.png";
import howrect3 from "../assets/img/howitworks/rect3.png";
import howrect4 from "../assets/img/howitworks/rect4.png";

import faq from "../assets/img/faq.png";

export default function Landing() {
  //   document.querySelector('.next-button.email').click(
  //     function () {
  //         console.log("Something");
  //         document.querySelector('.email-section').classList.add("fold-up");
  //         document.querySelector('.success').css("marginTop", 0);
  //     }
  // );
  const shoot = () => {
    document.querySelector(".email-section").classList.add("fold-up");
    // document.querySelector('.success').css("marginTop", 0);
    document.getElementById("success").classList.add("mt-0");
  };
  return (
    <div className="">
      {/* mainHeader */}
      <section className="mainHeader">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark pt-4">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="goal" />
            </a>
          </nav>
          <div className="row">
            <div className="col-md-6 m-auto pl4">
              <h5 className="secondaryC">
                Investing has become easier and more profitable with Blomal
              </h5>
              <h2 className="primaryC mb-4 fa-3x">
                Invest safely and without any prior knowledge
              </h2>
              <p>
                You can start now with only SR500 to build your wealth right
                away.
              </p>
            </div>
            <div className="col-md-6 position-relative">
              <img src={main} alt="goal" className="w-100 position-absolute" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 m-auto">
              <img src={about} alt="goal" className="w-100" />
            </div>
            <div className="col-md-6 m-auto about">
              <h3 className="mb-4">About Blomal</h3>
              <p>
                <i className="fa fa-check"></i> Blomal is a digital investment
                management service.
              </p>
              <p>
                <i className="fa fa-check"></i> We create personalized portfolios to help investors achieve their their long term goals with risk-optimized returns.
              </p>
              <p>
                <i className="fa fa-check"></i> We help you invest in fully-diversified portfolios of low-cost index funds across 6 liquid asset classes, based on your risk profile. We use established and reputable methodologies coupled with advanced technology to simplify the entire investing experience by automatic the rebalancing, dividend reinvesting, and tax optimization services which are time consuming, costly and complex or were only available to the ultra-rich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <The_right_way */}
      <section className="theRight text-center">
        <h3>
        You deserve an investment portfolio that matches your ambitions and goals
        </h3>
        <p>
          Everyone has different goals when it comes to their life, their money,
          and their investment plans.
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
      </section>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div class="registration-form">
              <header>
                <h3 className="m-0">Join us</h3>
                <p>Join our waiting List</p>
              </header>
              <div class="input-section email-section">
                <input
                  class="email"
                  type="email"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
                <div class="animated-button">
                  <button class="btn btn-success" onClick={shoot}>
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
      </div>
      {/* how it works */}
      <section className="howitworks text-center pt-4 my-5">
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
                <p className="my-3 secondaryC">ANSWER Questionnaire</p>
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
                Invest in your suggested or preferred Blomal portfolios for a low fee and select any alpha strategies you want in addition!.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqBlock position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3 className="text-center mb-5">Asked Questions</h3>
              <img src={faq} alt="faq" className="faq" />
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      The importance of long term compound Investing
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is BLOMAL?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is BLOMAL?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Who is BLOMAL?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>BLOMAL Technology</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why does Blomal exist?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Where do I sign up?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form class="modernForm">
                <div className="row">
                  <div class="col-md-12 mb-3">
                    <h3>Contact us</h3>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>First Name</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>Last Name</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="email" required></input>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>Phone</label>
                  </div>
                  <div class="col-md-12 group">
                    <textarea type="text" required></textarea>
                    <span class="bar"></span>
                    <label>Message</label>
                  </div>
                  <div class="col-md-12 text-end">
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
