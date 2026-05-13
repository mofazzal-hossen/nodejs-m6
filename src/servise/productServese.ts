import path from "path";
import fs from "fs"


const filePath = path.join(process.cwd(), "./src/database/db.json")

export const readProduct = () => {
    // console.log(process.cwd());
    // console.log(filePath);

    const product = fs.readFileSync(filePath, "utf-8");
    console.log(product)
    return JSON.parse(product)
}