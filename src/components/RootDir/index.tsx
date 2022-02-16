import React from "react";
import ChildDir from "./ChildDir";
import "./style.css";

type Props = {
  name: string;
  icon: string;
  children: JSX.Element[];
};

export default function RootDir(props: Props) {
  const { name, icon, children } = props;
  return (
    <>
      <div>{name}</div>
      {children &&
        children.map((item: any) => {
          console.log(item.children, "this is the children");
          return (
            <ChildDir name={item.name} children={item.children} offset={1} />
          );
        })}
    </>
  );
}
