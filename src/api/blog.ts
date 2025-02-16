import { supablog } from ".";

// GET BLOGS WITH CERTAIN LIMIT AND OFFSET
export const getBlogs = async (limit?: number) => {
    try {
        const { data: blogs, error: blogError } = await supablog
        .from('blogs')
        .select('*').order("created_at", {ascending: false}).limit(limit ?? 10);

        if (blogError) {
            console.error('Error fetching blogs:', blogError);
        }

        return blogs as TBlog[];

    } catch (error: unknown) {
        console.error('Error fetching blogs:', error);
    }
};


// GET BLOG BY ID
export const getBlogById = async (id: number) => {
    try {
        const { data: blogs, error: blogError } = await supablog
        .from('blogs')
        .select('*').eq("id", id);

        if (blogError) {
            console.error('Error fetching blogs by id', blogError);
        }

        return blogs[0] as TBlog;

    } catch (error: unknown) {
        console.error('Error fetching blog by id', error);
    }
};

// GET AN INDIVIDUAL MEDIA IMAGE BY FILENAME
export const getMediaByFileName = async (filename: string) => {
    try {
        const { data: mediaImage, error: mediaImageError } = await supablog
        .from('media')
        .select('*').eq("filename",filename);

        if (mediaImageError) {
            console.error('Error fetching Media Image:', mediaImageError);
        }

        return mediaImage as unknown as Blob;

    } catch (error: unknown) {
        console.error('Error fetching Media Image:', error);
    }
}

// GET PUBLIC URL FOR AN IMAGE IN STORAGE
export const getMediaPublicUrl = (filename: string) => {
    try {
        const { data: publicUrl } = supablog.storage
        .from('media')
        .getPublicUrl(filename);

        return publicUrl.publicUrl as string;

    } catch (error: unknown) {
        console.error('Error fetching Public Url:', error);
    }
}
