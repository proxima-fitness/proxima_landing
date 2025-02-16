"use client";

import { useBlogs } from "@/api/hooks";


export const BlogTest: React.FC = () => {

    const { data: blogs, error: blogsError } = useBlogs();

    console.log(blogs);

    return (
        <></>
    );
};
