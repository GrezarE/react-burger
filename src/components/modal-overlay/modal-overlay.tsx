import PropTypes from "prop-types";
import { FC } from "react";
import modalOverlayStyle from "./modal-overlay.module.css";

interface IModalOverlay {
  onClose: () => any
}

export const ModalOverlay: FC<IModalOverlay> = ({ onClose, children }) => {
  return (
    <div className={modalOverlayStyle.modalOverlay} onClick={onClose}>
      {children}
    </div>
  );
};

// ModalOverlay.propTypes = {
//   onClose: PropTypes.func,
//   children: PropTypes.element,
// };
