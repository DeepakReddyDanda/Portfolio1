import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toogleState, setToogleState] = useState(1);
  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toogleTab(1)}
          >
            <i class="uil uil-graduation-cap"></i>Education
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toogleTab(2)}
          >
            <i class="uil uil-briefcase-alt"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mechanical Engg</h3>
                <span className="qualification__subtitle">
                  Mallareddy College Of Engg & Tech
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2018-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Mechanical Engg</h3>
                <span className="qualification__subtitle">
                  Singareni Colleries Polytechnic
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2015-2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Education</h3>
                <span className="qualification__subtitle">
                  Hill Fort High School
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> Till 2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Free Lancer</h3>
                <span className="qualification__subtitle">Freelancing.com</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
