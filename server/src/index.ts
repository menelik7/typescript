import express from "express";
import { router } from "./routes/loginRoutes";
import { urlencoded } from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ["asdf"],
	})
);
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("App listening on port", PORT);
});
