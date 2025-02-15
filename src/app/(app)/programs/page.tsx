import { Programs } from "@/components/features/Programs";
import styles from "../../../style";

export const metadata = {
    title: "Search Programs | Proxima Fitness",
    description: "Search from a list of Free Workout Programs on Proxima",
};

export default function ProgramsPage() {
    return (
        <div className={ `bg-white ${styles.paddingX} ${styles.flexCenter} flex-col` }>
            <div className={ `${styles.boxWidth}` }>
                <Programs />
            </div>
        </div>
    );
}
