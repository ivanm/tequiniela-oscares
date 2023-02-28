import { Button } from "@chakra-ui/react";
import { useAuth } from "reactfire";
import {
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export const Login = () => {

  const auth = useAuth();
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithRedirect(auth, provider);
  };
 
  return (
      <div>
        <h1>Sign In</h1>
        <Button onClick={handleSignIn}>Google</Button>
      </div>
  );
};
