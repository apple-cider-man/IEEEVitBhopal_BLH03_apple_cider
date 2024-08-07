import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({
  className = "",
  propFlex,
  propAlignSelf,
  stone1,
  stone2,
  stone3,
  prop,
  propWidth,
  prop1,
}) => {
  const optionsStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.options, className].join(" ")} style={optionsStyle}>
      <div className={styles.stones}>
        <img className={styles.stone1Icon} loading="lazy" alt="" src={stone1} />
        <img className={styles.stone2Icon} loading="lazy" alt="" src={stone2} />
        <img className={styles.stone1Icon} loading="lazy" alt="" src={stone3} />
      </div>
      <div className={styles.numbers}>
        <div className={styles.item100}>
          <div className={styles.emptyTriple}>1</div>
        </div>
        <div className={styles.item10}>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.item10}>
          <div className={styles.div1}>{prop1}</div>
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
  stone1: PropTypes.string,
  stone2: PropTypes.string,
  stone3: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Options;
