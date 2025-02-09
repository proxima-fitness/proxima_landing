import { useQuery } from "@tanstack/react-query";
import { getExplorePagePrograms, getProgramThumbnailByID } from "./programs";
import { getExercises } from "./exercises";
import { getTrendingPrograms } from "./trending";

// Fetches all the programs for the Programs Page
export const useExplorePagePrograms = ( limit: number, filters?: TProgramFilters ) => {
    return useQuery({
        queryKey: ["explore-page-programs", filters],
        queryFn: () => getExplorePagePrograms(limit, filters),
    });
};

// FETCHES THE LIST OF TYPES OF EXERCISES AND METADATA
export const useExercises = () => {
    return useQuery({
        queryKey: [ 'existing_exercises' ],
        queryFn: () => getExercises(),
    });
};

// FETCHES A PROGRAM THUMBNAIL BY ID
export const useProgramThumbnail = (id: string) => {
    return useQuery({
        queryKey: ["program-thumbnail", id],
        queryFn: () => getProgramThumbnailByID(id),
    });
};

// FETCHES THE TRENDING PROGRAM NAMES DISPLAYED ON THE EXPLORE PAGE
export const useTrendingPrograms = () => {
    return useQuery({
        queryKey: ['trending-programs'],
        queryFn: () => getTrendingPrograms(),
    });
};
