// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthContainer } from "./auth.styles.jsx";

const Authentication = () => {
	// useEffect(() => {
	//   const getResponse = async () => {
	//     const response = await getRedirectResult(auth);
	//     console.log(response)
	//     if(response) {
	//       const userDocRef = await createUserDocumentFromAuth(response.user);
	//     }
	//   }
	//   getResponse();
	// }, [])

	return (
		<AuthContainer>
			<SignInForm />
			{/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
			<SignUpForm />
		</AuthContainer>
	);
};

export default Authentication;
