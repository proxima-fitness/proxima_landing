import styles, { layout } from "../../style";
import visualOne from "../../../public/visualOne.png";

const FirstVisual = () => (
    <section
        id="first-visual"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className={ ` ${layout.section}` }
    >
        <div
            className={ layout.sectionInfoReverse }
            style={ {
                backgroundImage: `url(${visualOne})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                borderRadius: "30px",
                } }
        >
            <h2 className={ `${styles.heading2End} ss:pr-44 ss:pt-32 italic white-gradient` }>
                &quot;We take on the strength
                <br className="sm:block hidden" /> of that which we overcome.&quot;
            </h2>
        </div>
    </section>
);

export default FirstVisual;
