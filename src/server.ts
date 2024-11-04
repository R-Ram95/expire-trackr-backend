import express from "express"
import catalogueRoutes from "./routes/catalogues.route"
import productRoutes from "./routes/products.route";

const app = express();
const port = 3000;

app.use("/catalogue", catalogueRoutes)
app.use("/products", productRoutes )

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

export default app;
