import { Card, Flex, Text } from "@chakra-ui/react";
import { omit } from "ramda";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useUser } from "reactfire";

import {
  hasNominationTimePassedState,
  userNominationsState,
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

  const { data: user } = useUser();

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
  }, [hasNominationTimePassed, isSelected, isWinner]);

  useEffect(() => {
    calcStatus();
  }, [calcStatus]);

  const bgColor =
    status === "selected"
      ? "cards.selected"
      : status === "selected-won"
      ? "cards.won"
      : status === "selected-lost"
      ? "cards.lost"
      : undefined;

  const textColor = ["selected", "selected-won", "selected-lost"].includes(
    status
  )
    ? "white"
    : status === "not-selected-won"
    ? "cards.won"
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
  
  const isClickable =
    user !== null && !hasNominationTimePassed && status !== "selected";

  return (
    <Card
      border={
        bgColor
          ? "3px solid transparent"
          : status === "not-selected-won"
          ? "3px solid transparent"
          : undefined
      }
      borderColor={
        bgColor
          ? bgColor
          : status === "not-selected-won"
          ? "cards.won"
          : undefined
      }
      bg={bgColor}
      opacity={["not-selected-lost"].includes(status) ? ".5" : "1"}
      direction="row"
      onClick={isClickable ? handleCardClick : undefined}
      className={`card${isClickable ? " card-clickable" : ""}`}
    >
      <Flex
        pl={4}
        pr={4}
        justify="center"
        pt={3}
        pb={3}
        direction="column"
        height={"56px"}
        as="b"
      >
        <Text fontSize={{ base: "sm", lg: "xs" }} color={textColor}>
          {title}
        </Text>
      </Flex>
    </Card>
  );
};
export default MiniCard;
