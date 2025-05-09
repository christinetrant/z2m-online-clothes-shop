import { useState } from "react";
import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpFormStyles } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formFields);

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}
		if (password.length < 6) {
			alert("password must be at least 6 characters long");
			return;
		}

		try {
			const { user } = await createAuthUserFromEmailAndPassword(email, password);
			console.log(user);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpFormStyles className="sign-up-container">
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOptions={{
						type: "text",
						required: true,
						name: "displayName",
						value: displayName,
						onChange: handleChange,
					}}
				/>

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

				<FormInput
					label="Confirm Password"
					inputOptions={{
						type: "password",
						required: true,
						name: "confirmPassword",
						value: confirmPassword,
						onChange: handleChange,
					}}
				/>

				<Button type="submit">Submit</Button>
			</form>
		</SignUpFormStyles>
	);
};

export default SignUpForm;
