import { Box, CSSReset, Image, Flex, Text, Link } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import { Nominations } from "./Nominations";
import { Ranking } from "./Ranking";
import { Rules } from "./Rules";
import { Header } from "./Header";
import { Login } from "./Login";
import { AtomStates } from "./AtomStates";
import useResize from "./hooks/useResize";

export const App = () => {
  const { scrollbarWidth } = useResize();
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
        <AtomStates />
        <CSSReset />
        <Header />
        <Box
          as="main"
          mt="72px"
          mb="80px"
          w={`calc(100vw - ${scrollbarWidth}px)`}
        >
          <Routes>
            <Route path="/" element={<Nominations />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
        <Box as="footer" width="100%" p={5}>
          <Flex align="center" justify="center">
            <Text fontSize="sm">
              2024 | Powered by{" "}
              <Link href="https://efectotequila.com/" isExternal={true}>
                Efecto Tequila{" "}
              </Link>
            </Text>
            <Image ml={1} boxSize="24px" src="et.svg" />
          </Flex>
        </Box>
      </FirestoreProvider>
    </AuthProvider>
  );
};
