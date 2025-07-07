import Head from "next/head";
import Image from "next/image";
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: "1" } }],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return {
        props: {
            product: product,
        },
        revalidate: 5,
    };
}
const ProductDetails = (props) => {
    if (!props.product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <Head>
                <title>Ecommerce | {props.product.title}</title>
                <meta name="description" content="" />
            </Head>
            <h1> {props.product.title}</h1>
            <Image
                alt={props.product.image}
                src={props.product.image}
                width={100}
                height={100}
            />
        </div>
    );
};

export default ProductDetails;
