import { BlogCard } from "./BlogCard";
import { PopularBlogCard } from "./PopularBlogCard";

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
                { blogs.map((blog) => {
                    return (
                        <div key={ blog.id }>
                            <BlogCard blog={ blog }/>
                        </div>
                    );
                } ) }
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
