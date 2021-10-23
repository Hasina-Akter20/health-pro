import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import FirebaseAuth from "../../Firebase/Firebase.inisialize";

FirebaseAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  const facebookSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    logOut,
    googleSignIn,
    facebookSignIn,
    isLoading,
  };
};

export default useFirebase;
