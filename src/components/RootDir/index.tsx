import React from "react";
import { useState } from "react";
import ChildDir from "./ChildDir";
import "./style.scss";

type Props = {
  name: string;
  offset: number;
  path?: string;
  prevName?:string;
  type?: string; 
  children?: JSX.Element[]; // TODO - verify type
};

export default function RootDir(props: Props) {
  const { name, children, offset, type, prevName } = props;
  const [open, setOpen] = useState<boolean>(false);


  return (
    <>
      <div className="root-container">
        <div className={children && "root-title"} onClick={() => setOpen(prevState => !prevState )} style={{ paddingLeft: `${10 * offset}px` }}>
          {/* <img
            className="icon"
            src={`https://cdn.decentraland.org${withPrefix(`/${name}.svg`)}`}
          /> */}
          {type === 'file' ? <a href={`/${prevName.replace('.md', "")}`}>{name}</a> : <span>{name}</span>}
        </div>
        <div className={open ? "child-container" : "child-container-collapsed"} style={{ paddingLeft: `${10 * offset}px` }}>
        {children &&
          // TO-DO: type the objects, need to define data structure first
          children.map((item: any, key: number) => {
            const formattedName = item.name.replaceAll("-", " ").replace(".md", "")
            return (
              <RootDir
                name={formattedName}
                children={item.children}
                offset={1}
                type={item.type}
                key={key}
                prevName={`${prevName}/${item.name}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
