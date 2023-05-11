import { FaHome, FaToolbox } from "react-icons/fa";

import {
  BsPeopleFill,
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsPersonFillGear,
} from "react-icons/bs";
import { IconType } from "react-icons";
import { HiUserGroup } from "react-icons/hi";
import {
  TbMoneybag,
  TbAdjustmentsHorizontal,
  TbClipboardText,
} from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import {
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaCoins,
  FaFan,
  FaScroll,
} from "react-icons/fa";
import {
  AiTwotoneBank,
  AiOutlineTransaction,
  AiOutlineBarChart,
} from "react-icons/ai";

export interface Link {
  name: string;
  icon: IconType;
}

export interface Section {
  title: string;
  links: Link[];
}

export const links: Section[] = [
  {
    title: "",
    links: [
      {
        name: "Dashboard",
        icon: FaHome,
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        name: "users",
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
        icon: FaRegHandshake,
      },
      {
        name: "Savings",
        icon: FaPiggyBank,
      },
      {
        name: "Loan Requests",
        icon: FaHandHoldingUsd,
      },
      {
        name: "Whitelist",
        icon: BsFillPersonCheckFill,
      },
      {
        name: "Karma",
        icon: BsFillPersonXFill,
      },
    ],
  },
  {
    title: "Businesses",
    links: [
      {
        name: "Organization",
        icon: FaToolbox,
      },
      {
        name: "Loan Products",
        icon: FaHandHoldingUsd,
      },
      {
        name: "Savings Products",
        icon: AiTwotoneBank,
      },
      {
        name: "Fees and Charges",
        icon: FaCoins,
      },
      {
        name: "Transactions",
        icon: AiOutlineTransaction,
      },
      {
        name: "Services",
        icon: FaFan,
      },
      {
        name: "Service Account",
        icon: BsPersonFillGear,
      },
      {
        name: "Settlements",
        icon: FaScroll,
      },
      {
        name: "Reports",
        icon: AiOutlineBarChart,
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        name: "Preferences",
        icon: TbAdjustmentsHorizontal,
      },
      {
        name: "Fees and Pricing",
        icon: CiPercent,
      },
      {
        name: "Audit Logs",
        icon: TbClipboardText,
      },
    ],
  },
];
