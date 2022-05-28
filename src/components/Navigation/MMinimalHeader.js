import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../theme";
import { GlobalStyles } from "../../GlobalStyles";
const MMINIMALHEADER = styled.header.attrs((props) => ({
  color: props.color || theme.background,
  contentPosition: props.contentPosition || "center",
}))`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  height: ${(props) => props.size};
  position: ${(props) => props.stay};
  background-color: ${(props) => props.color};
  justify-content: ${(props) => props.contentPosition};
`;
export function MMinimalHeader({
  stay = "sticky",
  color,
  children,
  className,
  contentPosition = "center",
}) {
  return (
    <MMINIMALHEADER
      className={className}
      stay={stay}
      color={color}
      contentPosition={contentPosition}
    >
      <GlobalStyles />
      {children}
    </MMINIMALHEADER>
  );
}
MMinimalHeader.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  stay: PropTypes.string,
  contentPosition: PropTypes.oneOf(["center", "end", "start"]),
};
