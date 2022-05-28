import { MFiedlInput, MFIELD, MFIELDCONTAINER } from "./MFieldStyles";
import PropTypes from "prop-types";

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
  labelColor,
  event,
  size = { width: "100%", height: "48px" },
}) {
  return (
    <MFIELDCONTAINER size={size} variantColor={variantColor}>
      <MFIELD
        direction={direction}
        hoverColor={hoverColor}
        rounded={rounded}
        hasShadow={hasShadow}
        className={className}
        variantColor={variantColor}
        focusIndicatorColor={focusIndicatorColor}
      >
        {label && <small labelColor={labelColor}>{label}</small>}
        <MFiedlInput
          onChange={event}
          color={color}
          type={variant}
          placeholder={placehold}
        />
      </MFIELD>
      {helperText && <em>{helperText}</em>}
    </MFIELDCONTAINER>
  );
}
MFIELD.propTypes = {
  focusIndicatorColor: PropTypes.string,
  variant: PropTypes.oneOf(["text", "email", "search", "password"]),
  labelColor: PropTypes.string,
  variantColor: PropTypes.string,
  placehold: PropTypes.string,
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
