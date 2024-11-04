import { Response, Request } from "express";

const getProducts = (req: Request, res: Response) => {
	res.send("Hello from products")
}

export {getProducts}

