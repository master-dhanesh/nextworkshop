import path from "path";
import fs from "fs";
import Link from "next/link";
const Homepage = ({ products }) => {
    return (
        <div className="py-10 px-[10%] font-thin">
            {products.map((product) => (
                <div key={product.id}>
                    <Link className="text-xl" href={`/product/${product.id}`}>
                        {product.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    console.log("Re-Generating...");
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    if (!data || !data.products || data.products.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            products: data.products,
        },
        revalidate: 5,
    };
}

export default Homepage;
