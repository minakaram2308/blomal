import React from 'react'

export default function Landing() {
  return (
    <div>
    <section className="firstSec">
        <nav className="navbar navbar-expand-lg navbar-dark py-5">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="img/logo.png" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tracking Shipment</a>
                        </li>
                    </ul>
                   <div className="d-flex">
                        <span className="nav-item rightanchor">
                            <a className="nav-link" href="#">Products</a>
                        </span>
                    </div> */}
                </div>
            </div>
        </nav>
        <div className="container-fluid m-auto">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p>
                        <span className="primaryC">Data Driven</span> Software House
                    </p>
                    <p>
                        Building the architecture upon which
                    </p>
                    <h2>Health Tech</h2>
                    <p>
                        can evolve
                    </p>
                    <img src="img/lnkr.png" />
                </div>
            </div>
        </div>
        <div className="text-center mb-5 arrowSec">
            <a href="#lnkr" className="mt-1"><i className="fa fa-chevron-down f1p3"></i></a>
        </div>
    </section>
    {/* <The_right_way */}
    <section className="theRight text-center">
        <h3>The right way to invest? It's up to you.</h3>
        <p>
            Everyone has different goals when it comes to their life, their money, and their investment plans.
        </p>
        <div className="d-flex justify-content-center">
            <div className="goalBlock">
                <img src="img/goals/1.png" />
                <p>
                    Take the trip of
                    a lifetime
                </p>
            </div>
            <div className="goalBlock">
                <img src="img/goals/2.png" />
                <p>
                    Buy a home
                </p>
            </div>
            <div className="goalBlock">
                <img src="img/goals/3.png" />
                <p>
                    Pay for a wedding
                </p>
            </div>
            <div className="goalBlock">
                <img src="img/goals/4.png" />
                <p>
                    Retire early
                </p>
            </div>
            <div className="goalBlock">
                <img src="img/goals/5.png" />
                <p>
                    Save for a kid's
                    education
                </p>
            </div>
        </div>
    </section>

    {/*How It Works*/}
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    How It Works
                </div>
                <div className="col-md-3">

                </div>
            </div>
            </div>
    </section>
    </div>
  )
}
