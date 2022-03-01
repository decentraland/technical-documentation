import * as React from "react";
import "decentraland-ui/dist/themes/base-theme.css";
import "decentraland-ui/dist/themes/alternative/light-theme.css";
import { Footer } from "decentraland-ui/dist/components/Footer/Footer";
import { Page } from "decentraland-ui/dist/components/Page/Page";
import { Navbar } from "decentraland-ui/dist/components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import "./style.css";

export type Props = {
  children?: JSX.Element[]; // verify type
};

export default function GeneralLayout({ children }: Props) {
  return (
    <>
      <>
        <Navbar onSignIn={() => console.log("Clicked on sign in")} />
        <Page>
          <Page className="flex">
            {/* <Sidebar /> */}
            {children}
          </Page>
        </Page>
        <Footer />
      </>
    </>
  );
}
