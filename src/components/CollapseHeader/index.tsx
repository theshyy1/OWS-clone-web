import React from "react";
import { Collapse } from "react-collapse";

const CollapsedHeader = ({
  children,
  state,
}: {
  children: React.ReactNode;
  state: boolean;
}) => {
  return <Collapse isOpened={state}>{children}</Collapse>;
};

export default CollapsedHeader;
