import { MFiedlInput, MFIELD } from "./MFieldStyles";
import PropTypes from "prop-types";
import { theme } from "../../../theme";

export function MField({
  focusIndicatorColor,
  variant = "text",
  variantColor = "#495057",
  placehold = "Mfield......",
  className,
  hasShadow = 2,
  rounded,
  helperText = "MField Helder Text",
  color,
  hoverColor,
  direction = "upDown",
  label = "Mfield Label",
  event,
  size = { width: "100%", height: "48px" },
}) {
  return (
    <MFIELD
      size={size}
      direction={direction}
      hoverColor={hoverColor}
      rounded={rounded}
      hasShadow={hasShadow}
      className={className}
      variantColor={variantColor}
      focusIndicatorColor={focusIndicatorColor}
    >
      {label && <small>{label}</small>}
      <MFiedlInput
        onChange={event}
        color={color}
        type={variant}
        placeholder={placehold}
      />
      {helperText && <em>{helperText}</em>}
    </MFIELD>
  );
}
MFIELD.propTypes = {
  focusIndicatorColor: PropTypes.string,
  variant: PropTypes.oneOf(["text", "email", "search", "password"]),
  variantColor: PropTypes.string,
  placehold: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasShadow: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  rounded: PropTypes.bool,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  event: PropTypes.func,
  direction: PropTypes.oneOf(["upDown", "sideSide"]),
  size: PropTypes.exact({ width: PropTypes.string, height: PropTypes.string }),
};
