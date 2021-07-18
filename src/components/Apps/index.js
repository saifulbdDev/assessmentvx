/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */

import React from 'react';

function Apps() {
  return (
    <section id="our-apps" className="padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="column-lg-6 column-md-7 column-sm-12">
            <div
              className="heading-title bottom30 wow fadeInUp"
              data-wow-delay="300ms"
             
            >
              <span className="defaultcolor text-center text-md-left">
                Quisque tellus risus, adipisci viverra
              </span>
              <h2 className="darkcolor font-normal text-center text-md-left">
                Mobile App Designs
              </h2>
            </div>
          </div>
          <div className="column-lg-6 column-md-5 column-sm-12">
            <p className="text-center text-md-left">
              Curabitur mollis bibendum luctus. Duis suscipit vitae
              dui sed suscipit. Vestibulum auctor nunc vitae diam
              eleifend, in maximus metus sollicitudin. Quisque vitae
              sodales lectus.{' '}
            </p>
          </div>
        </div>
        <div
          className="row d-flex align-items-center"
          id="app-feature"
        >
          <div className="column-lg-4 column-md-4 column-sm-12">
            <div className="text-center text-md-right">
              <div
                className="feature-item mt-3 wow fadeInLeft"
                data-wow-delay="300ms"
              
              >
                <div className="icon">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="text">
                  <h3 className="bottom15">
                    <span className="d-inline-block">
                      Theme Options
                    </span>
                  </h3>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin
                    gravida nibh vel velit auctor aliquet
                  </p>
                </div>
              </div>
              <div
                className="feature-item mt-5 wow fadeInLeft"
                data-wow-delay="350ms"
               
              >
                <div className="icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="text">
                  <h3 className="bottom15">
                    <span className="d-inline-block">
                      Customization
                    </span>
                  </h3>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin
                    gravida nibh vel velit auctor aliquet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column-md-4 text-center">
            <div className="app-image top30">
              <div className="app-slider-lock-btn"></div>
              <div className="app-slider-lock">
                <img src="images/iphone-slide-lock.jpg" alt="" />
              </div>
           
            </div>
          </div>
          <div className="column-lg-4 column-md-4 column-sm-12">
            <div className="text-center text-md-left">
              <div
                className="feature-item mt-3 wow fadeInRight"
                data-wow-delay="300ms"
              
              >
                <div className="icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="text">
                  <h3 className="bottom15">
                    <span className="d-inline-block">
                      Powerful Code
                    </span>
                  </h3>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin
                    gravida nibh vel velit auctor aliquet
                  </p>
                </div>
              </div>
              <div
                className="feature-item mt-5 wow fadeInRight"
                data-wow-delay="350ms"
               
              >
                <div className="icon">
                  <i className="far fa-folder-open"></i>
                </div>
                <div className="text">
                  <h3 className="bottom15">
                    <span className="d-inline-block">
                      Documentation
                    </span>
                  </h3>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin
                    gravida nibh vel velit auctor aliquet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apps;
