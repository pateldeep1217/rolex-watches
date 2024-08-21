import clsx from "clsx";
import React from "react";
import styles from "./Button.module.css";
// Define the type for props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "ghost" | "primary" | "secondary";
};

function Button({ children, variant = "ghost", ...props }: ButtonProps) {
  const buttonClass = clsx(styles[variant]);
  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;
