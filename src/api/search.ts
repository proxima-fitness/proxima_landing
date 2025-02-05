import { supabase } from ".";

/***** GET REQUESTS *****/

// GET SEARCH RESULTS FOR PROGRAMS
export const getProgramsSearchResults = async (searchQuery: string) => {
    try {
        const { data: searchResults, error: searchError } = await supabase
            .rpc('search_programs_by_prefix', { prefix: searchQuery.trim() });
        if (searchError) {
            console.error("Error fetching program search results", searchError);
            return [];
        }
        return searchResults;
    } catch (error: unknown) {
        console.error("Error fetching program search results", error);
        return [];
    }
};

