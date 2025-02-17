"use client";

import { Button } from "@/components/ui/button"
import { intermediate_ppl } from "public";
import { FullName } from "../generic/FullName";

interface IProps {
    program: TProgram;
}

export const ProgramCard: React.FC<IProps> = (props) => {

    const {
        program,
    } = props;

    return (
        <>
            <div className="w-full max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
                    <img
                        src={ ( intermediate_ppl as any).src }
                        alt="Product Image"
                        className="w-full h-[200px] object-cover"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl font-semibold overflow-hidden text-ellipsis line-clamp-1">{ program.title }</h3>
                        <FullName id={ program.id } id_type={"program"} />
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">{ program.workout_duration }</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

