import * as React from "react";
import "decentraland-ui/dist/themes/base-theme.css";
import "decentraland-ui/dist/themes/alternative/light-theme.css";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";
import { Page } from "decentraland-ui/dist/components/Page/Page";
import { Section } from "decentraland-ui/dist/components/Section/Section";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import Welcome from "../components/Welcome";
import Sidebar from "../components/Sidebar";
import "./../style.css";

export default function IndexPage() {
  return (
    <>
      <>
        <Navbar />
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
