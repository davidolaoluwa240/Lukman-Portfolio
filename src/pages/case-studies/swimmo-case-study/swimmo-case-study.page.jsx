// Data
import { CASE_STUDY_ITEMS as caseStudyItems } from "../../../components/case-study-card-base/case-study-card-base.component";

// Components
import { Fragment } from "react";
import { CaseStudyDetailHero } from "../../../components/case-study-detail-hero/case-study-detail-hero.component";
import { CaseStudyDetailFooter } from "../../../components/case-study-detail-footer/case-study-detail-footer.component";
import { SwimmoDesignProcessList } from "../../../components/swimmo-design-process-list/swimmo-design-process-list.component";
import {
  Container as CaseStudyDetailContainer,
  CaseStudyDetail,
  UserPersonasList,
  UserPersonasCard,
} from "../../../assets/styles/common.styles";
import { FreteriumUserFlowChartWrapper as SwimmoUserFlowChartWrapper } from "../freterium-case-study/freterium-case-study.styles";

// Images
import SwimmoSwimmingCategory from "../../../assets/images/swimmo-swimming-category.svg?react";
import SwimmoProgressiveWorkout from "../../../assets/images/swimmo-progressive-workout.svg?react";
import SwimmoActivityTracking from "../../../assets/images/swimmo-activity-tracking.svg?react";
import SwimmoPairedDevice from "../../../assets/images/swimmo-paired-device.svg?react";
import SwimmoUserFlow from "../../../assets/images/swimmo-user-flow.svg?react";
import SwimmoPolishedDesign from "../../../assets/images/swimmo-polished-design.svg?react";
import SwimmoPolishedDesign2 from "../../../assets/images/swimmo-polished-design2.svg?react";
import SwimmoPolishedDesign3 from "../../../assets/images/swimmo-polished-design3.svg?react";
import SwimmoPolishedDesign4 from "../../../assets/images/swimmo-polished-design4.svg?react";

import caseStudyHeroSwimmo from "../../../assets/images/case-study-hero-swimmo.png";

// Static Data
const swimmoHeroItem = {
  title: "Diving into Fitness: Strategies for Swimming Consistency and Success",
  expertise: "Product design",
  platforms: "Mobile app and wearable",
  role: "Product Designer",
  img: caseStudyHeroSwimmo,
  year: "2022",
  to: "https://www.swimmo.com/",
};

// Design Process Items
export const DESIGN_PROCESS_ITEMS = [
  {
    id: 1,
    name: "Validation",
    description:
      "I had a conversation with 4 swimmers and 2 swimming enthusiasts at this stage just to gain some insight into the main pain points.",
    duration: 1,
  },
  {
    id: 2,
    name: "Competitive Analysis",
    description:
      "I took a look at rival products such as ARENA SWIM, Swim Up, MyTriPro, etc against a set of benchmarks to  drive product decisions.",
    duration: 1,
  },
  {
    id: 3,
    name: "UX Design",
    description:
      "After understanding the problem and how to solve it, I developed user stories, created Information Architecture and drew user flows.",
    duration: 3.5,
  },
  {
    id: 4,
    name: "UI & Interaction",
    description:
      "With solid basis of UX findings, I started sketching screens for the app and designed the visual parts for the mobile and watch app.",
    duration: 2.5,
  },
];

const SwimmoCaseStudy = () => {
  const designProcessItems = DESIGN_PROCESS_ITEMS;
  return (
    <Fragment>
      <CaseStudyDetailHero {...swimmoHeroItem} />
      <CaseStudyDetail>
        <CaseStudyDetailContainer className="mt-xl" as="section">
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
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>The problems</h2>
          <p>
            Swimming is an incredible physical activity with numerous health
            benefits. However, many potential swimmers face barriers such as
            self-consciousness, lack of access to professional training, or the
            need for privacy. Swimmo addresses these issues by providing a
            personalized, private, and tech-enabled solution for introverted
            swimmers.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section" style={{ maxWidth: "1234px" }}>
          <CaseStudyDetailContainer>
            <h2>Design process</h2>
            <h3 className="is-text-md is-extra-bold is-color-primary">
              What I did
            </h3>
            <p className="is-regular">
              This project was a 1-week sprint that required a rapid creative
              process to streamline the experience as quickly as possible.
            </p>
            <p className="is-regular">
              <b className="is-extra-bold">NB:</b> It’s important to realize
              that the final creative is just part of the work. The other half
              is celebrating the work that has been done behind the scenes.
            </p>
          </CaseStudyDetailContainer>

          <SwimmoDesignProcessList
            style={{ marginTop: "7.4rem" }}
            items={designProcessItems}
          />
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
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
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer
          as="section"
          style={{ marginBottom: "15.3rem" }}
        >
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
        </CaseStudyDetailContainer>

        <section className="is-bg-white pt-l">
          <CaseStudyDetailContainer className="pt-md pb-md">
            <h2>Aligning User Needs with Product Objectives</h2>
            <p>
              Up to this point, my research has revealed significant areas of
              opportunity. Nonetheless, it&apos;s crucial that these findings
              are translated into solutions that effectively address the
              identified user problems. To achieve this, I distilled my findings
              and created two personas that embody the characteristics of our
              target audience, aligning their concerns with the intended
              solutions.
            </p>
          </CaseStudyDetailContainer>
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

        <CaseStudyDetailContainer as="section" className="mt-xl">
          <h2>Product Objectives</h2>
          <p>
            It was paramount to attain a precise depiction of the final product
            and outline its fundamental user experience. For swimmers,
            there&apos;s nothing quite like the satisfaction of executing
            swimming routines with greater efficiency or completing a workout
            successfully. A positive user experience will revolve around a
            product that motivates customers to maintain consistency and
            discipline, ensuring they adhere to their routines long enough to
            realize their full benefits.&quot;
          </p>

          <div className="mt-md">
            <ul className="list-style-none">
              <li className="mb-md">
                <SwimmoProgressiveWorkout className="mb-sm" />
                <h3
                  className="is-text-md is-color-primary is-extra-md"
                  style={{ marginBottom: "1.7rem" }}
                >
                  Progressive Workout
                </h3>
                <p>
                  Abs are made in the kitchen — with a massive database of
                  customized exercise programs that are carefully handpicked for
                  you, to suit your needs and get your fitness on.
                </p>
              </li>
              <li className="mb-md">
                <SwimmoActivityTracking className="mb-sm" />
                <h3
                  className="is-text-md is-color-primary is-extra-md"
                  style={{ marginBottom: "1.7rem" }}
                >
                  Activity Tracking
                </h3>
                <p>
                  Constraints: Getting people to adopt new behaviors over a
                  longer period is one of the biggest obstacles in the world of
                  fitness.
                </p>
                <p>
                  Turn activity into a game — according to recent research,
                  gamifying exercises can improve motivation and make fitness
                  more effective at all levels.
                </p>
              </li>
              <li>
                <SwimmoPairedDevice className="mb-sm" />
                <h3
                  className="is-text-md is-color-primary is-extra-md"
                  style={{ marginBottom: "1.7rem" }}
                >
                  Paired Devices
                </h3>
                <p>
                  Synchronis workouts across devices — every workout data can be
                  access via fitness watches to achieve your health goals as
                  easily as possible. You can also access customized workout
                  plans curated and guided by experts, along with instructions
                  presented in photos or voice guidance, plus a detailed
                  analysis of your heart rate and performance.
                </p>
              </li>
            </ul>
          </div>
        </CaseStudyDetailContainer>

        <SwimmoUserFlowChartWrapper
          style={{ padding: "8.8rem 0" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer>
            <h2>Worked on a flow</h2>
            <p className="mb-l">
              As we move ahead, I developed the information architecture of the
              application, which provided me with the fundamental framework and
              structure of the app, shaping various user journeys. This process
              enabled me to gain insights into how users could engage with the
              product effectively and helped establish user-centric navigation
              based on their goals.&quot;
            </p>
          </CaseStudyDetailContainer>
          <SwimmoUserFlow
            className="d-block x-center"
            style={{ boxShadow: "none" }}
            aria-label="User flow chart diagram"
          />
        </SwimmoUserFlowChartWrapper>

        <SwimmoUserFlowChartWrapper
          className="mt-xl"
          style={{ padding: "4rem 0 10.1rem" }}
        >
          <CaseStudyDetailContainer>
            <h2>Polished Designs</h2>
            <small className="is-text-xsm is-extra-bold mb-sm mt-sm">
              Embracing Onboarding for a Smooth Start
            </small>
            <p className="is-regular">
              Our onboarding process acts as a guiding beacon, leading visitors
              through a swift transition accompanied by concise microcopy that
              summarizes the entire experience. To showcase Swimmo&apos;s
              efficiency, practicality, and user-friendliness, we&apos;ve
              incorporated a clean and self-explanatory set of graphics across
              each tab.&quot;
            </p>
          </CaseStudyDetailContainer>
          <SwimmoPolishedDesign
            className="mt-md d-block x-center"
            style={{ boxShadow: "none" }}
          />
        </SwimmoUserFlowChartWrapper>

        <SwimmoUserFlowChartWrapper
          className="mt-xl"
          style={{ padding: "4rem 0 10.9rem" }}
        >
          <CaseStudyDetailContainer>
            <h2>Polished Designs</h2>
            <small className="is-extra-bold mb-sm mt-sm">
              Unlocking Optimal Nutrition for Swimmers
            </small>
            <p className="is-regular">
              In my research, I discovered that swimmers often harbor two
              opposing mindsets when it comes to their meals. Some believe, 'I
              swim hard every day, so I can eat whatever I want; I'm working it
              off when I swim.' Conversely, others think, 'I worked super hard
              in practice, so I don't want to ruin it by eating too much; I
              won't eat or will eat much less than what I probably should.'
            </p>
            <p className="is-regular">
              However, it is crucial to recognize that proper nutrition plays a
              pivotal role in meeting the rigorous demands of swim training.
              Even a brief lapse in nutritional diligence can significantly
              impede swimmers' ability to perform at their peak.
            </p>
            <p className="is-regular">
              Enter Swimmo Swimmer's Diet, a feature designed to assist users in
              crafting nutritious meal plans. This feature zeroes in on three
              critical aspects of sports nutrition: hydration, fueling, and
              recovery (HFR)."
            </p>
          </CaseStudyDetailContainer>
          <SwimmoPolishedDesign2
            className="mt-md d-block x-center"
            style={{ boxShadow: "none" }}
          />
        </SwimmoUserFlowChartWrapper>

        <SwimmoUserFlowChartWrapper
          className="mt-xl"
          style={{ padding: "4rem 0 4.8rem" }}
        >
          <CaseStudyDetailContainer>
            <h2>Polished Designs</h2>
            <small className="is-extra-bold mb-sm mt-sm">
              Fast sync with smartwatch as support
            </small>
            <p className="is-regular">
              With Swimmo, our unique features are always at your fingertips, or
              rather, your wrist. Through Bluetooth pairing, users can
              effortlessly monitor their daily workout routines. This
              functionality is indispensable because many user activities occur
              in the water, and smartwatches are typically water-resistant.
              Moreover, it serves as a brilliant usability enhancement, as most
              smartwatches provide haptic feedback, ensuring you stay connected
              even while submerged."
            </p>
          </CaseStudyDetailContainer>
          <SwimmoPolishedDesign3
            className="mt-md d-block x-center"
            style={{ boxShadow: "none" }}
          />
        </SwimmoUserFlowChartWrapper>

        <SwimmoUserFlowChartWrapper
          className="mt-xl"
          style={{ padding: "4rem 0 28rem" }}
        >
          <CaseStudyDetailContainer>
            <h2>Polished Designs</h2>
            <small className="is-extra-bold mb-sm mt-sm">
              Show more, tell less
            </small>
            <p className="is-regular">
              Keeping fit can also help tremendously with your self-confidence.
              So, shouldn’t anything count toward this goal?
            </p>
            <p className="is-regular mt-md">
              Introducing Swimmo Score — a great way to self-monitor daily
              physical activity levels can help to prevent declines in
              inactivity. Many of my concerns about designing this product are
              the "why" of what motivates people to be active. Traditional forms
              of appreciation in workout regimes can impact everything from
              mental health to self-confidence. If that is what motivates users
              to be more active, then more power to them.
            </p>
          </CaseStudyDetailContainer>
          <SwimmoPolishedDesign4
            className="mt-md d-block x-center"
            style={{ boxShadow: "none" }}
          />
        </SwimmoUserFlowChartWrapper>

        <CaseStudyDetailContainer className="mt-xl mb-xl">
          <p className="is-text-center is-text-xmd is-extra-md is-color-primary is-font-primary">
            That’s the end of this show!
          </p>
        </CaseStudyDetailContainer>
      </CaseStudyDetail>
      <CaseStudyDetailFooter item={caseStudyItems[0].cards[0]} />
    </Fragment>
  );
};

export default SwimmoCaseStudy;
