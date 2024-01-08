import { staggerContainer } from "@/lib/motion";
import styles from "@/lib/styles";
import { motion } from "framer-motion";

const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default Section;
