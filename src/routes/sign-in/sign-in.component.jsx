// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
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
  
  const logGoogleUser = async() => {
    // We want response.user
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log("🚀 ~ logGoogleUser ~ response:", user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </div>
  )
}

export default SignIn