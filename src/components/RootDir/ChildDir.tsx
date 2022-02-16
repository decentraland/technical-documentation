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
      <div
        className="child-container"
        style={{ paddingLeft: `${10 * offset}px` }}
      >
        {name}
      </div>
      {children &&
        children.map((item: any, key: number) => {
          return (
            <ChildDir
              name={item.name}
              key={key}
              offset={offset + 1}
              children={item.children}
            />
          );
        })}
    </>
  );
}
