// src/components/Container/Container.tsx
import React from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  verticalSpace?: boolean;
};

function Container({ children, verticalSpace }: ContainerProps) {
  return (
    <div
      className={`${styles.container} ${
        verticalSpace ? styles.verticalSpace : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
