import React from "react";
import "./types";
import "./style.css";
import { Page, Header, Section } from "decentraland-ui";
import SectionCard from "../SectionCard";
const sections = require("./../../mocks/sections.json");

export default function Welcome(props) {
  return (
    <Section>
      <Header>Build the Metaverse</Header>
      <p>This is a regular page</p>
      <div className="section-cards-container">
        {sections.data.map((item, i) => {
          console.log(item, 1);
          return (
            <SectionCard
              key={i}
              img={item.img}
              url={item.url}
              bgColor={item.bgColor}
              title={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </Section>
  );
}
