import { supablog } from ".";

export const getBlogs = async () => {
    try {
        const { data: blogs, error: blogError } = await supablog
        .from('blogs')
        .select('*');

        if (blogError) {
            console.error('Error fetching blogs:', blogError);
        }

        return blogs;

    } catch (error: unknown) {
        console.error('Error fetching blogs:', error);
    }
};
