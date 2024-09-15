import styles, { layout } from "../../style";

const PersonalRecords = () => (
  <section id="personalRecords" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Social Media for <br className="sm:block hidden" /> Personal Records.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      On your Proxima Fitness profile, you can easily track your lifting progress and connect with other members. View your total lifts, followers, and who you're following all in one place. See your exercises with visuals, including your 1-rep max, and share your personal bests.
      </p>
    </div>
  </section>
);

export default PersonalRecords;
