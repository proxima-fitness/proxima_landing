"use client";

import { use } from "react";
import { ProgramCard } from "./ProgramCard";
import { usePrograms } from "@/api/hooks";
import { ProgramSearchBar } from "./ProgramSearchBar";
import { Card } from "../ui/card";


export default function ProgramsLayout({ initialPrograms }: { initialPrograms: Promise<TProgram[]> }) {

    const firstBatchPrograms = use(initialPrograms);

    const { data: programs = firstBatchPrograms } = usePrograms(42);

    return (
        <>
            <div className="pt-10">
                <Card className="p-4 bg-gray-100">
                    <h1 className="text-center pb-4 font-bold">Workout Programs</h1>
                    <ProgramSearchBar />
                </Card>
            </div>
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
