import { Box, CSSReset } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { Nominations } from "./Nominations";
import { Ranking } from "./Ranking";
import { Rules } from "./Rules";
import { Header } from "./Header";
import { Login } from "./Login";
import firebaseConfig from "./firebaseConfig";

export const App = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number | undefined>();

  useEffect(() => {
    resizeEffect();
    window.addEventListener("resize", () => {
      resizeEffect();
    });

    return () => {
      window.removeEventListener("resize", resizeEffect);
    };
  }, []);

  const resizeEffect = () => {
    setScrollbarWidth(window.innerWidth - document.body.clientWidth);
  };
  const app = useFirebaseApp();
  // const auth = getAuth(app);
  const auth = getAuth();
  const firestoreInstance = getFirestore(app);
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <CSSReset />
        <Header />
        <Box
          as="main"
          mt="72px"
          mb="80px"
          w={{ base: "auto", sm: `calc(100vw - ${scrollbarWidth}px)` }}
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
