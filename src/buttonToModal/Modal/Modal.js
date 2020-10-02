import React from "react";
import { motion } from "framer-motion";

import "./Modal.css";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <motion.main
      className="modal"
      layoutId="expandable-modal"
      onClick={() => setShowModal(!showModal)}
    >
      <h1 className="modal__heading">Modal</h1>
    </motion.main>
  );
};

export default Modal;
