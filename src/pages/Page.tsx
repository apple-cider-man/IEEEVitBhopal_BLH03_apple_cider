import FrameComponent from "../components/FrameComponent";
import Header from "../components/Header";
import SectionGuardian from "../components/SectionGuardian";
import SectionMission from "../components/SectionMission";
import FrameComponent1 from "../components/FrameComponent1";
import SectionStones from "../components/SectionStones";
import styles from "./Page.module.css";

const Page = () => {
  return (
    <div className={styles.page}>
      <img className={styles.bg3Icon} alt="" src="/bg3@2x.png" />
      <img className={styles.bg2Icon} alt="" src="/bg3@2x.png" />
      <img className={styles.bg1Icon} alt="" src="/bg3@2x.png" />
      <section className={styles.frameParent}>
        <FrameComponent />
        <Header />
      </section>
      <section className={styles.sectionGuardianParent}>
        <SectionGuardian />
        <div className={styles.sectionMissionParent}>
          <SectionMission />
          <FrameComponent1 />
          <SectionStones />
        </div>
      </section>
      <footer className={styles.bottomgrad} />
      <section className={styles.pageInner}>
        <div className={styles.picParent}>
          <img
            className={styles.picIcon}
            loading="lazy"
            alt=""
            src="/pic@2x.png"
          />
          <div className={styles.moreInfoParent}>
            <h1 className={styles.moreInfo}>More Info</h1>
            <div className={styles.thisGameDoesntContainer}>
              <span>{`This game doesn't exist. This is a page I created in the process of studying design and programming. This design is published as my Figma file or web page. If you would like to know more about the author of this page, please visit `}</span>
              <a
                className={styles.myWebsite}
                href="https://masa-sumimoto.com/"
                target="_blank"
              >
                <span className={styles.myWebsite1}>my website</span>
              </a>
              <span>.</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.masaakiSumimotoAll}>
          © 2024 Masaaki Sumimoto. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Page;
