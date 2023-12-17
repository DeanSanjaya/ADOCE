import { Link } from "react-router-dom";
import BaseLoginRegister from "../components/BaseLoginRegister";

const Register = () => {
	return (
		<BaseLoginRegister
			value2={<Link to="/login">Login</Link>}
			value1="Already have an account?"
			title="Register"
			buttonValue="Submit"
		/>
	);
};

export default Register;
