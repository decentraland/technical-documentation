import React from "react";

type Props = {
  name: string;
  children?: any;
  offset: number;
};

export default function ChildDir(props: Props) {
  const { name, children, offset } = props;
  return (
    <>
      <li style={{ paddingLeft: `${10 * offset}px` }}>{name}</li>
      {children &&
        children.map((item: any, key: number) => {
          return <ChildDir name={item.name} key={key} offset={offset + 1} />;
        })}
    </>
  );
}
