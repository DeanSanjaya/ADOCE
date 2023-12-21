import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Adopt from "./pages/Adopt";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/adopt"
					element={<Adopt/>}
				/>
				<Route
					path="/donate"
					element={<Adopt/>}
				/>
				
			</Routes>
		</BrowserRouter>


	);
}

export default App;
