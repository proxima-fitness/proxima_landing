import styles, { layout } from "../../style";
import ThemeSlider from "./ThemeSlider";

const Themes = () => (
  <section id="themes" className={layout.section}>
    <div className={layout.sectionCarousel}>

        <ThemeSlider />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        More than just <br className="sm:block hidden" />Light Mode
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In addition to the popular <span style={ { color: "white" } }>Light</span> and <span style={ { color: "grey" } }>Dark</span> modes, we've added two unique themes to fit your style: <span style={ { color: "#5ce1e6" } }>Classic Blue</span> and <span style={ { color: "#E4C7B7" } }>Pastel Pink</span>. Whether you're looking for a bold, timeless look or a soft, calming aesthetic, we've got a theme to match your preferences.
      </p>
    </div>
  </section>
);

export default Themes;
