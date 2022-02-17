import React from "react";
import "./types";
import "./style.css";
import { Header } from "decentraland-ui/dist/components/Header/Header";
import { Section } from "decentraland-ui/dist/components/Section/Section";
import SectionCard from "../SectionCard";
const sections = require("./../../mocks/sections.json");
import { SectionCardProps } from "../SectionCard/types";

export default function Welcome() {
  return (
    <Section>
      <Header>Build the Metaverse</Header>
      <p>This is a regular page</p>
      <div className="section-cards-container">
        {sections.data.map((item: SectionCardProps, i: number) => {
          console.log(item, 1);
          return (
            <SectionCard
              key={i}
              img={item.img}
              url={item.url}
              bgColor={item.bgColor}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </Section>
  );
}
