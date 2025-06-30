import Link from "next/link";
import { useRouter } from "next/router";

const Homepage = () => {
    const router = useRouter();
    return (
        <div>
            <ul>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link
                    href={{
                        pathname: "/about",
                    }}
                >
                    Product one
                </Link>
            </ul>
            <button onClick={() => router.push("/products")}>
                Click to go to Products
            </button>
        </div>
    );
};

export default Homepage;
