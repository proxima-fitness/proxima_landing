
import { stats } from "../../assets/constants";
import styles from "../../style";

import React, { useEffect, useState } from "react";

interface CounterProps {
    value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
    const [count, setCount] = useState(0);
    const duration = 400;

    useEffect(() => {
        let isMounted = true;

        const stepTime = (duration / Math.max(value, 1));
        let currentCount = 0;

        const interval = setInterval(() => {
            if (isMounted && currentCount < value) {
                if (value === 100) {
                    currentCount += 1;
                } else if (value === 2000) {
                    currentCount += 20;
                }
                setCount(currentCount);
            } else {
                clearInterval(interval);
            }
        }, stepTime);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [value]);

    return <>{count}+</>;
};

const Stats: React.FC = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap ${styles.paddingY}`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                    <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                        <Counter value={stat.value} />
                    </h4>
                    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
