"use client";

import {
    Command,
    CommandInput,
    CommandList,
  } from "@/components/ui/command"
import { ProgramFilterGroup } from "./ProgramFilterGroup";
import { filterGroupMap } from "@/assets/constants";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";


export const ProgramSearchBar: React.FC = () => {

    const commandRef = useRef<HTMLInputElement>(null);
    const [clearFilters, setClearFilters] = useState(false);

    const [filterGroups, setFilterGroups] = useState(filterGroupMap);

    const handleClearFilters = (clearFilters: boolean) => {
        setClearFilters(clearFilters);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key.toLowerCase() === "k") {
                event.preventDefault();
                commandRef.current?.focus();
            } else if (event.ctrlKey && event.key.toLowerCase() === "c") {
                event.preventDefault();
                handleClearFilters(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <div className="max-sm:w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-row max-sm:flex-col items-center justify-center">
                <div className="flex-1"></div>
                <div className="w-[60%] max-sm:w-full">
                    <Command>
                        <CommandInput ref={ commandRef } placeholder="Search for a program or coach... [Ctrl + k]" />
                        <CommandList>
                            {/* <CommandEmpty>No results found.</CommandEmpty> */}
                            {/* <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                            </CommandGroup> */}
                        </CommandList>
                    </Command>
                </div>
                <div className="flex-1 flex items-center justify-start">
                    <Button onClick={ () => setClearFilters(true) } className={ "text-[#37BCCF]" } variant="ghost">Reset Filters [Ctrl + c]</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 max-sm:grid-cols-1">
                { Object.keys(filterGroups).map((group) => (
                    <ProgramFilterGroup key={ group } filter={ filterGroups[group] } clearFilters={ clearFilters } handleClearFilters={ handleClearFilters } />
                ) ) }
            </div>
        </div>
    );
};
