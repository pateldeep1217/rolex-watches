import clsx from 'clsx'

import styles from './Button.module.css'
// Define the type for props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant?: 'ghost' | 'primary' | 'secondary'
}

function Button({ children, variant = 'ghost', ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.button, styles[variant])}>
      {children}
    </button>
  )
}

export default Button
