import { useState } from "react";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { ButtonsContainerStyles } from "./sign-in-form.styles.jsx";

/**
 * test@gmail.com
 * 12341234
 */
const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	// const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		// console.log('click');
		event.preventDefault();
		// console.log(formFields);

		if (!email || !password) {
			alert("Please fill in all fields");
			return;
		}

		try {
			const response = await signInAuthWithEmailAndPassword(email, password);
			// console.log(response);

			// setCurrentUser(response);
			// console.log("🚀 ~ logGoogleUser ~ response:", user);
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/wrong-password") {
				alert("incorrect password for email");
			} else if (error.code === "auth/user-not-found") {
				alert("no user associated with this email");
			} else {
				console.log("error signing in", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const logGoogleUser = async () => {
		// We want response.user
		// const { user } = await signInWithGooglePopup();
		await signInWithGooglePopup();

		// const userDocRef = await createUserDocumentFromAuth(user);
		// console.log("🚀 ~ logGoogleUser ~ response:", user);
		// setCurrentUser(user);
	};

	return (
		<div className="sign-up-container">
			<h1>Sign in with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					inputOptions={{
						type: "email",
						required: true,
						name: "email",
						value: email,
						onChange: handleChange,
					}}
				/>

				<FormInput
					label="Password"
					inputOptions={{
						type: "password",
						required: true,
						name: "password",
						value: password,
						onChange: handleChange,
					}}
				/>

				<ButtonsContainerStyles>
					<Button type="submit">Submit</Button>
					<Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
						Google Sign In
					</Button>
				</ButtonsContainerStyles>
			</form>
		</div>
	);
};

export default SignInForm;
