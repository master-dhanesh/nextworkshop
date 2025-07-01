import Link from "next/link";

export async function getStaticProps(context) {
    const res = await fetch("https://fakestoreapi.com/products?_limit=10");
    const strres = await res.json();
    return {
        props: {
            posts: strres,
        },
    };
}

const Homepage = (props) => {
    return (
        <div className="py-10 px-[10%] font-thin">
            <h1 className="text-3xl">Posts</h1>
            {props.posts.map((post) => (
                <p className="p-2 bg-zinc-200 rounded mb-3" key={post.id}>
                    <Link href={`/posts/${post.id}`}> {post.title}</Link>
                </p>
            ))}
        </div>
    );
};

export default Homepage;
