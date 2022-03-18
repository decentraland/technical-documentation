import React from "react";
import { useState } from "react";
import ChildDir from "./ChildDir";
import "./style.scss";

type Props = {
  name: string;
  offset: number;
  children?: JSX.Element[]; // TODO - verify type
};

export default function RootDir(props: Props) {
  const { name, children, offset } = props;
  const [open, setOpen] = useState<boolean>(false);

  console.log(open, 123)

  return (
    <>
      <div className="root-container">
        <div className={children && "root-title"} onClick={() => setOpen(prevState => !prevState )} style={{ paddingLeft: `${10 * offset}px` }}>
          {/* <img
            className="icon"
            src={`https://cdn.decentraland.org${withPrefix(`/${name}.svg`)}`}
          /> */}
          {name}
        </div>
        <div className={open ? "child-container" : "child-container-collapsed"} style={{ paddingLeft: `${10 * offset}px` }}>
        {children &&
          // TO-DO: type the objects, need to define data structure first
          children.map((item: any, key: number) => {
            return (
              <RootDir
                name={item.name}
                children={item.children}
                offset={1}
                // type={item.type}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
