import React from "react";
import SEO from "../common/SEO";
import HeaderMint from "../common/header/HeaderMint";
import FooterThree from "../common/footer/FooterThree";
import Separator from "../elements/separator/Separator";
import TermsOne from "../elements/terms/TermsOne";

const EventConference = () => {
  return (
    <>
      <SEO title="Bubbly Booties" />
      <main className="page-wrapper">
        <HeaderMint btnStyle="btn-small" HeaderSTyle="header-default sticky" />
        <TermsOne />
        <Separator />
        <FooterThree />
      </main>
    </>
  );
};

export default EventConference;
