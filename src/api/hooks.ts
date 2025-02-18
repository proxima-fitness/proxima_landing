// USE OF REACT QUERY IS STRICTLY CLIENT-SIDE, USE SUPABASE SSR FOR SERVER SIDE
import { useQuery } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "./blog";
import { getExplorePagePrograms, getPrograms, getProgramThumbnailByID } from "./programs";
import { getUserFullName } from "./users";

/*********************************/
/** CLIENT SIDE RENDERED HOOKS **/
/*********************************/

// GET ALL BLOGS
export const useBlogs = (limit: number, offset: number) => {
    return useQuery({
        queryKey: [ 'blogs', limit, offset ],
        queryFn: () => getBlogs(limit, offset),
    });
};

// GET BLOG BY ID
export const useBlogById = async (id: string) => {
    const blog = await getBlogById(Number(id));
    return blog;
}

// FETCHES THE FULL NAME OF A USER BY ID
export const useUserFullName = (id: string, id_type: "program" | "user") => {
    return useQuery({
        queryKey: ["full-name", id, id_type],
        queryFn: () => getUserFullName(id, id_type),
        enabled: !!id,
    });
};

// FETCHES THE PROGRAM NAMES DISPLAYED ON THE EXPLORE PAGE
export const useExplorePagePrograms = (limit?: number) => {
    return useQuery({
        queryKey: ['explore-page-programs'],
        queryFn: () => getExplorePagePrograms(limit),
    });
};

// FETCHES THE PROGRAM NAMES DISPLAYED ON THE PROGRAMS PAGE WITH THUMBNAILS
export const usePrograms = (limit?: number) => {
    return useQuery({
        queryKey: ['programs'],
        queryFn: () => getPrograms(limit),
    });
};

// FETCHES A PROGRAM THUMBNAIL BY ID
export const useProgramThumbnail = (id: string) => {
    return useQuery({
        queryKey: ["program-thumbnail", id],
        queryFn: () => getProgramThumbnailByID(id),
    });
};


/*********************************/
/** SERVER SIDE RENDERED HOOKS **/
/*********************************/

// GET ALL BLOGS USING SSR
export const useBlogsSSR = async () => {
    const blogsWithImage = await getBlogs();
    return blogsWithImage as TBlog[];
};

export const useProgramsSSR = async () => {
    const programs = await getExplorePagePrograms(42);

    const programsWithThumbnails = await Promise.all(
        programs.map( async (program) => {
            const thumbnail = await getProgramThumbnailByID(program.id);
            return {...program, thumbnail};
        })
    );

    return programsWithThumbnails as TProgram[];
}
