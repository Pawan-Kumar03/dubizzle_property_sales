import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Main from "../layouts/Main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

export default router;
