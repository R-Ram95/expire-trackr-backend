import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const port = 3000;


app.post("/user", async (req, res) => {
	const user = await prisma.user.create({
		data: {
			name: 'Alice',
			email: 'alice@prisma.io',
		},
	})

	console.log(user)
}
);

app.get("/user", async (req, res) => {
	const user = await prisma.user.findMany();

	res.send(user);
});


app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
