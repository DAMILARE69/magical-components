import { MBUTTON } from "./MButtonStyles";
import PropTypes from "prop-types";
export function MButton({
  isRounded,
  variantColor,
  content = "Magical Button",
  isOutlined,
  size = {
    width: "max-content",
    height: "38px",
  },
  hoverState,
  focusIndicatorColor = true,
  variantName = "magical_button",
  isLoading = { status: false, indicator: "Loading...." },
  color = "#FFFFFF",
  variantDisabledColor,
  leftIcon,
  rightIcon,
  contentPosition = "center",
  event = () => {
    navigator.vibrate(100);
    setTimeout(() => {
      console.log("my default click event is to vibrate your device");
    }, 1500);
  },
}) {
  return (
    <MBUTTON
      hoverState={hoverState}
      focusIndicatorColor={focusIndicatorColor}
      contentPosition={contentPosition}
      size={size}
      variantDisabledColor={variantDisabledColor}
      color={color}
      onClick={event}
      disabled={isLoading?.status}
      className={variantName}
      isOutlined={isOutlined}
      isRounded={isRounded}
      variantColor={variantColor}
    >
      {!isLoading?.status && leftIcon && leftIcon}
      {!isLoading?.status && rightIcon && rightIcon}
      {!isLoading?.status && content}
      {isLoading?.status && isLoading?.indicator}
    </MBUTTON>
  );
}
MButton.propTypes = {
  content: PropTypes.any.isRequired,
  variantColor: PropTypes.string,
  variantDisabledColor: PropTypes.string,
  focusIndicatorColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.string,
  isRounded: PropTypes.bool,
  isOutlined: PropTypes.bool,
  event: PropTypes.func,
  textStyle: PropTypes.string,
  isLoading: PropTypes.exact({
    status: PropTypes.bool,
    indicator: PropTypes.any,
  }),
  size: PropTypes.exact({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  hoverState: PropTypes.exact({
    status: PropTypes.bool,
    background: PropTypes.string,
    outline: PropTypes.string,
  }),
  contentPosition: PropTypes.oneOf(["end", "center", "start"]),
};
