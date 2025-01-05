import { useEffect, useState } from "react";
import { getExplorePagePrograms } from "../../api/programs";
import styles, { layout } from "../../style";
import { Button } from "../generic/Button";
import { motion } from "motion/react";
import { ViewModeThumbnails } from "./ViewModeThumbnails";

const FeatureCard = ({id, title, workout_duration, difficulty, equipment, index }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`transition group p-[4px] relative p-[4px] rounded-[20px] `}
  >
    <div className="relative z-10 flex flex-row p-4 rounded-[20px] bg-black h-[280px]">
      <div className="flex-1 flex flex-col">
        <h4 className="font-second font-semibold text-white text-[18px] leading-[23.4px] mb-1"
            style={ { display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" } }
        >
          { title }
        </h4>
        <p className="font-second font-normal text-dimWhite text-[12px] pt-2 leading-[24px]"
        >
          {equipment} &middot; {workout_duration} minutes &middot; { difficulty[0] }...
        </p>
        <ViewModeThumbnails programID={ id } />
      </div>
    </div>
  </motion.div>
);

const Business = () => {
  const [programs, setPrograms] = useState<TProgram[] | undefined>([]);
  // Fetch programs when the component mounts
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const width = window.innerWidth;
        if (width <= 768) {
            const fetchedPrograms = await getExplorePagePrograms(4);
            setPrograms(fetchedPrograms); // Update state with fetched programs
        } else {
            const fetchedPrograms = await getExplorePagePrograms(8);
            setPrograms(fetchedPrograms); // Update state with fetched programs
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section id="programs" className={layout.sectionTop} data-aos="fade-up"
      data-aos-anchor-placement="top-bottom" data-aos-once="true"
    >
      <div className={layout.sectionInfoCentered} style={ { display:"flex", justifyContent: "center", alignItems: "center" }    }>
        <h2 className={styles.heading2Programs}>
          Train Popular <span style={{ color: "#33bbcf" }}>Science Based</span> Programs
        </h2>
      </div>

      {/* <div className={`${layout.sectionImg} ss:pt-48 pt-10`}> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-14">
        {/* Map over the fetched programs */}
        {programs && programs.length > 0 ? (
          programs.map((program, index) => (
            <FeatureCard key={ program.id } {...program } index={index} />
          ))
        ) : (
          <p className="text-white">Loading programs...</p> // Loading state
        )}
      </div>
      <div className="flex items-center justify-center">
          <a href="https://app.proximafitness.com/"><Button text={"View loads more Programs"} styles={`mt-10`} /></a>
      </div>
    </section>
  );
};

export default Business;
