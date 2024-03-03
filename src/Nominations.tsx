import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import NominationCards from "./NominationCards";
import NominationCardsNew from "./NominationCardsNew";
import { Welcome } from "./Welcome";
import nominees from "./nominees";

import useEffectOnce from "./hooks/useEffectOnce";
console.log("nominees");
console.log(nominees);

export const Nominations = () => {
  const [konami, setKonami] = useState<boolean>(false);

  useEffectOnce(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let konamiCodeIndex = 0;

    const listener = (event: KeyboardEvent) => {
      if (event.code === konamiCode[konamiCodeIndex]) {
        konamiCodeIndex++;
        if (konamiCodeIndex === konamiCode.length) {
          konamiCodeIndex = 0;
          setKonami(true);
        }
      } else {
        konamiCodeIndex = 0;
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  });

  return (
    <Flex
      direction="column"
      className="card-container"
      m={{
        base: "0 10px",
        sm: "0 20px",
        md: "0 30px",
        lg: "0 30px",
        xl: "0 20px",
        "2xl": "0 150px",
      }}
    >
      <Welcome />
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.bestPicture}
          title="Best Picture"
          nominationSlug="bestPicture"
        />
        <NominationCardsNew
          nominations={nominees.leadingActor}
          title="Best Actor"
          nominationSlug="leadingActor"
        />
        <NominationCardsNew
          nominations={nominees.leadingActress}
          title="Best Actress"
          nominationSlug="leadingActress"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.directing}
          title="Best Director"
          nominationSlug="directing"
        />
        <NominationCardsNew
          nominations={nominees.supportingActor}
          title="Best Supporting Actor"
          nominationSlug="supportingActor"
        />
        <NominationCardsNew
          nominations={nominees.supportingActress}
          title="Best Supporting Actress"
          nominationSlug="supportingActress"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.originalScreenplay}
          title="Best Original Screenplay"
          nominationSlug="originalScreenplay"
        />
        <NominationCardsNew
          nominations={nominees.adaptedScreenplay}
          title="Best Adapted Screenplay"
          nominationSlug="adaptedScreenplay"
        />
        <NominationCardsNew
          nominations={nominees.originalSong}
          title="Best Original Song"
          nominationSlug="originalSong"
        />
      </Flex>
      <Flex
        mt={5}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.originalScore}
          title="Best Original Score"
          nominationSlug="originalScore"
        />
        <NominationCardsNew
          nominations={nominees.internationalFeature}
          title="Best International Feature Film"
          nominationSlug="internationalFeature"
        />
        <NominationCardsNew
          nominations={nominees.animatedFeature}
          title="Best Animated Feature Film"
          nominationSlug="animatedFeature"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.documentaryFeature}
          title="Best Documentary Feature"
          nominationSlug="documentaryFeature"
        />
        <NominationCardsNew
          nominations={nominees.productionDesign}
          title="Best Production Design"
          nominationSlug="productionDesign"
        />
        <NominationCardsNew
          nominations={nominees.costumeDesign}
          title="Best Costume Design"
          nominationSlug="costumeDesign"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.makeup}
          title="Best Makeup and Hairstyling"
          nominationSlug="makeup"
        />
        <NominationCardsNew
          nominations={nominees.sound}
          title="Best Sound"
          nominationSlug="sound"
        />
        <NominationCardsNew
          nominations={nominees.filmEditing}
          title="Best Film Editing"
          nominationSlug="filmEditing"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.cinematography}
          title="Best Cinematography"
          nominationSlug="cinematography"
        />
        <NominationCardsNew
          nominations={nominees.visualEffects}
          title="Best Visual Effects"
          nominationSlug="visualEffects"
        />
        <NominationCardsNew
          nominations={nominees.liveActionShort}
          title="Best Live Action Short Film"
          nominationSlug="liveActionShort"
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCardsNew
          nominations={nominees.animatedShort}
          title="Best Animated Short Film"
          nominationSlug="animatedShort"
        />

        <NominationCardsNew
          nominations={nominees.documentaryShort}
          title="Best Documentary Short Subject"
          nominationSlug="documentaryShort"
        />
      </Flex>
    </Flex>
  );
};
