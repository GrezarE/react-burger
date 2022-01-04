import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import modalOverlayStyle from "./modalOverlay.module.css";

// export const ModalOverlay = (props) => {
//   console.log(props);
//   return (
//     <div
//       className={modalOverlayStyle.modalOverlay}
//       onClick={() => props.setActive(false)}
//     >
//       {props.children}
//     </div>
//   );
// };

export const ModalOverlay = (props) => {
  console.log(props);
  return (
    <div className={modalOverlayStyle.modalOverlay} onClick={props.onClose}>
      {props.children}
    </div>
  );
};
