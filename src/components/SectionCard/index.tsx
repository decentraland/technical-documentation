import React from "react";
import "./types";
import "./style.css";
import { Link } from "gatsby";

export default function SectionCard({ img, title, url, bgColor, description }) {
  console.log(bgColor);
  return (
    <div className="section-card" style={{ background: bgColor }}>
      <Link to={url}>
        <img src={`/images/${img}`} />
        <div className="section-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
