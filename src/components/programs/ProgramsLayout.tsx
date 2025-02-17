"use client";
import { use } from "react";
import { ProgramCard } from "./ProgramCard";
import { useExplorePagePrograms } from "@/api/hooks";
import { ProgramSearchBar } from "./ProgramSearchBar";


export default function ProgramsLayout({ initialPrograms }: { initialPrograms: Promise<TProgram[]> }) {

    const firstBatchPrograms = use(initialPrograms);
    const { data: programs = firstBatchPrograms, isFetching } = useExplorePagePrograms(21);


    return (
        <>
            <ProgramSearchBar />
            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 py-8">
                { programs.map((program) => (
                    <ProgramCard
                        key={program.id}
                        program={ program }
                    />
                ))}
            </div>
        </>
    );
};
