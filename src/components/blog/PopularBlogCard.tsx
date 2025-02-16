
interface IProps {
    blog: TBlog;
}

export const PopularBlogCard: React.FC<IProps> = (props) => {

    const  {
        blog,
    } = props;

    return (
        <div key={ blog.id }>
            <div className="pb-8">
                { blog.title }
            </div>
        </div>
    );
};



