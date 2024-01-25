"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useRef } from "react";
import heart from "../../../assets/animation/HeartAnimation.json";
interface Props {
  checked?: boolean;
}

const FavoriteAnimeButton = ({ checked }: Props) => {
  const ref = useRef<Player>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (checked) {
      ref.current.play();
    } else {
      ref.current.stop();
    }
  }, [checked]);

  useEffect(() => {
    if (checked) ref.current?.play();
  }, []);

  return <Player ref={ref} speed={2} keepLastFrame src={heart} />;
};

export default FavoriteAnimeButton;
