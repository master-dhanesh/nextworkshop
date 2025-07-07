import fs from "fs";
import path from "path";

const dbpath = () => {
    return path.join(process.cwd(), "data", "products.json");
};

const datareader = () => {
    const strdata = fs.readFile(dbpath());
    return JSON.parse(strdata);
};

function _product(req, res) {
    if (req.method === "POST") {
        const filepath = dbpath();
        const data = datareader();

        fs.writeFileSync(filepath, JSON.stringify([...data, req.body]));
        res.status(200).json({ message: "Write" });
    }

    if (req.method === "GET") {
        const data = datareader();
        res.status(200).json({ message: "Read", products: data });
    }
}

export default _product;
