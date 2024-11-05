import {Request, Response} from 'express'

const getCatalogue = (req: Request, res: Response) => {
	res.send("Hello from catalogue")
}


export {getCatalogue}
