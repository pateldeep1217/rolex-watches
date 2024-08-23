import styles from "./Story.module.css";
import Container from "../Container";
import Button from "../Button";
import SectionTItle from "../SectionTitle/SectionTItle";

function Story() {
  return (
    <Container verticalSpace={true}>
      <section className={styles.story}>
        <SectionTItle>Our Story</SectionTItle>
        <h1>Inspirational Watch of this year</h1>
        <p>
          The latest and modern watches of this year, is available in various
          presentations in this store, discover them now.
        </p>
        <Button variant="secondary">Discover</Button>
      </section>
    </Container>
  );
}

export default Story;
