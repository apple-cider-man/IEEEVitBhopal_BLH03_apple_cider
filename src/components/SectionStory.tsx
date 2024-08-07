import PropTypes from "prop-types";
import styles from "./SectionStory.module.css";

const SectionStory = ({ className = "" }) => {
  return (
    <div className={[styles.sectionStory, className].join(" ")}>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <div className={styles.storysectionheading}>
              <h1 className={styles.story}>STORY</h1>
              <div className={styles.theWorldOfContainer}>
                <span className={styles.theWorldOf}>{`The World of `}</span>
                <span>Verse Tarot Voyage</span>
              </div>
            </div>
            <div className={styles.storysectiondescription}>
              A world where the multiverse is recognized. Verse Travelers and
              Verse Hunters who travel through time and space embark on an
              eventful journey to discover the truth of this world. Use the
              prompt, the key to world change, to define your own happy world!
            </div>
          </div>
          <div className={styles.absoluteillusts}>
            <img className={styles.tarot11Icon} alt="" src="/tarot11@2x.png" />
            <img className={styles.tarot2Icon} alt="" src="/tarot2@2x.png" />
            <img
              className={styles.mainillustIcon}
              loading="lazy"
              alt=""
              src="/mainillust@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.absolutebottomgradient} />
    </div>
  );
};

SectionStory.propTypes = {
  className: PropTypes.string,
};

export default SectionStory;
