import React from "react";
import "./types";
import "./style.scss";
import { Link } from "gatsby";
import { SectionCardProps } from "./types";
import { withPrefix } from "gatsby";

export default function UserTypeCard({
  img,
  title,
  url,
  bgColor,
  description,
}: SectionCardProps) {
  return (
    <div className="section-card" style={{ background: bgColor }}>
      <Link to={url}>
        <img src={`https://cdn.decentraland.org${withPrefix(img)}`} />
        <div className="section-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <p>VIEW MORE {">"}</p>
      </Link>
    </div>
  );
}
