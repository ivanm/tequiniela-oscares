import { Box, CSSReset } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
      </FirestoreProvider>
    </AuthProvider>
  );
};
