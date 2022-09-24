// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   //   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/utils.firebase";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'; 

const Authentication = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // console.log(response);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
