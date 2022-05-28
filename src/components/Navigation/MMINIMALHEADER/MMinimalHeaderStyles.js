import styled from "styled-components";
import { theme } from "../../../theme";

export const MMINIMALHEADER = styled.header.attrs((props) => ({
  color: props.color || theme.background,
  contentPosition: props.contentPosition || "center",
  hasShadow:
    (props.hasShadow === 1 &&
      " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px") ||
    (props.hasShadow === 2 &&
      " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"),
}))`
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
  outline: none;
  border: none;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  padding: 20px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  height: ${(props) => props.size};
  position: ${(props) => props.stay};
  box-shadow: ${(props) => props.hasShadow};
  background-color: ${(props) => props.color};
  justify-content: ${(props) => props.contentPosition};
`;
