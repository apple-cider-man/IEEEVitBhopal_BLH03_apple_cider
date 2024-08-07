import PropTypes from "prop-types";
import styles from "./SectionGuardian.module.css";

const SectionGuardian = ({ className = "" }) => {
  return (
    <div className={[styles.sectionGuardian, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.leftcol}>
          <img
            className={styles.dreamshaperV7AGoddessBeautIcon}
            loading="lazy"
            alt=""
            src="/dreamshaper-v7-a-goddess-beautiful-girl-with-smile-who-guides-0-1@2x.png"
          />
        </div>
        <div className={styles.rightcol}>
          <h2 className={styles.starGuardian}>Star Guardian</h2>
          <div className={styles.theUniverseIs}>
            The universe is vast, and sometimes it can make you feel isolated.
            In such times, listen to the voice of the Star Guardian. He is a
            being who will protect and inspire you. Surely, his teachings will
            become a 'Philosophy of Courage' to survive in this harsh universe.
          </div>
        </div>
      </div>
      <img
        className={styles.shootingstarsIcon}
        loading="lazy"
        alt=""
        src="/shootingstars@2x.png"
      />
      <div className={styles.decowaves}>
        <div className={styles.storywave1}>
          <img className={styles.wavevectorIcon} alt="" src="/wavevector.svg" />
        </div>
        <div className={styles.storywave2}>
          <img
            className={styles.wavevectorIcon}
            alt=""
            src="/wavevector-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

SectionGuardian.propTypes = {
  className: PropTypes.string,
};

export default SectionGuardian;
