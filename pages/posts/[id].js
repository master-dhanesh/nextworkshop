export async function getStaticPaths() {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const strres = await res.json();
    const paths = strres.map((post) => ({
        params: {
            id: post.id.toString(),
        },
    }));
    return {
        paths: paths,
        fallback: true,
    };
}
export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const strres = await res.json();
    console.log(strres);
    return {
        props: {
            post: strres,
        },
    };
}

const PostDetails = (props) => {
    console.log(props);
    return <div>PostDetails</div>;
};

export default PostDetails;
