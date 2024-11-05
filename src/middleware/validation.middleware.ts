import { z, ZodError, ZodIssue } from "zod";
import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const validateSchema = (schema: z.ZodObject<any, any>) => {
	return (req: Request, res: Response, next: NextFunction) => {

		try {

			schema.parse(req.body);
			next();

		} catch (error) {

			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue: ZodIssue) => {
					return {
						message: `Field ${issue.path} is ${issue.message}`,
					};
				});

				res.status(StatusCodes.BAD_REQUEST).send({
					message: ReasonPhrases.BAD_REQUEST,
					details: errorMessages,
				});

				// Other errors
			} else {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
					message: ReasonPhrases.INTERNAL_SERVER_ERROR,
				});
			}
		}
	};
};
