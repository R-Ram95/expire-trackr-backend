import { Response, Request } from "express";

const getInventory = (req: Request, res: Response) => {
	res.send("Hello from inventory")
}

export {getInventory}

