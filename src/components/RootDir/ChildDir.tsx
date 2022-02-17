import React, { useState } from "react";

type Props = {
  name: string;
  children?: any;
  offset: number;
  type: string;
};

export default function ChildDir(props: Props) {
  const { name, children, offset, type } = props;
  const [open, setOpen] = useState<boolean>();

  return (
    <>
      {type === "dir" && (
        <div
          className={open ? "child-container" : "child-container-collapsed"}
          style={{ paddingLeft: `${10 * offset}px` }}
          onClick={(prevState) => setOpen(!prevState)}
        >
          <div>{name}</div>
          {children &&
            children.map((item: any, key: number) => {
              return (
                <ChildDir
                  name={item.name}
                  key={key}
                  offset={offset + 1}
                  children={item.children}
                  type={item.type}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
