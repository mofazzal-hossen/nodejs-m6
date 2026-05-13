import type { IncomingMessage, ServerResponse, } from "http";
import { readProduct } from "../servise/productServese";

export const product = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;

    if (url === "/product" && method === "GET") {


        // const product = [{
        //     id: 1,
        //     name: "musa -2",
        // }];

        const product = readProduct();

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "product retrieved successful ", data: product }))
    }

}