import React from "react";
import ChildDir from "./ChildDir";
import "./style.module.css";

type Props = {
  name: string;
  icon: string;
  children?: JSX.Element[]; // verify type
};

export default function RootDir(props: Props) {
  const { name, icon, children } = props;

  return (
    <>
      <div className="root-container">
        <div>
          <img className="icon" src={`/images/${name}.svg`} />
          {name}
        </div>
        {children &&
          // TO-DO: type the objects, need to define data structure first
          children.map((item: any) => {
            return (
              <ChildDir
                name={item.name}
                children={item.children}
                offset={1}
                type={item.type}
              />
            );
          })}
      </div>
    </>
  );
}
