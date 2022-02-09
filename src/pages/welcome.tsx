import * as React from "react";
import "decentraland-ui/lib/styles.css";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import { Page } from "decentraland-ui/dist/components/Page/Page";
import { Header } from "decentraland-ui/dist/components/Header/Header";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";
import { Link } from "gatsby";

const Welcome = () => {
  return (
    <>
      <>
        <Navbar activePage="marketplace" />
        <Page>Aaaa</Page>
        <Footer />
      </>
    </>
  );
};

export default Welcome;
