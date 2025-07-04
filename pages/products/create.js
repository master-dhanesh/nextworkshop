import React from "react";

export async function getStaticProps() {
    const data = await fetch("http://localhost:3000/api/product");
    const res = await data.json();
    console.log(res);
    return {
        props: {
            products: res.products,
        },
    };
}
const Create = (props) => {
    console.log(props);
    const CreateProductHandler = async () => {
        const newProduct = {
            id: "783kejs",
            name: "Product 1",
            price: 74,
        };
        await fetch("http://localhost:3000/api/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
        });
    };
    return (
        <div>
            <button onClick={CreateProductHandler}>Create Product</button>
            <hr />
            {props.products.map((p, i) => (
                <p key={i}>{JSON.stringify(p)}</p>
            ))}
        </div>
    );
};

export default Create;
