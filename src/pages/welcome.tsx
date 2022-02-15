import * as React from "react";
import "decentraland-ui/lib/styles.css";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import { Page } from "decentraland-ui/dist/components/Page/Page";
import { Header } from "decentraland-ui/dist/components/Header/Header";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";
import { Link } from "gatsby";
import { Section, Sidebar } from "decentraland-ui";
import "./../style.css";

const Welcome = () => {
  return (
    <>
      <Navbar activePage="marketplace" />
      <Section className="flex">
        <Sidebar />
        <Page>Aaaa</Page>
      </Section>
      <Footer />
    </>
  );
};

export default Welcome;
