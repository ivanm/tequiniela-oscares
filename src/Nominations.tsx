import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import NominationCards from "./NominationCards";
import { Welcome } from "./Welcome";
import nominees from "./nominees";

import useEffectOnce from "./hooks/useEffectOnce";

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
      <NominationCards
        containerDirection="column"
        cardsDirection="row"
        nominations={nominees.bestPicture}
        size="big"
        title="Best Picture"
        nominationSlug="bestPicture"
        mt={2}
        transform={konami ? "scaleY(-1)" : undefined}
      />
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.directing}
          size="small"
          title="Best Director"
          nominationSlug="directing"
          transform={konami ? "scaleY(-1)" : undefined}
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.leadingActor}
          size="small"
          title="Best Actor"
          nominationSlug="leadingActor"
          transform={konami ? "scaleY(-1)" : undefined}
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.leadingActress}
          size="small"
          title="Best Actress"
          nominationSlug="leadingActress"
          transform={konami ? "scaleY(-1)" : undefined}
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.supportingActor}
          size="small"
          title="Best Supporting Actor"
          nominationSlug="supportingActor"
          transform={konami ? "scaleY(-1)" : undefined}
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.supportingActress}
          size="small"
          title="Best Supporting Actress"
          nominationSlug="supportingActress"
          transform={konami ? "scaleY(-1)" : undefined}
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.animatedFeature}
          size="small"
          title="Best Animated Feature Film"
          nominationSlug="animatedFeature"
          transform={konami ? "scaleY(-1)" : undefined}
        />
      </Flex>
      <Flex
        mt={{ base: 8, lg: 5 }}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.originalScreenplay}
          size="mini"
          title="Best Original Screenplay"
          nominationSlug="originalScreenplay"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.adaptedScreenplay}
          size="mini"
          title="Best Adapted Screenplay"
          nominationSlug="adaptedScreenplay"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.internationalFeature}
          size="mini"
          title="Best International Feature Film"
          nominationSlug="internationalFeature"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.documentaryFeature}
          size="mini"
          title="Best Documentary Feature"
          nominationSlug="documentaryFeature"
        />
      </Flex>
      <Flex
        mt={5}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.documentaryShort}
          size="mini"
          title="Best Documentary Short Subject"
          nominationSlug="documentaryShort"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.liveActionShort}
          size="mini"
          title="Best Live Action Short Film"
          nominationSlug="liveActionShort"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.animatedShort}
          size="mini"
          title="Best Animated Short Film"
          nominationSlug="animatedShort"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.originalScore}
          size="mini"
          title="Best Original Score"
          nominationSlug="originalScore"
        />
      </Flex>
      <Flex
        mt={5}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.originalSong}
          size="mini"
          title="Best Original Song"
          nominationSlug="originalSong"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.sound}
          size="mini"
          title="Best Sound"
          nominationSlug="sound"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.productionDesign}
          size="mini"
          title="Best Production Design"
          nominationSlug="productionDesign"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.cinematography}
          size="mini"
          title="Best Cinematography"
          nominationSlug="cinematography"
        />
      </Flex>
      <Flex
        mt={5}
        direction={{ base: "column", lg: "row" }}
        gap={8}
        justify="space-between"
      >
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.makeup}
          size="mini"
          title="Best Makeup and Hairstyling"
          nominationSlug="makeup"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.costumeDesign}
          size="mini"
          title="Best Costume Design"
          nominationSlug="costumeDesign"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.filmEditing}
          size="mini"
          title="Best Film Editing"
          nominationSlug="filmEditing"
        />
        <NominationCards
          containerDirection="column"
          cardsDirection="column"
          nominations={nominees.visualEffects}
          size="mini"
          title="Best Visual Effects"
          nominationSlug="visualEffects"
        />
      </Flex>
    </Flex>
  );
};
