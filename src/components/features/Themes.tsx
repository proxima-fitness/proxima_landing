import styles, { layout } from "../../style";
import ThemeSlider from "./ThemeSlider";

const Themes = () => (
  <section id="themes" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" className={layout.section}>
    <div className={layout.sectionCarousel}>
        <ThemeSlider />
    </div>

    <div className={layout.sectionInfoCentered}>
      <h2 className={styles.heading2Themes}>
        More than just <br className="sm:block hidden" />Light Mode
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In addition to the popular <span style={ { color: "white" } }>Light</span> and <span style={ { color: "grey" } }>Dark</span> modes, we've added two unique themes to fit your style: <span style={ { color: "#5ce1e6" } }>Classic Blue</span> and <span style={ { color: "#E4C7B7" } }>Pastel Pink</span>. Whether you're looking for a bold, timeless look or a soft, calming aesthetic, we've got a theme to match your preferences.
      </p>
    </div>
  </section>
);

export default Themes;
