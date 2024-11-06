import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	errorFormat: "pretty",
	log: [
		{ emit: "event", level: "query" },
		{
			emit: "event",
			level: "error",
		},
	],
});

// log on query
prisma.$on("query", (e: Prisma.QueryEvent) => {
	console.log("");
	console.log("Query:", e.query);
	console.log("Params:", e.params);
	console.log("Target:", e.target);
	console.log("Duration:", e.duration);
	console.log("");
});

// log on error
prisma.$on("error", (e: Prisma.LogEvent) => {
	console.log("Message:", e.message);
	console.log("Target:", e.target);
	console.log("Timestamp:", e.timestamp);
});

export default prisma;
