import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async() => {
    // We want response.user
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    console.log("🚀 ~ logGoogleUser ~ response:", user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  )
}

export default SignIn