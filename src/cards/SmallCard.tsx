import { useState, useEffect, useCallback } from "react";
import { Card, Image, Flex, Text } from "@chakra-ui/react";
import { omit } from "ramda";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  userNominationsState,
  hasNominationTimePassedState,
  winnerNominationsState,
} from "../atoms";
import {
  type Nomination,
  type UserNominations,
  type WinnerNominations,
} from "../nominees";

export interface SmallCardProps {
  title: string | undefined;
  imgSrc: string | undefined;
  name: string | undefined;
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

const SmallCard = ({
  title,
  imgSrc,
  name,
  movieSlug,
  nameSlug,
  nominationSlug,
  nomination,
  matchKey = "nameSlug",
}: SmallCardProps) => {
  const [userNominations, setUserNominations] =
    useRecoilState<UserNominations>(userNominationsState);

  const hasNominationTimePassed = useRecoilValue<boolean>(
    hasNominationTimePassedState
  );

  const winnerNominations = useRecoilValue<WinnerNominations>(
    winnerNominationsState
  );

  const [status, setStatus] = useState<Status>("normal");

  const matchTo = matchKey === "nameSlug" ? nameSlug : movieSlug;

  const isSelected =
    userNominations[nominationSlug] &&
    userNominations[nominationSlug][matchKey] &&
    userNominations[nominationSlug][matchKey] === matchTo;
  const isWinner =
    winnerNominations[nominationSlug] &&
    winnerNominations[nominationSlug][matchKey] &&
    winnerNominations[nominationSlug][matchKey] === matchTo;

  const calcStatus = useCallback(() => {
    if (hasNominationTimePassed) {
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
  }, [
    hasNominationTimePassed,
    isSelected,
    isWinner,
  ]);

  useEffect(() => {
    calcStatus();
  }, [calcStatus]);

  const bgColor =
    status === "selected"
      ? "#016FB9"
      : status === "selected-won"
      ? "#239A0C"
      : status === "selected-lost"
      ? "#C11A1A"
      : undefined;

  const textColor = ["selected", "selected-won", "selected-lost"].includes(
    status
  )
    ? "white"
    : status === "not-selected-won"
    ? "#239A0C"
    : undefined;

  const handleCardClick = () => {
    setUserNominations(
      isSelected
        ? omit([nominationSlug], userNominations)
        : { ...userNominations, [nominationSlug]: nomination }
    );
  };

  return (
    <Card
      border={
        bgColor
          ? `3px solid ${bgColor}`
          : status === "not-selected-won"
          ? "3px solid #239A0C"
          : undefined
      }
      bg={bgColor}
      opacity={["not-selected-lost"].includes(status) ? ".2" : "1"}
      direction="row"
      onClick={!hasNominationTimePassed ? handleCardClick : undefined}
    >
      {imgSrc && (
        <Image
          borderLeftRadius="sm"
          src={imgSrc}
          alt={title}
          objectFit="cover"
          align="0px -12px"
          height="100px"
          width="100px"
          minWidth="100px"
        />
      )}
      <Flex
        pl={4}
        pr={4}
        justify="center"
        pt={2}
        pb={2}
        direction="column"
        w={{ base: 180, md: 180, lg: "200px", xl: 300, "2xl": 350 }}
      >
        <Text
          lineHeight={1.1}
          fontSize={{ base: "sm", lg: "lg" }}
          color={textColor}
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
    </Card>
  );
};
export default SmallCard;
