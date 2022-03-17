import React from "react";
import { useState } from "react";
import ChildDir from "./ChildDir";
import "./style.scss";

type Props = {
  name: string;
  icon: string;
  children?: JSX.Element[]; // TODO - verify type
};

export default function RootDir(props: Props) {
  const { name, icon, children } = props;
  const [open, setOpen] = useState<boolean>(false);

  console.log(open, 123)

  return (
    <>
      <div className="root-container" onClick={() => setOpen(prevState => !prevState )}>
        <div className="root-title">
          {/* <img
            className="icon"
            src={`https://cdn.decentraland.org${withPrefix(`/${name}.svg`)}`}
          /> */}
          {name}
        </div>
        <div className={open ? "child-container" : "child-container-collapsed"}          
>
        {children &&
          // TO-DO: type the objects, need to define data structure first
          children.map((item: any, key: number) => {
            return (
              <ChildDir
                name={item.name}
                children={item.children}
                offset={1}
                type={item.type}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
