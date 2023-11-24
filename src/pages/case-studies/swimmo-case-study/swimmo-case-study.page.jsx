// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import {
  CaseStudyDetailHero,
  CaseStudyDetailFooter,
} from "../../../components";
import {
  Container as CaseStudyContainer,
  CaseStudyDetail,
  UserPersonasList,
  UserPersonasCard,
} from "../../../assets/styles/common.styles";
import SwimmoSwimmingCategory from "../../../assets/images/swimmo-swimming-category.svg?react";

export const SwimmoCaseStudy = () => {
  const {
    CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems,
    CASE_STUDY_ITEMS: caseStudyItems,
  } = useStaticData();

  return (
    <Fragment>
      <CaseStudyDetailHero {...caseStudyDetailHeroItems.swimmo} />
      <CaseStudyDetail>
        <CaseStudyContainer className="mt-xl" as="section">
          <h2>Introduction</h2>
          <p>
            Swimmo is a revolutionary fitness technology program designed for
            two specific user groups: newbie swimmers seeking to learn the art
            of swimming and inconsistent swimmers trying to rekindle their
            passion for it. It caters to the introverted and reserved swimmers
            who prefer private training to develop their swimming skills.
            Swimmo’s core offering is a wearable app that provides structured
            workout plans, instructional exercises, videos, and performance
            tracking. Additionally, it integrates seamlessly with a mobile app,
            offering users comprehensive insights into their swimming data.
          </p>
        </CaseStudyContainer>

        <CaseStudyContainer as="section">
          <h2>The problems</h2>
          <p>
            Swimming is an incredible physical activity with numerous health
            benefits. However, many potential swimmers face barriers such as
            self-consciousness, lack of access to professional training, or the
            need for privacy. Swimmo addresses these issues by providing a
            personalized, private, and tech-enabled solution for introverted
            swimmers.
          </p>
        </CaseStudyContainer>

        <CaseStudyContainer as="section">
          <h2>Design process</h2>
          <h3 className="is-text-md is-extra-bold is-color-primary">
            What I did
          </h3>
          <p className="is-regular">
            This project was a 1-week sprint that required a rapid creative
            process to streamline the experience as quickly as possible.
          </p>
          <p className="is-regular">
            <b className="is-extra-bold">NB:</b> It’s important to realize that
            the final creative is just part of the work. The other half is
            celebrating the work that has been done behind the scenes.
          </p>
          {/* Design Process Cards Here */}
        </CaseStudyContainer>

        <CaseStudyContainer as="section">
          <h2>Discovery Phase</h2>
          <h3 className="is-extra-bold">User Research</h3>
          <p>
            Conducted interviews with three dedicated swimmers and engaged in
            conversations with four passionate swimming enthusiasts via phone
            calls. These interactions yielded valuable insights into the
            challenges and successes they encountered in maintaining consistent
            exercise routines over extended durations.
          </p>
          <p className="mb-md">
            From my research, it became evident that, within the realm of
            aquatic exercise, there are generally three distinct categories of
            individuals:
          </p>
          <ul className="list-style-none">
            <li className="mb-md">
              <span className="is-text-md is-extra-bold">
                The Ocean Enthusiasts <span className="is-regular">-</span>{" "}
              </span>{" "}
              This group comprises individuals who are committed to regular
              swimming and prioritize exercise as a significant part of their
              lives.
            </li>
            <li className="mb-md">
              <span className="is-text-md is-extra-bold">
                The Physical Minimalists <span className="is-regular">-</span>
              </span>{" "}
              These individuals limit their daily physical activity to the bare
              essentials, such as morning hygiene routines and the short walk
              from their front door to their car, with minimal engagement in
              exercise.
            </li>
            <li>
              <span className="is-text-md is-extra-bold">
                The Pool Yearners <span className="is-regular">-</span>
              </span>{" "}
              This group of users shares a genuine interest in swimming, yet
              they lack a structured approach to fulfill this desire. They
              require significant motivation and guidance to consistently engage
              in swimming activities.
            </li>
          </ul>
        </CaseStudyContainer>

        <CaseStudyContainer as="section" style={{ marginBottom: "15.3rem" }}>
          <h2>What Does the Current Fitness Landscape Look Like?</h2>
          <p>
            In the contemporary fitness landscape, the second and third groups
            of individuals represent the most significant portion of the
            addressable market. My aim was to gain a comprehensive understanding
            of how these users approach swimming. To achieve this, I conducted a
            comprehensive review of competing products, including MySwimPro,
            Swimmfit, and MyTriPro. My research involved meticulously examining
            a plethora of reviews and user comments posted on both the Play
            Store and Apple Store.
          </p>
          <p>
            Subsequently, I meticulously categorized these users and aligned
            them with the user groups I previously highlighted.
          </p>

          <h3
            className="is-color-primary is-text-md is-extra-md mt-l"
            style={{ marginBottom: "1rem" }}
          >
            Categorization of consumers according to their swimming behaviors in
            groups
          </h3>
          <SwimmoSwimmingCategory aria-label="Swimming categorization image" />
        </CaseStudyContainer>

        <section className="is-bg-white">
          <CaseStudyContainer className="pt-md pb-md">
            <h2>Aligning User Needs with Product Objectives</h2>
            <p>
              Up to this point, my research has revealed significant areas of
              opportunity. Nonetheless, it's crucial that these findings are
              translated into solutions that effectively address the identified
              user problems. To achieve this, I distilled my findings and
              created two personas that embody the characteristics of our target
              audience, aligning their concerns with the intended solutions.
            </p>
          </CaseStudyContainer>
          <UserPersonasList
            style={{
              maxWidth: "896px",
              paddingBottom: "6.4rem",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <UserPersonasCard>
              <h3 className="case-study-detail-subheading is-font-primary">
                BOB, <span className="is-text-md">29Years old</span>
              </h3>
              <h4 className="is-extra-bold">Background:</h4>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Bio: Bob is a software developer who recently relocated to
                  Lagos, from the northern part of Nigeria. Bob was a part of
                  the swim team in high school. He’s won competitions but ever
                  since he graduated, he hasn’t entered the pool. he wants to
                  rekindle his passion for swimming as there is a standard pool
                  located within his estate.
                </li>
              </ul>
              <h5 className="is-extra-bold is-text-sm">
                Goals and Aspirations:
              </h5>
              <ul className="ml-md">
                <li className="is-text-sm">
                  Take swimming more seriously and compete in the community
                  Triathlon coming up at the end of the year
                </li>
              </ul>
              <h5 className="is-extra-bold is-text-sm">Pain Points:</h5>
              <ul className="ml-md">
                <li className="is-text-sm">
                  James is an extremely busy person, hence, will fully
                  allocating time for exercise is quite difficult
                </li>
                <li className="is-text-sm">
                  Finding swim buddies in Lagos is hard because he recently just
                  moved in. Having swim buddies would impact his zeal to swim.
                </li>
                <li className="is-text-sm">No access to a swim coach</li>
              </ul>
            </UserPersonasCard>
            <UserPersonasCard className="is-bg-accent-400">
              <h3 className="case-study-detail-subheading is-font-primary">
                Janet, <span className="is-text-md">25Years old</span>
              </h3>
              <h4 className="is-extra-bold">Background:</h4>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Bio: Janet is a lawyer who lives in Kansas City, United
                  States. Janet had previously picked up a Parkwood Swimming
                  Pool membership form, but she only visited twice because she
                  felt very intimidated. Janet wanted swimming to be used as a
                  regimen for weight loss.
                </li>
              </ul>
              <h5 className="is-extra-bold is-text-sm">
                Goals and Aspirations:
              </h5>
              <ul className="ml-md">
                <li className="is-text-sm">
                  Take swimming more seriously and compete in the community
                  Triathlon coming up at the end of the year
                </li>
              </ul>
              <h5 className="is-extra-bold is-text-sm">Pain Points:</h5>
              <ul className="ml-md">
                <li className="is-text-sm">
                  Her colleagues and peers are attorneys, so they are very
                  competitive
                </li>
                <li className="is-text-sm">
                  Janet is not sure what diet plan to take to aid weight loss
                  when she is exercising
                </li>
                <li className="is-text-sm">No access to a swim coach</li>
                <li className="is-text-sm">
                  Naturally, Janet is lazy and will need some extra incentive to
                  keep up with her strategy.
                </li>
              </ul>
            </UserPersonasCard>
          </UserPersonasList>
        </section>
      </CaseStudyDetail>
      <CaseStudyDetailFooter item={caseStudyItems[0].cards[0]} />
    </Fragment>
  );
};
