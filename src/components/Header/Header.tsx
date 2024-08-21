import WatchIcon from "../icons/WatchIcon";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <WatchIcon />
      <h4>Rolex</h4>
    </header>
  );
}

export default Header;
