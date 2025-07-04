import Link from "next/link";

const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const jsonres = await res.json();
    return jsonres;
};

export async function getStaticProps(context) {
    console.log("Re-Rendered!");
    const products = await getproducts();
    return {
        props: {
            products: products,
        },
        revalidate: 5,
    };
}

const products = (props) => {
    return (
        <div className="px-[10%] py-10">
            {props.products.map((d) => (
                <p className="p-2 bg-zinc-200 mb-3 rounded" key={d.id}>
                    <Link href={`/products/${d.id}`}>{d.title}</Link>
                </p>
            ))}
        </div>
    );
};

export default products;
