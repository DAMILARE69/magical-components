import PropTypes from "prop-types";
import { MMINIMALHEADER } from "./MMinimalHeaderStyles";
export function MMinimalHeader({
  stay = "sticky",
  color,
  children,
  className,
  hasShadow,
  contentPosition = "center",
}) {
  return (
    <MMINIMALHEADER
      hasShadow={hasShadow}
      className={className}
      stay={stay}
      color={color}
      contentPosition={contentPosition}
    >
      {children}
    </MMINIMALHEADER>
  );
}
MMinimalHeader.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  stay: PropTypes.string,
  hasShadow: PropTypes.number,
  contentPosition: PropTypes.oneOf(["center", "end", "start"]),
};
