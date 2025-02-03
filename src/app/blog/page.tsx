import Link from "next/link";

const blogPosts = [
    { title: "First Post", slug: "first-post" },
    { title: "Second Post", slug: "second-post" },
];

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={ post.slug }>
                        <Link href={ `/blog/${post.slug}` }>{post.title}</Link>
                    </li>
                ) ) }
            </ul>
        </div>
    );
}
