import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <button className="btns" onClick={onClick}>
    {children}
  </button>
);