import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./route/route";




const server: Server = createServer((req: IncomingMessage, res) => {
   routeHandler(req,res)

    }

);

server.listen(4000, () => {
    console.log("Server is running on the port 4000")
})