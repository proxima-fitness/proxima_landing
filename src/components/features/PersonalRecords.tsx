import { profile_mobile_device_white } from "../../assets";
import styles, { layout } from "../../style";

const PersonalRecords = () => (
  <section id="personalRecords" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" className={ `${layout.section} pt-10` }>
    <div className={layout.sectionInfoCentered}>
      <h2 className={styles.heading2PersonalRecords}>
        Social Media for <br className="sm:block hidden" /> Personal Records.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      On your Proxima Fitness profile, you can easily track your lifting progress and connect with other members. View your total lifts, followers, and who you're following all in one place. See your exercises with visuals, including your 1-rep max, and share your personal bests.
      </p>
    </div>
    <div className={layout.sectionImg}>
        <img src={ profile_mobile_device_white } alt="Program Creator Image" className="relative ss:max-w-[300px] max-w-[220px] h-auto z-[6]"/>
        <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

  </section>
);

export default PersonalRecords;
