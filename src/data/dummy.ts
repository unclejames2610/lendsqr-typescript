import React, { ReactElement } from "react";
import { FaHome, FaToolbox } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { HiUserGroup } from "react-icons/hi";
import {TbMoneybag} from "react-icons/tb";
import {FaRegHandshake, FaPiggyBank} from "react-icons/fa";


interface Link {
  name: string;
  icon: IconType;
}

interface Section {
  title: string;
  links: Link[];
}

export const links: Section[] = [
  {
    title: "Customers",
    links: [
      {
        name: "Users",
        icon: BsPeopleFill,
      },
      {
        name: "Guarantors",
        icon: HiUserGroup,
      },
      {
        name: "Loans",
        icon: TbMoneybag,
      },
      {
        name: "Decision Models",
        icon: FaRegHandshake
      },
      {
        name: "Savings",
        icon:
      },
      {
        name: "Loan Requests",
        icon:
      },
      {
        name: "Whitelist",
        icon:
      },
      {
        name: "Karma",
        icon:
      },
    ],
  },
  {
    title: "Businesses",
    links: [
        {
            name: "Organization",
            icon:
        },
        {
            name: "Loan Products",
            icon:
          },
          {
            name: "Savings Products",
            icon:
          },
          {
            name: "Fees and Charges",
            icon:
          },
          {
            name: "Transactions",
            icon:
          },
          {
            name: "Services",
            icon:
          },
          {
            name: "Service Account",
            icon:
          },
          {
            name: "Settlements",
            icon:
          },
          {
            name: "Reports",
            icon:
          },
    ],
  },
  {
    title: "Settings"
    links: [
        {
            name: "Preferences",
            icon:
        },
        {
            name: "Fees and Pricing",
            icon:
          },
          {
            name: "Audit Logs",
            icon:
          },
    ],
  },
];
