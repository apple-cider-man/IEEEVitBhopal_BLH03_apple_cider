import Options from "./Options";
import PropTypes from "prop-types";
import styles from "./SectionMission.module.css";

const SectionMission = ({ className = "" }) => {
  return (
    <div className={[styles.sectionMission, className].join(" ")}>
      <div className={styles.missionWrapper}>
        <div className={styles.missionParent}>
          <h1 className={styles.mission}>MISSION</h1>
          <div className={styles.missionDescription}>
            <h3 className={styles.travelThroughVerses}>
              Travel through verses and find out the truth
            </h3>
            <div className={styles.letsProjectYourself}>
              Let's project yourself onto Tarot and travel around this world.
              There are countless worlds. The goal is to fulfill the mission of
              each character. It might be a good idea to just do business with
              travelers. you are always free. However, danger is always around
              the corner. Someone other than you or a monster may threaten your
              life. The important thing is to enjoy this world for a long time.
            </div>
          </div>
        </div>
        <div className={styles.bg}>
          <img className={styles.bgpicIcon} alt="" src="/bgpic@2x.png" />
          <div className={styles.decowaves}>
            <div className={styles.storywave1}>
              <img
                className={styles.wavevectorIcon}
                alt=""
                src="/wavevector-2.svg"
              />
            </div>
            <div className={styles.storywave2}>
              <img
                className={styles.wavevectorIcon}
                alt=""
                src="/wavevector-3.svg"
              />
            </div>
            <div className={styles.inputButton}>
              <div className={styles.btn2}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className={styles.inputsParent}>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur. Mi vel dignissim nec
                    si
                  </div>
                </div>
                <div className={styles.negativeinput}>
                  <div className={styles.n}>N</div>
                  <div className={styles.input1}>
                    <div className={styles.handThumbs}>hand, thumbs</div>
                  </div>
                </div>
              </div>
              <div className={styles.btn11Wrapper}>
                <div className={styles.btn11}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                </div>
              </div>
              <div className={styles.attackbtn}>
                <div className={styles.attack}>ATTACK</div>
              </div>
            </div>
          </div>
          <div className={styles.globalMenuWrapperParent}>
            <div className={styles.globalMenuWrapper}>
              <div className={styles.menuIconsParent}>
                <div className={styles.menuIcons}>
                  <div className={styles.globalmenuitem}>
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className={styles.globalmenuitem}>
                    <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  </div>
                </div>
                <div className={styles.optionsWrapper}>
                  <Options
                    stone1="/stone1@2x.png"
                    stone2="/stone2@2x.png"
                    stone3="/stone3@2x.png"
                    prop="2"
                    prop1="4"
                  />
                </div>
              </div>
            </div>
            <div className={styles.nameWrapperParent}>
              <div className={styles.nameWrapper}>
                <div className={styles.name}>T-303s</div>
              </div>
              <div className={styles.decotriParent}>
                <img className={styles.decotriIcon} alt="" src="/decotri.svg" />
                <div className={styles.shadow} />
                <img
                  className={styles.cardIcon}
                  loading="lazy"
                  alt=""
                  src="/card@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.bgInner}>
            <div className={styles.barPairParent}>
              <div className={styles.barPair}>
                <div className={styles.barContent}>
                  <div className={styles.basebar} />
                  <div className={styles.parambar} />
                </div>
              </div>
              <div className={styles.barPair1}>
                <div className={styles.barContent}>
                  <div className={styles.basebar} />
                  <div className={styles.parambar1} />
                </div>
              </div>
              <div className={styles.nestedWrapperParent}>
                <div className={styles.nestedWrapper}>
                  <div className={styles.nestedNameContent}>
                    <div className={styles.nameContainer}>
                      <h2 className={styles.name1}>Lia</h2>
                    </div>
                    <div className={styles.decotriParent}>
                      <div className={styles.shadow1} />
                      <img
                        className={styles.cardIcon}
                        loading="lazy"
                        alt=""
                        src="/card-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.levelWrapperParent}>
                  <div className={styles.levelWrapper}>
                    <div className={styles.levelContent}>
                      <div className={styles.lv}>Lv</div>
                    </div>
                    <div className={styles.div}>32</div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.optionsParent}>
                      <Options
                        propFlex="unset"
                        propAlignSelf="stretch"
                        stone1="/stone1-1@2x.png"
                        stone2="/stone2-1@2x.png"
                        stone3="/stone3-1@2x.png"
                        prop="8"
                        propWidth="10px"
                        prop1="2"
                      />
                      <div className={styles.btn3Wrapper}>
                        <div className={styles.btn3}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidecolWrapper}>
        <div className={styles.sidecol}>
          <div className={styles.listenToTheContainer}>
            <span>{`Listen to the voice of the `}</span>
            <b>star guardian</b>
            <span>....</span>
          </div>
          <b className={styles.isYourPrompt}>IS YOUR PROMPT ACCURATE?</b>
          <b className={styles.fightWithA}>FIGHT WITH A STRONGER PROMPT!</b>
          <b className={styles.flyAroundThe}>
            FLY AROUND THE UNIVERSE MORE AND FIND LOTS OF TAROT CARDS...
          </b>
          <img className={styles.hollineIcon} alt="" src="/holline.svg" />
          <img className={styles.varlineIcon} alt="" src="/varline.svg" />
        </div>
      </div>
    </div>
  );
};

SectionMission.propTypes = {
  className: PropTypes.string,
};

export default SectionMission;
