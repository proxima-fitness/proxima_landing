// USE OF REACT QUERY IS STRICTLY CLIENT-SIDE, USE SUPABASE SSR FOR SERVER SIDE
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "./blog";

// GET ALL BLOGS
export const useBlogs = () => {
    return useQuery({
        queryKey: [ 'blogs' ],
        queryFn: () => getBlogs(),
    });
};
