import { z, ZodError, ZodIssue } from "zod";
import { Request, Response, NextFunction } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

interface ValidateSchemaOptions {
	bodySchema?: z.ZodObject<any, any>;
	querySchema?: z.ZodObject<any, any>;
}

export const validateSchema = ({
	bodySchema,
	querySchema,
}: ValidateSchemaOptions) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			if (bodySchema) {
				bodySchema.parse(req.body);
			}

			if (querySchema) {
				querySchema.parse(req.query);
			}

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
