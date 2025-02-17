"use client";

import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { PopularBlogCard } from "./PopularBlogCard";
import {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useBlogs } from "@/api/hooks";
import { use, useState } from "react";


const LIMIT = 10;

export default function BlogLayout({ initialBlogs }: { initialBlogs: Promise<TBlog[]> }) {

    const firstPageBlogs = use(initialBlogs);

    const [offset, setOffset] = useState(0);
    const { data: blogs = firstPageBlogs, isFetching } = useBlogs(LIMIT, offset);

    const handlePageChange = (newOffset: number) => {
        setOffset(newOffset);
    };

    return (
        <>
        <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1">
            <div className="col-span-2">
                <div>
                    { blogs.map((blog) => {
                        return (
                            <Link
                                target="_self"
                                rel="noopener noreferrer"
                                href={`blog/${blog.id}/${blog.title.trim().replace(/\s+/g, '-').toLowerCase()}`} key={ blog.id }
                            >
                                <BlogCard blog={ blog }/>
                            </Link>
                        );
                    } ) }
                </div>
                <Pagination className="h-[100px]">
                    <PaginationContent>
                        <PaginationPrevious
                            className="h-[45px] text-lg"
                            href="#"
                            onClick={() => handlePageChange(Math.max(0, offset - LIMIT))}
                        />
                        {[1, 2, 3, "...", 10].map((page, index) => (
                            <PaginationLink
                                key={index}
                                className="h-[45px] text-lg"
                                href="#"
                                onClick={() =>
                                    typeof page === "number" ? handlePageChange((page - 1) * LIMIT) : null
                                }
                            >
                                {page}
                            </PaginationLink>
                        ))}
                        <PaginationNext
                            className="h-[45px] text-lg"
                            href="#"
                            onClick={() => handlePageChange(offset + LIMIT)}
                        />
                    </PaginationContent>
                </Pagination>
            </div>
            <div className="sm:border-l sm:border-gray-300 flex flex-col justify-start items-start px-4">
                <span className="font-bold text-2xl pb-8">Popular Blogs</span>
                { blogs.map((blog) => {
                    return (
                        <Link
                            key={ blog.id }
                            target="_self"
                            rel="noopener noreferrer"
                            href={`blog/${blog.id}/${blog.title.trim().replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            <PopularBlogCard blog={ blog }  />
                        </Link>
                    );
                } ) }
            </div>
        </div>

        </>
    );
};
