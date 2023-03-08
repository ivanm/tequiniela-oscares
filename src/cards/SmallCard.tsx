import { Card, Flex, Image, Text } from "@chakra-ui/react";
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

export interface SmallCardProps {
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

const SmallCard = ({
  title,
  transform,
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
      borderRadius="xl"
    >
      {imgSrc && (
        <Image
          borderLeftRadius="xl"
          src={imgSrc}
          alt={title}
          objectFit="cover"
          align="0px -12px"
          height="100px"
          width="100px"
          minWidth="100px"
          transform={transform}
        />
      )}
      <Flex pl={4} pr={4} justify="center" pt={2} pb={2} direction="column">
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
    </Card>
  );
};
export default SmallCard;
