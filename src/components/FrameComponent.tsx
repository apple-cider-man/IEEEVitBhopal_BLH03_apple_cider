import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.sectionStoryWrapper, className].join(" ")}>
      <div className={styles.sectionStory}>
        <div className={styles.containerWrapper}>
          <div className={styles.container}>
            <div className={styles.texts}>
              <div className={styles.storysectionheading}>
                <h1 className={styles.story}>STORY</h1>
                <h3 className={styles.theWorldOfContainer}>
                  <span className={styles.theWorldOf}>{`The World of `}</span>
                  <span>Verse Tarot Voyage</span>
                </h3>
              </div>
              <div className={styles.storysectiondescription}>
                A world where the multiverse is recognized. Verse Travelers and
                Verse Hunters who travel through time and space embark on an
                eventful journey to discover the truth of this world. Use the
                prompt, the key to world change, to define your own happy world!
              </div>
            </div>
            <div className={styles.absoluteillusts}>
              <img
                className={styles.tarot11Icon}
                alt=""
                src="/tarot11@2x.png"
              />
              <img className={styles.tarot2Icon} alt="" src="/tarot2@2x.png" />
              <img
                className={styles.mainillustIcon}
                loading="lazy"
                alt=""
                src="/mainillust@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.absolutebottomgradient} />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
