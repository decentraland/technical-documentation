import * as React from "react";
import "decentraland-ui/lib/styles.css";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";
import { Page, Section } from "decentraland-ui";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import "./../style.css";

const IndexPage = () => {
  return (
    <>
      <>
        <Navbar activePage="marketplace" />
        <Page>
          <Section className="flex">
            <Sidebar />
            <Welcome />
          </Section>
        </Page>
        <Footer />
      </>
    </>
  );
};

export default IndexPage;
