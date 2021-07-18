/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */

import React from 'react'

function WorkProcess() {
  

    return (
        <section id="our-process" className="padding bgdark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <div className="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms" >
                        <span>Quisque tellus risus, adipisci </span>
                        <h2 className="font-normal">Our Work Process </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="process-wrapp">
                    <li className="whitecolor wow fadeIn" >
                        <span className="pro-step bottom20">01</span>
                        <p className="fontbold bottom20">Concept</p>
                        <p className="mt-n2 mt-sm-0">Quisque tellus risus, adipisci viverra bibendum urna.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="400ms" >
                        <span className="pro-step bottom20">02</span>
                        <p className="fontbold bottom20">Plan</p>
                        <p className="mt-n2 mt-sm-0">Quisque tellus risus, adipisci viverra bibendum urna.</p>
                    </li>
                    <li className="whitecolor wow fadeIn active" data-wow-delay="500ms" >
                        <span className="pro-step bottom20">03</span>
                        <p className="fontbold bottom20">Design</p>
                        <p className="mt-n2 mt-sm-0">Quisque tellus risus, adipisci viverra bibendum urna.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="600ms" >
                        <span className="pro-step bottom20">04</span>
                        <p className="fontbold bottom20">Development</p>
                        <p className="mt-n2 mt-sm-0">Quisque tellus risus, adipisci viverra bibendum urna.</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="700ms" >
                        <span className="pro-step bottom20">05</span>
                        <p className="fontbold bottom20">Quality Check</p>
                        <p className="mt-n2 mt-sm-0">Quisque tellus risus, adipisci viverra bibendum urna.</p>
                    </li>
                </ul>
            </div>
        
        </div>
    </section>
    )
}

export default WorkProcess
