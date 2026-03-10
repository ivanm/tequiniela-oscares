import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import NominationCards from "./NominationCards";
import NominationCardsNew from "./NominationCardsNew";
import { Welcome } from "./Welcome";
import nominees from "./nominees";

import useEffectOnce from "./hooks/useEffectOnce";
import { Masonry } from "react-plock";

export const Nominations = () => {
  const { t } = useTranslation();
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

  const items = [
    <NominationCardsNew
      nominations={nominees.bestPicture}
      title={t("categories.bestPicture")}
      nominationSlug="bestPicture"
    />,
    <NominationCardsNew
      nominations={nominees.leadingActor}
      title={t("categories.leadingActor")}
      nominationSlug="leadingActor"
    />,
    <NominationCardsNew
      nominations={nominees.leadingActress}
      title={t("categories.leadingActress")}
      nominationSlug="leadingActress"
    />,
    <NominationCardsNew
      nominations={nominees.directing}
      title={t("categories.directing")}
      nominationSlug="directing"
    />,
    <NominationCardsNew
      nominations={nominees.supportingActor}
      title={t("categories.supportingActor")}
      nominationSlug="supportingActor"
    />,
    <NominationCardsNew
      nominations={nominees.supportingActress}
      title={t("categories.supportingActress")}
      nominationSlug="supportingActress"
    />,
    <NominationCardsNew
      nominations={nominees.originalScreenplay}
      title={t("categories.originalScreenplay")}
      nominationSlug="originalScreenplay"
    />,
    <NominationCardsNew
      nominations={nominees.adaptedScreenplay}
      title={t("categories.adaptedScreenplay")}
      nominationSlug="adaptedScreenplay"
    />,
    <NominationCardsNew
      nominations={nominees.originalSong}
      title={t("categories.originalSong")}
      nominationSlug="originalSong"
    />,
    <NominationCardsNew
      nominations={nominees.originalScore}
      title={t("categories.originalScore")}
      nominationSlug="originalScore"
    />,
    <NominationCardsNew
      nominations={nominees.internationalFeature}
      title={t("categories.internationalFeature")}
      nominationSlug="internationalFeature"
    />,
    <NominationCardsNew
      nominations={nominees.animatedFeature}
      title={t("categories.animatedFeature")}
      nominationSlug="animatedFeature"
    />,
    <NominationCardsNew
      nominations={nominees.documentaryFeature}
      title={t("categories.documentaryFeature")}
      nominationSlug="documentaryFeature"
    />,
    <NominationCardsNew
      nominations={nominees.productionDesign}
      title={t("categories.productionDesign")}
      nominationSlug="productionDesign"
    />,
    <NominationCardsNew
      nominations={nominees.costumeDesign}
      title={t("categories.costumeDesign")}
      nominationSlug="costumeDesign"
    />,
    <NominationCardsNew
      nominations={nominees.makeup}
      title={t("categories.makeup")}
      nominationSlug="makeup"
    />,
    <NominationCardsNew
      nominations={nominees.sound}
      title={t("categories.sound")}
      nominationSlug="sound"
    />,
    <NominationCardsNew
      nominations={nominees.filmEditing}
      title={t("categories.filmEditing")}
      nominationSlug="filmEditing"
    />,
    <NominationCardsNew
      nominations={nominees.cinematography}
      title={t("categories.cinematography")}
      nominationSlug="cinematography"
    />,
    <NominationCardsNew
      nominations={nominees.visualEffects}
      title={t("categories.visualEffects")}
      nominationSlug="visualEffects"
    />,
    <NominationCardsNew
      nominations={nominees.liveActionShort}
      title={t("categories.liveActionShort")}
      nominationSlug="liveActionShort"
    />,
    <NominationCardsNew
      nominations={nominees.animatedShort}
      title={t("categories.animatedShort")}
      nominationSlug="animatedShort"
    />,
    <NominationCardsNew
      nominations={nominees.documentaryShort}
      title={t("categories.documentaryShort")}
      nominationSlug="documentaryShort"
    />,
    <NominationCardsNew
      nominations={nominees.casting}
      title={t("categories.casting")}
      nominationSlug="casting"
    />,
  ];

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
      <Box
        w={{
          base: "450px",
          md: "450px",
          lg: "900px",
          xl: "1190px",
          "2xl": "1290px",
        }}
        mx="auto"
        mt={4}
      >
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [6, 6, 6],
            media: [992, 1280, 2000],
          }}
          render={(item) => item}
        />
      </Box>
    </Flex>
  );
};
