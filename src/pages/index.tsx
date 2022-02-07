import * as React from "react";
import "decentraland-ui/lib/styles.css";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import { Page } from "decentraland-ui/dist/components/Page/Page";
import { Header } from "decentraland-ui/dist/components/Header/Header";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <>
        <Navbar activePage="marketplace" />
        <Page>
          <Header>Hello Wolrd</Header>
          <p>This is a regular page</p>
          <a href="/docs/my-first-post">This is a link to a post</a>
        </Page>
        <Footer />
      </>
    </>
  );
};

export default IndexPage;
