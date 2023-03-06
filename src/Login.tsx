import { useEffect, useState } from "react";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useAuth, useUser } from "reactfire";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { data: user } = useUser();

  const provider = new GoogleAuthProvider();
  const [isSignInLoading] = useState<boolean>(
    localStorage.getItem("loading-google") != null
  );

  const handleSignIn = async () => {
    localStorage.setItem("loading-google", "true");
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
    localStorage.removeItem("loading-google");
  }, [user]);

  return (
    <Flex
      direction="column"
      align="center" 
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
      {!isSignInLoading ? (
        <>
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
          <Text textAlign="center" maxWidth="480px" fontSize="sm">Para registrar tus votos, inica sesión con tu cuenta de Google. El nombre y foto de perfil de tu cuenta serán mostrados publicamente.</Text>
          <Flex mt={20} justify="center">
            <GoogleButton onClick={handleSignIn} />
          </Flex>
        </>
      ) : (
        <Flex height="500px" align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </Flex>
  );
};
