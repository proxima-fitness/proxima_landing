
import { stats } from "../../assets/constants";
import styles from "../../style";

export const Stats: React.FC = () => {
    return (
        <section className={ `${styles.flexCenter} flex-row flex-wrap ${styles.paddingY}` }>
            {stats.map((stat) => (
                <div key={ stat.id } className={ `flex-1 flex justify-start items-center flex-row m-3` }>
                    <h4 className="font-main font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                        { stat.value }+
                    </h4>
                    <p style={ { color: "#00F6FF" } } className="font-main font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}
        </section>
    );
};
