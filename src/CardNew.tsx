import {
  Card,
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { omit } from "ramda";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useUser } from "reactfire";

import {
  hasNominationTimePassedState,
  userNominationsState,
  winnerNominationsState,
} from "./atoms";
import {
  type Nomination,
  type UserNominations,
  type WinnerNominations,
} from "./nominees";

export interface CardNewProps {
  title: string | undefined;
  imgSrc: string | undefined;
  name: string | undefined;
  transform: string | undefined;
  movieSlug: string | undefined;
  nameSlug: string | undefined;
  nominationSlug: string;
  nomination: Nomination;
  matchKey: "movieSlug" | "nameSlug";
}

type Status =
  | "normal"
  | "selected"
  | "selected-won"
  | "selected-lost"
  | "not-selected-won"
  | "not-selected-lost";

const CardNew = ({
  title,
  transform,
  imgSrc,
  name,
  movieSlug,
  nameSlug,
  nominationSlug,
  nomination,
  matchKey = "nameSlug",
}: CardNewProps) => {
  const [userNominations, setUserNominations] =
    useRecoilState<UserNominations>(userNominationsState);

  const hasNominationTimePassed = useRecoilValue<boolean>(
    hasNominationTimePassedState
  );

  const winnerNominations = useRecoilValue<WinnerNominations>(
    winnerNominationsState
  );

  const [status, setStatus] = useState<Status>("normal");

  const { data: user } = useUser();

  const matchTo = matchKey === "nameSlug" ? nameSlug : movieSlug;

  const isSelected =
    userNominations[nominationSlug] &&
    userNominations[nominationSlug][matchKey] &&
    userNominations[nominationSlug][matchKey] === matchTo;
  const isWinner =
    winnerNominations[nominationSlug] &&
    winnerNominations[nominationSlug][matchKey] &&
    winnerNominations[nominationSlug][matchKey] === matchTo;
  const isWinnerPending =
    winnerNominations[nominationSlug] &&
    winnerNominations[nominationSlug][matchKey] &&
    winnerNominations[nominationSlug][matchKey] === "";

  const calcStatus = useCallback(() => {
    if (hasNominationTimePassed && isWinnerPending === false) {
      if (isWinner) {
        if (isSelected) {
          setStatus("selected-won");
        } else {
          setStatus("not-selected-won");
        }
      } else {
        if (isSelected) {
          setStatus("selected-lost");
        } else {
          setStatus("not-selected-lost");
        }
      }
    } else {
      if (isSelected) {
        setStatus("selected");
      } else {
        setStatus("normal");
      }
    }
  }, [hasNominationTimePassed, isSelected, isWinner]);

  useEffect(() => {
    calcStatus();
  }, [calcStatus]);

  const bgColor = ["selected", "selected-won", "selected-lost"].includes(status)
    ? "cards.selected"
    : undefined;

  const textColor = ["selected", "selected-won", "selected-lost"].includes(
    status
  )
    ? "white"
    : status === "not-selected-won"
    ? "white"
    : "white";

  const handleCardClick = () => {
    setUserNominations(
      isSelected
        ? omit([nominationSlug], userNominations)
        : { ...userNominations, [nominationSlug]: nomination }
    );
  };

  const isClickable =
    user !== null && !hasNominationTimePassed && status !== "selected";

  const cardBgBlendMode = useColorModeValue("normal", "soft-light");
  const opacity = hasNominationTimePassed && !isWinner ? "0.5" : "1";
  const winnerText = ["leadingActress", "supportingActress"].includes(
    nominationSlug
  ) || nameSlug === 'justine-triet'
    ? "Ganadora"
    : "Ganador";

  return (
    <Card
      opacity={opacity}
      border={bgColor ? "3px solid transparent" : undefined}
      borderColor={bgColor}
      bg={bgColor}
      bgImage={`url('${imgSrc}')`}
      backgroundBlendMode={
        ["not-selected-lost", "normal"].includes(status) ? cardBgBlendMode : ""
      }
      direction="row"
      onClick={isClickable ? handleCardClick : undefined}
      className={`card${isClickable ? " card-clickable" : ""}`}
      borderRadius="xl"
      minHeight="80px"
    >
      <Flex pl={4} pr={4} justify="end" pb={2} direction="column" grow={1}>
        <Text
          lineHeight={1.1}
          fontSize={{ base: "sm", lg: "lg" }}
          color={textColor}
          as="b"
        >
          {name ?? title}
        </Text>
        {name ? (
          <Text
            pt={1}
            lineHeight={1.1}
            fontSize={{ base: "xs", lg: "sm" }}
            color={textColor}
          >
            {title}
          </Text>
        ) : null}
      </Flex>
      <Flex align="center">
        {hasNominationTimePassed && isWinner ? (
          <Box
            bg="#fecb61"
            h="25px"
            borderRadius="10px"
            padding="2px 10px"
            fontSize="xs"
            color="#111111"
            mr="5px"
          >
            {winnerText}
          </Box>
        ) : null}
      </Flex>
    </Card>
  );
};
export default CardNew;
