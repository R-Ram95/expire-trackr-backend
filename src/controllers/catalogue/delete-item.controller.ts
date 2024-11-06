import { Request, Response } from "express";
import prismaClient from "../../prisma-client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Prisma } from "@prisma/client";

export const deleteItemController = async (req: Request, res: Response) => {
	const productId = req.params.productId;

	try {
		const deletedItem = await prismaClient.catalogue.delete({
			where: {
				id: productId,
			},
		});

		res.status(StatusCodes.OK).send(deletedItem);
	} catch (e) {
		if (
			e instanceof Prisma.PrismaClientKnownRequestError &&
			e.code === "P2025"
		) {
			res
				.status(StatusCodes.NOT_FOUND)
				.send({ message: ReasonPhrases.NOT_FOUND });
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: ReasonPhrases.INTERNAL_SERVER_ERROR,
			});
		}
	}
};
