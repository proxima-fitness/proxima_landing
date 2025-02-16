import styles from "@/style";
import { GetStarted } from "../header/GetStarted";
import { useBlogById } from "@/api/hooks";
import { convertSupabaseDateToReadable } from "@/utils/helpers";

interface IProps {
    id: string;
}

export const BlogSlugLayout: React.FC<IProps> = async (props) => {

    const { id } = props;
    const blog = await useBlogById(id);

    return (
        <>
        <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
                <div className="text-4xl font-bold py-2">
                    {blog.title}
                </div>
                <div className="py-2 text-sm">
                    Created by the Proxima Fitness Team
                </div>
                <div className="italic text-sm">
                    { convertSupabaseDateToReadable(blog.created_at) } | {blog.time} Mins | 205 Views

                </div>
                <div className="py-8">
                    {blog.content}
                </div>
            </div>
            <div className="rounded-xl bg-gray-900 border-l border-gray-300 flex flex-col text-center justify-center items-center px-8">
                <div className="flex-1 flex flex-col">
                    <h2 className={ styles.heading2 }>Download the App For Free</h2>
                    <p className={ `${styles.paragraph}` }>
                        It takes less than a minute
                    </p>
                </div>
                <div className="pt-4">
                    <GetStarted noBorder={ true } />
                </div>
            </div>
        </div>

        </>
    );
};
