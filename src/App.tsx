import { Image, Flex, Text } from "@chakra-ui/react";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

export const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth();
  const firestoreInstance = getFirestore(app);

  if (process.env.NODE_ENV !== "production") {
    try {
      connectFirestoreEmulator(firestoreInstance, "localhost", 8080);
      connectAuthEmulator(auth, "http://localhost:9099");
    } catch (e) {
      // No-Op
    }
  }
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          width="100vw"
          mt="400px"
        >
          <Image color="white" src="lenny.png" alt="Oscar Figure" mr={4} />
          <Text mt="50px" fontSize={{ base: "xl" }}>
            {" "}
            Mantenimiento en proceso.{" "}
          </Text>
        </Flex>
      </FirestoreProvider>
    </AuthProvider>
  );
};
