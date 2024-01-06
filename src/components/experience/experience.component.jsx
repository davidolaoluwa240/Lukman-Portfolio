// Components
import { SectionGroup } from "../section-group/section-group.component";
import { ExperienceList } from "./experience-list/experience-list.component";

// Styles
import { ExperienceWrapper } from "./experience.styles";

// Static Data
export const EXPERIENCES_ITEMS = [
  {
    id: 1,
    name: "Coinprofile",
    role: "Senior Product Designer",
    dateRange: "March 2023 - July 2023",
    to: "https://coinprofile.com/",
  },
  {
    id: 2,
    name: "Freterium (YC S21)",
    role: "Senior UX Designer",
    dateRange: "June 2022 - March 2023",
    to: "https://www.freterium.com/",
  },
  {
    id: 3,
    name: "Bongalo",
    role: "Lead Product Designer",
    dateRange: "Oct. 2021 - June 2022",
    to: "https://www.bongalo.com/",
  },
  {
    id: 4,
    name: "Ice Solar",
    role: "Product Design Lead",
    dateRange: "July 2020 - Feb. 2022",
    to: "https://www.icesolar.co/",
  },
  {
    id: 5,
    name: "Agenpo",
    role: "Product Designer",
    dateRange: "Aug 2021 - Mar 2022",
    to: "https://www.agenpo.com/home",
  },
  {
    id: 6,
    name: "2b Designz",
    role: "Co-Founder and Lead designer",
    dateRange: "Nov. 2019 -Nov. 2021",
    to: "https://www.instagram.com/2bdesignz/",
  },
  {
    id: 7,
    name: "Asusu.ng",
    role: "UI/UX Designer",
    dateRange: "Feb. 2017 - Oct. 2019",
    to: "https://www.asusu.ng/",
  },
];

export const Experience = () => {
  const experiencesItems = EXPERIENCES_ITEMS;

  return (
    <ExperienceWrapper>
      <SectionGroup name="Experience">
        <ExperienceList items={experiencesItems} />
      </SectionGroup>
    </ExperienceWrapper>
  );
};
