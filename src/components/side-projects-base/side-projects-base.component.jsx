// Components
import { SideProjectsList } from "./side-projects-list/side-projects-list.component";

// Styles
import {
  SideProjectsBaseContainer,
  SideProjectsBaseHeading,
} from "./side-projects-base.styles";

// Static Data
export const SIDE_PROJECTS_ITEMS = [
  {
    id: 1,
    name: "Coinprofile",
    description:
      "Helps you to spend, earn and save with crypto. Complete your international transactions using a virtual card. Send money to your loved ones",
  },
  {
    id: 2,
    name: "Casava",
    description:
      "An Insurtech in the Nigerian space is reimagining how insurance should impact lives.",
  },
  {
    id: 3,
    name: "Goroots",
    description:
      "Believe in a viable credit system. Enjoy seamless purchases at amazing discounts from top vendors",
  },
  {
    id: 4,
    name: "Agenpo",
    description:
      "Is on a mission to ease access to agricultural commodities in Africa by enriching the relationship between Producers and Traders.",
  },
  {
    id: 5,
    name: "Printivo",
    description:
      "Aims to help African business print marketing and business materials with ease.",
  },
  {
    id: 6,
    name: "Syarpa",
    description:
      "Experience the convenience of having banking, fiat currencies all in one place with Syarpa.",
  },
];

export const SideProjectsBase = () => {
  const sideProjectsItems = SIDE_PROJECTS_ITEMS;

  return (
    <SideProjectsBaseContainer>
      <SideProjectsBaseHeading>Some side projects</SideProjectsBaseHeading>
      <SideProjectsList items={sideProjectsItems} />
    </SideProjectsBaseContainer>
  );
};
