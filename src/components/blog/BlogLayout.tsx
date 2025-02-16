import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { PopularBlogCard } from "./PopularBlogCard";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


interface IProps {
    blogs: TBlog[];
}

export const BlogLayout: React.FC<IProps> = (props) => {

    const {
        blogs,
    } = props;

    return (
        <>
        <div className="grid grid-cols-3 gap-12">
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
                        <PaginationPrevious className="h-[45px] text-lg" href="#" />
                        <PaginationLink className="h-[45px] text-lg" href="#">1</PaginationLink>
                        <PaginationLink className="h-[45px] text-lg" href="#">2</PaginationLink>
                        <PaginationLink className="h-[45px] text-lg" href="#">3</PaginationLink>
                        <PaginationEllipsis className="h-[45px] text-lg" />
                        <PaginationLink className="h-[45px] text-lg" href="#">10</PaginationLink>
                        <PaginationNext className="h-[45px] text-lg" href="#" />
                    </PaginationContent>
                </Pagination>
            </div>
            <div className="border-l border-gray-300 flex flex-col justify-start items-start px-4">
                <span className="font-bold text-2xl pb-8">Popular Blogs</span>
                { blogs.map((blog) => {
                    return (
                        <div key={ blog.id }>
                            <PopularBlogCard blog={ blog }  />
                        </div>
                    );
                } ) }
            </div>
        </div>

        </>
    );
};
