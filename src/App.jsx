import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Adopt from "./pages/Adopt";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
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
					element={<Adopt />}
				/>
				<Route
					path="/donate"
					element={<Adopt />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
