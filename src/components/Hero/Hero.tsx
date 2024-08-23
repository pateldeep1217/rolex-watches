import styles from "./Hero.module.css";
import HeroWatchImage from "../Images/HeroWatchImage";
import Button from "../Button";
import Container from "../Container";

function Hero() {
  return (
    <Container>
      <div className={styles.hero}>
        <ul className={styles.links}>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>

        <div className={styles.heroImg}>
          <img src="../../../public/HomeImage.png" alt="" />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>New Watch Collections B720</h1>
            <p>
              Latest arrival of the new imported watches of the B720 series,
              with a modern and resistant design.
            </p>
            <h2 className={styles.price}>$1245</h2>
          </div>
          <div className={styles.heroActions}>
            <Button variant="secondary">Discover</Button>
            <Button variant="primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
