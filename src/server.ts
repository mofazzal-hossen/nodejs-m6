import { createServer, IncomingMessage, Server } from "http";




const server: Server = createServer((req: IncomingMessage, res) => {
    // console.log(req.url); // what now upcoming   '/', '/user', "post", "Delete"
    // console.log(req.method); // "Get","POST", "DELETE", "PATCH" 


    const url = req.url
    const method = req.method

    if (url === "/" && method === "GET") {
        // console.log("this is root router ")

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "this is root route" }));

        
    } else if (url?.startsWith('/product')) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "this is product router" }))


    } else {
        res.writeHead(404, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: " route not found" }))
    }

});

server.listen(4000, () => {
    console.log("Server is running on the port 4000")
})