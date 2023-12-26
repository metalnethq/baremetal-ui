import React from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  children?: React.ReactNode;
  actionWrapperClassName?: string;
  align?: "left" | "right" | "evenly" | "between";
  bordered?: boolean;
  actions?: React.ReactNode;
  wrapperClassName?: string;
  el?: "footer" | "div" | "header" | "aside" | "span";
  style?: React.CSSProperties;
}

export default function Footer({
  children,
  actionWrapperClassName,
  align = "evenly",
  bordered = false,
  actions,
  wrapperClassName,
  style,
  el: El = "footer",
}: FooterProps) {
  const justifyContentClass = {
    left: "justify-start",
    right: "justify-end",
    evenly: "justify-evenly",
    between: "justify-between",
  }[align];

  const childrenArray = React.Children.toArray(actions);
  const numChildren = childrenArray.length;

  let className = bordered
    ? "flex w-full"
    : "flex w-full items-center p-3 border-t " + justifyContentClass;

  className += " " + actionWrapperClassName;

  return (
    <El className={twMerge(wrapperClassName)} style={style}>
      <Actions
        className={className}
        childrenArray={childrenArray}
        numChildren={numChildren}
        align={align}
        bordered={bordered}
      />

      {children}
    </El>
  );
}

function Actions({
  className,
  childrenArray,
  numChildren,
  align,
  bordered,
}: {
  className?: string;
  childrenArray: React.ReactNode[];
  numChildren: number;
  align: "left" | "right" | "evenly" | "between";
  bordered: boolean;
}) {
  let borderClassName = "border-t p-3";
  let marginClass = "";

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (bordered && index !== numChildren - 1) {
          borderClassName += " border-r";
        } else {
          if (align === "left" && index < numChildren - 1) {
            marginClass = "mr-2";
          } else if (align === "right" && index > 0) {
            marginClass = "ml-2";
          }
        }

        if (bordered) {
          return (
            <div
              key={index}
              className={twMerge(
                "flex flex-1 justify-center items-center",
                borderClassName
              )}
            >
              {child}
            </div>
          );
        }

        return (
          <div key={index} className={twMerge(marginClass)}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
