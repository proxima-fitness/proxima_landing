// USE OF REACT QUERY IS STRICTLY CLIENT-SIDE, USE SUPABASE SSR FOR SERVER SIDE
import { useQuery } from "@tanstack/react-query";
import { getBlogById, getBlogs, getMediaPublicUrl } from "./blog";

// GET ALL BLOGS
export const useBlogs = () => {
    return useQuery({
        queryKey: [ 'blogs' ],
        queryFn: () => getBlogs(),
    });
};

// GET ALL BLOGS USING SSR
export const useBlogsSSR = async () => {
    const fetchedBlogs = await getBlogs();
    const imageUrls = await Promise.all(fetchedBlogs.map(async (blog) => {
        if (blog.media_url) {
            return getMediaPublicUrl(blog.media_url);
        }
        return undefined;
    }))

    const blogs = fetchedBlogs.map((blog, index) => ({
        ...blog,
        image_url: imageUrls[index]
    }));

    return blogs as TBlog[];
};


export const useBlogById = async (id: string) => {
    const blog = await getBlogById(Number(id));
    return blog;
}
