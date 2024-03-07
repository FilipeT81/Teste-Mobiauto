import React from "react";

import { Typograph, PropsText } from "./styles";
import Flex from "../Flex";

interface Props extends PropsText {
  title?: string | React.ReactNode;
  label?: string | React.ReactNode;
  children?: any;
  type?:
    | "title"
    | "label"
    | "titleButton"
    | "titleHeader"
    | "subtitle"
    | "paragraph"
    | "labelBold"
    | "labelSmall"
    | "collapsable"
    | "collapsableBold";
  textAlign?: "start" | "center" | "end";
}
const InfoTextModal: React.FC<Props> = ({
  title,
  label,
  type,
  children,
  color,
  ...rest
}) => {
  return (
    <Flex directionFlex="row" justify="flex-start" mv={10}>
      <Typograph type={"labelBold"} color={"#333"} {...rest}>
        {title + ": "}
      </Typograph>
      <Typograph type={"label"} color={color} {...rest}>
        {label}
      </Typograph>
    </Flex>
  );
};

export default InfoTextModal;
