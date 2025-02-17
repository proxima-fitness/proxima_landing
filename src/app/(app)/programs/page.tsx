import ProgramsLayout from "@/components/programs/ProgramsLayout";
import styles from "../../../style";
import { useProgramsSSR } from "@/api/hooks";

export const metadata = {
    title: "Search Programs | Proxima Fitness",
    description: "Search from a list of Free Workout Programs on Proxima",
};

export default function ProgramsPage() {

    const initialPrograms = useProgramsSSR();

    return (
        <div className={ `bg-white ${styles.paddingX} ${styles.flexCenter} flex-col` }>
            <div className={ `${styles.boxWidth}` }>
                <ProgramsLayout initialPrograms={ initialPrograms } />
            </div>
        </div>
    );
}
