import React from "react";
import client from "../images/a.jpg";
import Achievement from "../component/Achievement";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row at575AboutHeading">
            <h1 className="about_title">
              <span className="aboutIntro1">About</span>

              <span className="aboutIntro2 mx-4">Pal Kagrecha</span>
            </h1>
          </div>

          <div className="row my-5">
            <div className="col-sm-4">
              <div className="row at575px">
                <img
                  src={client}
                  alt="biance"
                  height={400}
                  class=" rounded "
                  id="aboutForResponsive"
                />
              </div>
            </div>

            <div className="col-sm-8">
              <div className="row aboutDs">
                <p>
                  I am an augmented reality developer with a passion for pushing
                  the boundaries of immersive technology. With over 3 years of
                  experience in the field, I have developed an impressive
                  portfolio of AR projects for clients across industries, from
                  gaming and entertainment to education and healthcare.
                </p>
              </div>
              <div className="row aboutDs hide575aboutdes">
                <p>
                  The journey into the world of AR began during my undergraduate
                  (Computer Engineering) days when I got fascinated by the
                  potential of AR to transform the way we interact with the
                  world around us. Since then, I have dedicated myself to
                  mastering the latest AR tools and techniques, to maintain the
                  pace with this fast-evolving field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Achievement />
    </>
  );
};

export default About;
