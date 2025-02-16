import { convertSupabaseDateToReadable } from "@/utils/helpers";

interface IProps {
    blog: TBlog;
    // media: Blob;
}

export const BlogCard: React.FC<IProps> = (props) => {

    const {
        blog,
        // media,
    } = props;

    return (
        <div key={ blog.id } className="py-8 border-b border-gray-300 flex flex-row items-center justify-between">
            <div className="flex-[3]">
                <div className="font-bold pb-2 text-3xl">
                    { blog.title }
                </div>
                <div className="pb-2 text-lg">
                    { blog.subtitle }
                </div>
                <div className="italic">
                    { convertSupabaseDateToReadable(blog.created_at) } | { blog.time } Mins
                </div>
            </div>
            <div className="flex-[1]">
                <img className="h-[200px] w-[200px] rounded-lg"  src={ blog.image_url }></img>
            </div>

        </div>
    );
};
