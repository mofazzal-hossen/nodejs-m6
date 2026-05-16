import type { IncomingMessage, ServerResponse, } from "http";
import { insertProduct, readProduct } from "../servise/productServese";
import type { IProduct } from "../types/product.types";
import { parseBody } from "../utility/parsBody";


export const product = async (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;
    //product ==> /product/1 => []

    const urlParts = url?.split("/")
    // console.log(urlParts)
    const id = urlParts && urlParts[1] === "product" ? Number(urlParts[2]) : null;
    // console.log("this is a actual id :", id)




    //Get all Product
    if (url === "/product" && method === "GET") {

        const product = readProduct();

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "product retrieved successful ", data: product }))

    } else if (method === "GET" && id !== null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "product retrieved successful ", data: product }))


    } else if (method === "POST" && url === '/products') {
        const body = await parseBody(req)
        const products = readProduct();

        const newProduct = {
            id: Date.now(),
            ...body,
        }
        // console.log(newProduct)
        products.push(newProduct)
        insertProduct(products)
        // console.log(products)

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: "product retrieved successful ",
            data: newProduct
        }))

    }


}