import PropTypes from "prop-types";
import modalOverlayStyle from "./modal-overlay.module.css";

export const ModalOverlay = (props) => {
  return (
    <div className={modalOverlayStyle.modalOverlay} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element
};