import styles, { layout } from "../../style";
import visualTwo from "../../../public/visualTwo.png";

const SecondVisual = () => (
    <section
        id="second-visual"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className={ ` ${layout.section}` }
    >
        <div className={ layout.sectionInfo } style={ {
        height: "500px",
        backgroundImage: `url(${visualTwo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "30px",
        } }
    >
            <h2 className={ `${styles.heading2} italic ss:pl-44 ss:pt-20 white-gradient` }>
                &quot;Focus on the process,<br className="sm:block hidden" /> not just the outcome.&quot;
            </h2>
        </div>
    </section>
);

export default SecondVisual;
