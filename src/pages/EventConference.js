import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterThree from "../common/footer/FooterThree";
import ServiceThree from "../elements/service/ServiceThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutFour from "../elements/about/AboutFour";
import TeamThree from "../elements/team/TeamThree";
import AboutTwo from "../elements/about/AboutTwo";
import AboutThree from "../elements/about/AboutThree";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";

const EventConference = () => {
  return (
    <>
      <SEO title="Bubbly Booties" />
      <main className="page-wrapper">
        <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-6 height-850">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-left">
                  <img
                    className="w-70 mt--15 mb--20"
                    src="./images/logo/logo-section-dark.png"
                    alt="Banner Images"
                  />
                  <p className="description color-blackest">
                    Bubbly Booties is a unique collection of 10,000 hand
                    illustrated and randomly generated NFTs living on The
                    Bootyverse.
                  </p>
                  <div className="button-group mt--30 mt_sm--20">
                    <a className="btn-default btn-medium btn-icon" href="/mint">
                      Mint
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div class="sprite-display-none">
                  <video autoPlay loop muted class="img-rounded img-dropshadow">
                    <source
                      src="./images/animation/sprite.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <AboutTwo />
        <Separator />
        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="WELCOME TO"
                  title="Bubbly Booties World"
                  description=""
                />
              </div>
            </div>
            <ServiceThree
              serviceStyle="service__style--2"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />

        <AboutFour image="./images/about/about-4.png" />

        <Separator />
        <CalltoActionFive />
        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--15">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="not their actual booties"
                  title="Meet the Team"
                  description=""
                />
              </div>
            </div>
            <TeamThree
              column="col-lg-3 col-md-6 col-6 mt--30"
              teamStyle="team-style-two"
            />
          </div>
        </div>
        {/* End Elements Area  */}
        <Separator />
        <AboutThree />

        <Separator />

        <FooterThree />
      </main>
    </>
  );
};

export default EventConference;
