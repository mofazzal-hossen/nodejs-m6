import type { IncomingMessage, ServerResponse } from "http";
import { product } from "../controller/product";


export const routeHandler = (req: IncomingMessage , res:ServerResponse)=>{
    // console.log(req.url); // what now upcoming   '/', '/user', "post", "Delete"
    // console.log(req.method); // "Get","POST", "DELETE", "PATCH" 


    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
        // console.log("this is root router ")

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "this is root route" }));

        
    } else if (url?.startsWith('/product')) {
       product(req,res)

    } else {
        res.writeHead(404, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: " route not found" }))
    }
}