import styled from "styled-components";
import { theme } from "../../../theme";

export const MFIELDCONTAINER = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: ${(props) => props.size?.width};
  height: ${(props) => props.size?.height};
  &:focus-within em {
    color: ${(props) => props.variantColor || theme.brandColor};
  }
  & em {
    font-size: 10px;
  }
`;
export const MFIELD = styled.div.attrs((props) => ({
  variantColor:
    (props.variantColor === "success" && theme.success) ||
    (props.variantColor === "error" && theme.error) ||
    (props.variantColor === "info" && theme.info) ||
    (props.variantColor === "warning" && theme.warning) ||
    props.variantColor,
  hasShadow:
    (props.hasShadow === 1 && " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px") ||
    (props.hasShadow === 2 && " rgba(0, 0, 0, 0.24) 0px 3px 8px") ||
    (props.hasShadow === 3 && "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px") ||
    (props.hasShadow === 4 && "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px") ||
    (props.hasShadow === 5 &&
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px") ||
    (props.hasShadow === 6 &&
      " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px") ||
    (props.hasShadow === 7 && " rgb(38, 57, 77) 0px 20px 30px -10px") ||
    (props.hasShadow === 8 &&
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px") ||
    (props.hasShadow === 9 &&
      " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset") ||
    (props.hasShadow === 10 && "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px") ||
    props.hasShadow,
  direction:
    (props.direction === "upDown" && "column") ||
    (props.direction === "sideSide" && "row"),
  rounded: props.rounded ? "9999px" : "5px",
  focusIndicatorColor: props.focusIndicatorColor || props.variantColor,
}))`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2px;
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => (props.rounded ? "5px 0 5px 15px" : "5px 10px")};
  border-radius: ${(props) => props.rounded};
  box-shadow: ${(props) => props.hasShadow};
  outline: solid 1px ${(props) => props.variantColor};
  &:hover {
    box-shadow: none;
    outline: solid 1px ${(props) => props.hoverColor || "#343A40"};
  }
  &:focus-within {
    box-shadow: none;
    outline-offset: 3px;
    outline-style: dashed;
    outline-width: 1px;
    outline-color: ${(props) => props.focusIndicatorColor};
  }
  &:focus-within small,
  em {
    color: ${(props) => props.variantColor || theme.brandColor};
  }
  & small,
  em {
    font-size: 10px;
  }
`;
export const MFiedlInput = styled.input`
  background-color: transparent;
  font-size: 1rem;
  flex: 1;
  color: ${(props) => props.color};
  &:-internal-autofill-selected {
    appearance: menulist button;
    background-image: none !important;
    color: greenyellow !important;
    background-color: red !important;
  }
`;
