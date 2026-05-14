
import type { IncomingMessage } from "http";




export const paresBody = (req: IncomingMessage): Promise<any> => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on('data', (chunk) => {
            body + chunk
        })
        req.on("end", () => {
            try {
                resolve(body)
            } catch (error) {
                reject(error)
            }
        })

    })

}