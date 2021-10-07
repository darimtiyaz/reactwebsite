import React from 'react';
import { NavLink } from 'react-router-dom';
import abt from "../src/images/abt.jpg";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flux align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to About Page <strong className="brand-name">ImtiyazTech</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of talented developer making websites
                </h2>
                <div className="mt-3">
                  <NavLink to="/contact" className="btn-get-started"> Get Started</NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                <img src={abt} className="img-fluid animated" alt="about img" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
};

export default Home;
