const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
	const { username, password } = req.body;
	const user = router.db.get("users").find({ username, password }).value();

	if (user) {
		// Logika login berhasil
		const token = generateToken(); // Implementasikan fungsi generateToken sesuai kebutuhan
		res.json({ success: true, token });
	} else {
		res.status(401).json({ success: false, message: "Login failed" });
	}
});

server.post("/register", (req, res) => {
	const { username, password } = req.body;
	const existingUser = router.db.get("users").find({ username }).value();

	if (existingUser) {
		res.status(400).json({ success: false, message: "Username already exists" });
	} else {
		// Logika register berhasil
		const newUser = { id: Date.now(), username, password };
		router.db.get("users").push(newUser).write();
		res.json({ success: true, message: "Registration successful" });
	}
});

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
