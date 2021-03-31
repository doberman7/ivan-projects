import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Scroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="wrapperScroll">
      <motion.div
        className="containerScroll"
        style={{
          scale,
        }}
      >
        <motion.div
          className="itemScroll"
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Scroll;
