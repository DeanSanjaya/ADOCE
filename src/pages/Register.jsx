import { Link } from "react-router-dom";
import BaseLoginRegister from "../components/BaseLoginRegister";

const Register = () => {
	return (
		<BaseLoginRegister
			type="register"
			value2={<Link to="/login">Login</Link>}
			value1="Already have an account?"
			buttonValue="Submit"
		/>
	);
};

export default Register;
