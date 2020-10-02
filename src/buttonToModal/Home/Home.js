import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import "./Home.css";
import Modal from "../Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="home">
      <AnimateSharedLayout type="crossfade">
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        ) : (
          <motion.button
            className="home__button"
            layoutId="expandable-modal"
            onClick={() => setShowModal(!showModal)}
          >
            Go ride!
          </motion.button>
        )}
      </AnimateSharedLayout>
    </main>
  );
};

export default Home;
