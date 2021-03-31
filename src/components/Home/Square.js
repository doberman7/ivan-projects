import { motion } from "framer-motion";

const Square = () => {
  return (
    <>
      <motion.div
        className="containerSquare"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      />
    </>
  );
};

export default Square;
