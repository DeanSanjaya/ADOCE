import { Link } from "react-router-dom";
import BaseLoginRegister from "../components/BaseLoginRegister";

const Login = () => {
	return (
		<BaseLoginRegister
			type="login"
			buttonValue="Login"
			value1="Don't Have An Account?"
			value2={<Link to="/register">Create An Account</Link>}
		/>
	);
};

export default Login;
