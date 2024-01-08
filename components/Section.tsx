import { staggerContainer, textVariant } from "@/lib/motion";
import styles from "@/lib/styles";
import { motion } from "framer-motion";

const Section = ({
  id,
  subText,
  headText,
  children,
}: {
  id?: string;
  subText?: string;
  headText?: string;
  children?: React.ReactNode;
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
      {(subText || headText) && (
        <motion.div variants={textVariant()}>
          {subText && <p className={styles.sectionSubText}>{subText}</p>}
          {headText && <h2 className={styles.sectionHeadText}>{headText}</h2>}
        </motion.div>
      )}
      {children}
    </motion.section>
  );
};

export default Section;
