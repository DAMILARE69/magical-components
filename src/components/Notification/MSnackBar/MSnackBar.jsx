import { MSNACKBAR } from "./MSnackBarStyles";
import PropTypes from "prop-types";
export function MSnackbar({
  event,
  outlined,
  actionContent,
  content,
  variantColor,
}) {
  return (
    <MSNACKBAR onClick={event} outlined={outlined} variantColor={variantColor}>
      <p>{content}</p>
      <div>
        <p>{actionContent}</p>
      </div>
    </MSNACKBAR>
  );
}
MSnackbar.propTypes = {
  event: PropTypes.func,
  content: PropTypes.any.isRequired,
  actionContent: PropTypes.any,
  outlined: PropTypes.bool,
  variantColor: PropTypes.string,
  actionContentColor: PropTypes.string,
};
