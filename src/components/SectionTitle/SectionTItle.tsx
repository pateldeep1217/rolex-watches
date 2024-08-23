import React from "react";
import styles from "./SectionTItle.module.css";
type SectionTitleProps = {
  children: React.ReactNode;
};

function SectionTItle({ children }: SectionTitleProps) {
  return <h3 className={styles.title}>{children}</h3>;
}

export default SectionTItle;
