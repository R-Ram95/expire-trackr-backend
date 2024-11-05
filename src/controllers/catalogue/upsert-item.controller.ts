import { Response, Request } from "express";
import prismaClient from "../../prisma-client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


export const upsertItemController = (req: Request, res: Response) => {
	const itemDetails = req.body;
	const productId  = parseInt(req.query.productId as string);

	try {
		const item = prismaClient.catalogue.upsert({
			create: {
				id: productId,
				...itemDetails
			},
			update: {
				id: productId,
				...itemDetails
			},
			where: {
				id: productId
			}
		})

		res.status(StatusCodes.CREATED).send(item);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			message: ReasonPhrases.INTERNAL_SERVER_ERROR,
		});
	}
};
