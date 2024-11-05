import express from "express"
import catalogueRoutes from "./routes/catalogues.route"
import inventoryRoutes from "./routes/inventory.route";

const app = express();
const port = 3000;

app.use("/catalogue", catalogueRoutes)
app.use("/inventory", inventoryRoutes )

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

export default app;
