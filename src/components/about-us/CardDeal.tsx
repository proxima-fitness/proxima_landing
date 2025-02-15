
import styles, { layout } from "../../style";

export const CardDeal: React.FC = () => {
    return (
        <section id="about_us" className={ layout.section }>
            <div className={ layout.sectionInfo }>
                <h2 className={ styles.heading2 }>
                    About Us <br className="sm:block hidden" />
                </h2>
                <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
                    Jack is a Software Developer with a deep passion for Bodybuilding. He started Proxima initally on his own to help beat his intermediate plateau,
                    and believes strongly that Proxima is what did it.
                </p>
            </div>
        </section>
    );

};
