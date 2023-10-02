// IMAGES
// ===============================================================================
// =========================CASE STUDIES iMAGES===================================
// ===============================================================================
import CaseStudyCardBongalo from "../assets/images/case-study-card-bongalo.svg?react";
import CaseStudyCardFreterium from "../assets/images/case-study-card-freterium.svg?react";
import CaseStudyCardAsusu from "../assets/images/case-study-card-asusu.svg?react";
import CaseStudyCardSwimmo from "../assets/images/case-study-card-swimmo.svg?react";
// ===============================================================================
// ===============================================================================
// ===============================================================================

// Case Studies Items
export const CASE_STUDIES_ITEMS = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        title: "Catalyzing Success: A Redesign of Bongalo Platform",
        role: "Product design, Prototyping",
        imageComponent: CaseStudyCardBongalo,
        bgColor: "#D5EBFD",
      },
      {
        id: 2,
        title: "Digital Banking for Credit Unions",
        role: "Product design, Prototyping",
        imageComponent: CaseStudyCardAsusu,
        bgColor: "#A6CAFF",
      },
    ],
  },
  {
    id: 2,
    applyMargin: true,
    cards: [
      {
        id: 1,
        title:
          "Revamping Onboarding: A User-Centric UX Approach to Elevate the First User Experience",
        role: "UX design, Research & Workshop",
        imageComponent: CaseStudyCardFreterium,
        bgColor: "#CDF1FF",
      },
      {
        id: 2,
        title:
          "Diving into Fitness: Strategies for Swimming Consistency and Success",
        role: "Product design, Prototyping",
        imageComponent: CaseStudyCardSwimmo,
        bgColor: "#C5D0FF",
      },
    ],
  },
];

// Side Projects Items
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
