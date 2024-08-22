import Button from "../Button";
import Container from "../Container";

import GridIcon from "../icons/GridIcon";
import MoonIcon from "../icons/MoonIcon";
import ShopingBagIcon from "../icons/ShopingBagIcon";
import WatchIcon from "../icons/WatchIcon";
import styles from "./Header.module.css";
function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.logo}>
          <WatchIcon />
          <h4>Rolex</h4>
        </div>
        <Button>
          <MoonIcon />
        </Button>
        <Button>
          <ShopingBagIcon />
        </Button>
        <Button>
          <GridIcon />
        </Button>
      </header>
    </Container>
  );
}

export default Header;
