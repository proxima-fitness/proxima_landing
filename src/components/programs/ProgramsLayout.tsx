"use client";

import { use } from "react";
import { ProgramCard } from "./ProgramCard";
import { usePrograms } from "@/api/hooks";
import { ProgramSearchBar } from "./ProgramSearchBar";
import { Card } from "../ui/card";
import Link from "next/link";


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
                    <Link
                        key={program.id}
                        target="_self"
                        rel="noopener noreferrer"
                        href={`programs/${program.id}/${program.title.trim().replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <ProgramCard
                            program={ program }
                        />
                    </Link>
                ))}
            </div>
        </>
    );
};
