import styled from "styled-components";
import { theme } from "../../../theme";
export const MSNACKBAR = styled.div.attrs((props) => ({
  rounded: props.rounded ? "9999px" : "5px",
  variantColor:
    (props.variantColor === "success" && theme.success) ||
    (props.variantColor === "error" && theme.error) ||
    (props.variantColor === "info" && theme.info) ||
    (props.variantColor === "warning" && theme.warning) ||
    props.variantColor ||
    theme.brandColor,
}))`
  width: min(90%, 500px);
  height: 60px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.rounded};
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.variantColor};
  outline: solid 3px
    ${(props) => (props.outlined ? props.variantColor : "transparent")};
  & p {
    color: ${(props) => props.color || theme.dark};
  }
  & div {
    cursor: pointer;
    padding: 4px 22px;
    border-radius: 5px;
    background-color: ${(props) =>
      props.outlined
        ? props.actionContentColor || theme.brandColor
        : theme.actionContentColor || theme.depthColor};
  }
`;
