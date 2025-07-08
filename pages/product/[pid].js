import React from "react";
import path from "path";
import fs from "fs";

async function getData() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data;
}

const ProductDetailPage = ({ product }) => {
    return (
        <div className="py-10 px-[10%] font-thin">
            <h1 className="text-2xl">{product.title}</h1>
            <p className="text-lg">{product.description}</p>
        </div>
    );
};

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product) => product.id);
    const params = ids.map((id) => ({ params: { pid: id } }));
    return {
        paths: params,
        fallback: "blocking",
    };
}
export async function getStaticProps(context) {
    const { params } = context;
    const data = await getData();
    const productId = params.pid;
    console.log("Generating page for product:", productId);

    const product = data.products.find((product) => product.id === productId);
    if (!product) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            product,
        },
    };
}

export default ProductDetailPage;
