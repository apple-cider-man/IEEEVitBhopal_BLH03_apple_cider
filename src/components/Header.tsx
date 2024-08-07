import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerleftcol} />
      <div className={styles.headerrightcol}>
        <nav className={styles.headergnav}>
          <div className={styles.story}>STORY</div>
          <div className={styles.mission}>MISSION</div>
          <div className={styles.coreTarot}>CORE TAROT</div>
          <div className={styles.stones}>STONES</div>
          <div className={styles.download}>DOWNLOAD</div>
        </nav>
        <div className={styles.headerplaynowbtn}>
          <div className={styles.playnowbtntxt}>PLAY NOW</div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
