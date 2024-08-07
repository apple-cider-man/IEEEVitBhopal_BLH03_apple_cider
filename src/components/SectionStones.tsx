import PropTypes from "prop-types";
import styles from "./SectionStones.module.css";

const SectionStones = ({ className = "" }) => {
  return (
    <div className={[styles.sectionStones, className].join(" ")}>
      <div className={styles.sidecol}>
        <img className={styles.stones1Icon} alt="" src="/stones-1@2x.png" />
        <div className={styles.grad} />
      </div>
      <div className={styles.containerWithsidecol}>
        <div className={styles.texts}>
          <div className={styles.headings}>
            <h1 className={styles.stones}>Stones</h1>
            <h3 className={styles.aMysteriousStone}>
              A mysterious stone that controls abilities
            </h3>
          </div>
          <div className={styles.description}>
            <p className={styles.anotherImportantItem}>
              Another important item in this world is the 'Stone'. This item can
              grant special effects to your prompt, enhance the strength of
              Tarot cards, and even create new rules in this universe—a powerful
              item indeed.
            </p>
            <p className={styles.anotherImportantItem}>
              Moreover, as you gain more experience, the Stone also changes.
              This is not surprising, as everything, including the Stone, is a
              living entity of the universe...
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.stonecarousel}>
          <img
            className={styles.stonecarouselitem1Icon}
            loading="lazy"
            alt=""
            src="/stonecarouselitem1@2x.png"
          />
          <img
            className={styles.stonecarouselitem1Icon}
            loading="lazy"
            alt=""
            src="/stonecarouselitem2@2x.png"
          />
          <img
            className={styles.stonecarouselitem1Icon}
            loading="lazy"
            alt=""
            src="/stonecarouselitem3@2x.png"
          />
          <img
            className={styles.stonecarouselitem1Icon}
            loading="lazy"
            alt=""
            src="/stonecarouselitem4@2x.png"
          />
          <img
            className={styles.stonecarouselitem1Icon}
            alt=""
            src="/stonecarouselitem5@2x.png"
          />
          <img
            className={styles.stonecarouselitem1Icon}
            loading="lazy"
            alt=""
            src="/stonecarouselitem6@2x.png"
          />
        </div>
        <div className={styles.carouselcontrollers}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SectionStones.propTypes = {
  className: PropTypes.string,
};

export default SectionStones;
