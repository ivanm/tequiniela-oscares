import { useState, useEffect, useCallback } from "react";
import { Card, Flex, Text } from "@chakra-ui/react";
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

export interface MiniCardProps {
  title: string | undefined;
  movieSlug: string | undefined;
  nominationSlug: string;
  nomination: Nomination;
}

type Status =
  | "normal"
  | "selected"
  | "selected-won"
  | "selected-lost"
  | "not-selected-won"
  | "not-selected-lost";

const MiniCard = ({
  title,
  movieSlug,
  nominationSlug,
  nomination,
}: MiniCardProps) => {

  const [userNominations, setUserNominations] =
    useRecoilState<UserNominations>(userNominationsState);

  const hasNominationTimePassed = useRecoilValue<boolean>(
    hasNominationTimePassedState
  );

  const winnerNominations = useRecoilValue<WinnerNominations>(
    winnerNominationsState
  );

  const [status, setStatus] = useState<Status>("normal");

  const isSelected =
    userNominations[nominationSlug]?.movieSlug &&
    userNominations[nominationSlug].movieSlug === movieSlug;
  const isWinner =
    winnerNominations[nominationSlug]?.movieSlug &&
    winnerNominations[nominationSlug].movieSlug === movieSlug;

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
    const isSelected =
      userNominations[nominationSlug]?.movieSlug &&
      userNominations[nominationSlug].movieSlug === movieSlug;

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
      <Flex
        pl={4}
        justify="center"
        pt={3}
        pb={3}
        direction="column"
        w={{ base: 350, md: 290, lg: 200, xl: "300px" }}
        height={"70px"}
      >
        <Text fontSize={{ base: "15px", lg: "sm" }} color={textColor}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};
export default MiniCard;
