import { useRouter } from "next/router";

const SingleProduct = () => {
    const router = useRouter();
    console.log(router);
    return <div>SingleProduct By ID</div>;
};

export default SingleProduct;
