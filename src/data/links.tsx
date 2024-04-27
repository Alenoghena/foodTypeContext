import React, { ReactNode } from "react";
import { AiOutlineMenu } from "react-icons/ai";

type linksType = {
  title: string;
  links: {
    name: string;
    icon: ReactNode;
  }[];
}[];

export const links: linksType = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <AiOutlineMenu />,
      },
    ],
  },
  {
    title: "Home",
    links: [
      {
        name: "home",
        icon: <AiOutlineMenu />,
      },
    ],
  },
];
