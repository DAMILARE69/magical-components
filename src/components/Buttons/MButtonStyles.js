import styled from "styled-components";
import { theme } from "../../theme";
export const MBUTTON = styled.button.attrs((props) => ({
  variantColor:
    (!props.variantColor && theme.brandColor) ||
    (props.variantColor === "success" && theme.success) ||
    (props.variantColor === "error" && theme.error) ||
    (props.variantColor === "info" && theme.info) ||
    (props.variantColor === "warning" && theme.warning) ||
    (props.variantColor === "dark" && theme.dark) ||
    (props.variantColor === "light" && theme.light) ||
    props.variantColor,
  isRounded: props.isRounded ? "9999px" : "5px",
}))`
  aspect-ratio: 16/3;
  cursor: pointer;
  display: flex;
  position: relative;
  font-size: 1rem;
  align-items: center;
  justify-content: ${(props) => props.contentPosition};
  gap: 5px;
  text-decoration: ${(props) => props.textStyle};
  height: ${(props) => props.size?.height};
  width: ${(props) => props.size?.width};
  color: ${(props) => props.color};
  transition: all 0.5s ease;
  padding: ${(props) =>
    props.isRounded ? "8px calc(1em + 0.25em)" : "8px 22px"};
  border: solid 1px
    ${(props) => (props.isOutlined ? props.variantColor : "transparent")};
  background-color: ${(props) =>
    props.isOutlined ? "transparent" : props.variantColor};
  border-radius: ${(props) => props.isRounded};
  &:active {
    filter: opacity(${(props) => props.hasClickEffect && "0%"});
  }
  &:hover {
    border-color: ${(props) => props.hoverState?.outline || props.variantColor};
    background-color: ${(props) => props.hoverState?.background};
    color: ${(props) => props.hoverState?.color || theme.light};
    filter: brightness(
      ${(props) =>
        props.hoverState?.status && !props.hoverState?.background && "90%"}
    );
  }
  &:disabled {
    cursor: progress;
    background-color: ${(props) => props.variantDisabledColor};
    filter: opacity(${(props) => !props.variantDisabledColor && "0.5"});
  }
  &:focus-within {
    outline-offset: ${(props) => props.focusIndicatorColor && "3px"};
    outline-style: ${(props) => props.focusIndicatorColor && "dashed"};
    outline-width: ${(props) => props.focusIndicatorColor && "1px"};
    outline-color: ${(props) => props.focusIndicatorColor};
  }
`;
