import express from "express"
import catalogueRoutes from "./routes/catalogue.route"
import inventoryRoutes from "./routes/inventory.route";

const app = express();
const port = 3000;

app.use("/api/catalogue", catalogueRoutes)
app.use("/api/inventory", inventoryRoutes )

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

export default app;
