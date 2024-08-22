import styles from "./Hero.module.css";
import HeroWatchImage from "../Images/HeroWatchImage";
import Button from "../Button";

function Hero() {
  return (
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
        <HeroWatchImage />
      </div>

      <div className={styles.heroContent}>
        <h1>New Watch Collections B720</h1>
        <p>
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>
        <p>$1245</p>
        <Button variant="secondary">Discover</Button>
        <Button variant="primary">Add to Cart</Button>
      </div>
    </div>
  );
}

export default Hero;
