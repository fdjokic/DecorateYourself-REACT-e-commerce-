import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { GiHeartShield } from "react-icons/gi";

export const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "about",
    url: "/about",
  },
  {
    id: 3,
    title: "products",
    url: "/products",
  },
];

export const services = [
  {
    icon: <GiHeartShield />,
    title: "loyality",
    text: "Once a customer forever a brand!",
  },
  {
    icon: <RiTeamLine />,
    title: "team work",
    text: `We need one another. Let's work together.`,
  },

  {
    icon: <RiLightbulbFlashLine />,
    title: "idea",
    text: "Show us know what lies within you. Express it! ",
  },
];
