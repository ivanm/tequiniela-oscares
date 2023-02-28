import { useEffect } from "react";
import { Flex, Heading} from "@chakra-ui/react";
import { useAuth, useUser } from "reactfire";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { data: user } = useUser();
  
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    await signInWithRedirect(auth, provider);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <Flex
      direction="column"
      className="rules-container"
      m={{
        base: "0 10px",
        sm: "0 20px",
        md: "0 30px",
        lg: "0 30px",
        xl: "0 20px",
        "2xl": "0 150px",
      }}
    >
      <Flex pl={3} pr={3} pt={3} pb={3} mt={2} justify="center" mb={5}>
        <Flex align="center" minHeight="45px">
          <Heading
            fontWeight="extrabold"
            as="h1"
            fontSize={{
              base: "19px",
              lg: "20px",
            }}
            mr={2}
            ml={2}
          >
            Iniciar Sesión
          </Heading>
        </Flex>
      </Flex>
      <Flex justify="center">
        <GoogleButton onClick={handleSignIn} />
      </Flex>
    </Flex>
  );
};
