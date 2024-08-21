import styles from "./Hero.module.css";
import HeroWatchImage from "../Images/HeroWatchImage";

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
    </div>
  );
}

export default Hero;
