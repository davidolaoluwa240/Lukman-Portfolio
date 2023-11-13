// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import { MdAlarm } from "react-icons/md";
import { AiFillCheckCircle, AiFillHeart } from "react-icons/ai";
import { RiAlarmFill } from "react-icons/ri";
import {
  CaseStudyDetailHero,
  QuoteBox,
  CaseStudyDetailFooter,
} from "../../../components";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";
import FreteriumAffinityDiagram from "../../../assets/images/freterium-affinity-diagram.svg?react";
import FreteriumUserFlow from "../../../assets/images/freterium-user-flow.svg?react";
import FreteriumParticipants from "../../../assets/images/freterium-participants.svg?react";

// Styles
// FreteriumUserFlowChartWrapper;

export const FreteriumCaseStudy = () => {
  const {
    CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems,
    CASE_STUDY_ITEMS: caseStudyItems,
  } = useStaticData();

  return (
    <Fragment>
      <header>
        <CaseStudyDetailHero {...caseStudyDetailHeroItems.freterium} />
      </header>

      <CaseStudyDetail>
        <CaseStudyDetailContainer as="section">
          <h2> Introduction</h2>
          <p>
            Freterium is a collaborative SaaS that connects organizations,
            people and technologies in the logistics value chain to help them
            move things. In response to shifting business strategies towards
            product-led growth, Freterium acknowledges the need to optimize the
            onboarding process for new users. Previously, the company focused on
            selling the product before prioritizing user onboarding and usage
            experience. This approach often led to challenges in delivering
            perceived value, especially after the initial sale.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>The problems</h2>
          <ol>
            <li className="ml-md mb-sm">
              Customers struggle to see the full value of Freterium's product
              after purchase, despite recognizing its potential during the sales
              pitch.
            </li>
            <li className="ml-md">
              The complexity resulting from accommodating numerous feature
              requests during the sales process has made onboarding and product
              usage challenging for users.
            </li>
          </ol>

          <p className="is-italic">
            Our goal is to enhance the first user experience during onboarding
            by simplifying the process and making the product's value more
            evident from the outset, ultimately increasing user satisfaction and
            engagement.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Objective</h2>
          <p>
            The primary objective is to create a seamless and engaging
            onboarding experience that helps new users quickly grasp the
            product's value and encourages regular usage. Specifically, aims to:
          </p>

          <ol>
            <li className="ml-md list-marker-primary">
              <span className="is-extra-bold mb-sm">
                Reduce the learning curve:
              </span>{" "}
              Minimize the time it takes for users to understand and use the
              product effectively.
            </li>
            <li className="ml-md list-marker-primary">
              <span className="is-extra-bold mb-sm">
                Increase user engagement:
              </span>{" "}
              Encourage users to explore and utilize the product features
              regularly.
            </li>
            <li className="ml-md list-marker-primary">
              <span className="is-extra-bold mb-sm">
                Improve perceived value:
              </span>{" "}
              Ensure that users can easily recognize the value of the product
              from their very first interaction.
            </li>
          </ol>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Collaborators</h2>
          <p>
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/r%C3%A9da-mansouri-26015691/"
              target="_blank"
            >
              Réda MANSOURI
            </a>{" "}
            Head of product,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/redasakhi/"
              target="_blank"
            >
              Reda SAKHI
            </a>{" "}
            Product Owner,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/vicd129/"
              target="_blank"
            >
              Viktor Demydov
            </a>{" "}
            UX/UI Designer,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/ghita-dassouli-077878152/"
              target="_blank"
            >
              Ghita Dassouli
            </a>{" "}
            Business Analyst,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/almahdi-guedira-5b9b236b/"
              target="_blank"
            >
              Almahdi Guedira
            </a>{" "}
            Head of Customer Success,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/dkourilov/"
              target="_blank"
            >
              Denis Kurilov
            </a>{" "}
            Tech Lead
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Research</h2>
          <p>
            "I have chosen the user interview research method for several key
            reasons:
          </p>
          <ol>
            <li>
              In-Depth Understanding: User interviews provide deep insights into
              user experiences and challenges, allowing you to uncover nuanced
              issues and solutions.
            </li>
            <li>
              User-Centric Insights: They prioritize the user's perspective,
              ensuring research and solutions are rooted in real user
              experiences and preferences, leading to more effective product
              improvements.
            </li>
            <li>
              Quick and Timely Feedback: User interviews can be conducted
              swiftly, making them ideal for obtaining rapid insights and
              facilitating agile development based on real user feedback.
            </li>
          </ol>

          <h3>Interview Structure</h3>
          <ul>
            <li>
              <span>Selection of Participants:</span> I along side Ghitta
              identify a diverse group of participants, including both new and
              existing users. Including logistics managers, fleet operators, and
              other relevant roles within logistics companies.
            </li>
            <li>
              <span>Preparation:</span> Before conducting interviews, I create a
              list of open-ended questions tailored to Freterium's product.
              Questions aim to uncover participants' experiences, pain points,
              and expectations related to onboarding and initial product usage.
              Some sample questions include:
              <p>
                "Can you walk me through your experience when you first started
                using Freterium's logistics platform?"
              </p>
              <p>
                "What specific challenges or roadblocks did you encounter during
                the onboarding process for our product in your logistics
                operations?"
              </p>
              <p>
                "Were there any features or functionalities of Freterium's
                platform that you found particularly confusing or difficult to
                use?"
              </p>
              <p>
                "Looking back, what could have made your initial experience with
                Freterium's product better in the context of your logistics
                operations?"
              </p>
            </li>
            <li>
              <span>Interview Sessions:</span> I conduct one-on-one interviews
              with participants virtually. Ensure that interviews are recorded,
              with participants' consent, to capture detailed responses
              accurately and to share with the team.
            </li>

            <li>
              <span>Data Analysis:</span> After conducting the interviews, i
              then analyze the collected data systematically. placing recurring
              themes, pain points, and common experiences mentioned by
              participants. Paying attention to any variations in feedback based
              on user roles or company size, as these nuances can inform
              tailored solutions. These actions taken so i can carry my team
              along while creating affinity mapping, made sure my team
              understand what we are about to do i share this article with them
              to study{" "}
              <a href="https://www.usertesting.com/blog/affinity-mapping#:~:text=What%20is%20affinity%20mapping%3F,and%20group%20it%20by%20category.">
                “https://www.usertesting.com/blog/affinity-mapping#:~:text=What%20is%20affinity%20mapping%3F,and%20group%20it%20by%20category.”
              </a>
            </li>
          </ul>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Emerging Patterns with affinity diagram.</h2>
          <FreteriumAffinityDiagram aria-label="Affinity Diagram" />
          <p>
            <strong>Note:</strong> This affinity diagram is blurry intentionally
            because of the nature of my contract.
          </p>
        </CaseStudyDetailContainer>

        {/* <FreteriumUserFlowChartWrapper> */}
        <CaseStudyDetailContainer>
          <h2> Worked on a flow with the product and tech team</h2>
          <p>
            I took a holistic approach by considering the onboarding process in
            the context of the entire system. The goal was to address all issues
            comprehensively, with the aim of delivering a satisfying user
            experience that enables new users to quickly perceive the platform's
            value, from their initial interactions to the creation of their
            first transport order (TO). I shared this perspective with the team
            to encourage a collective effort in reimagining the user flow in a
            way that prioritizes user-centric solutions and aligns with our
            overarching goals for improvement.
          </p>
          <FreteriumUserFlow aria-label="User flow chart diagram" />
          <p>
            <strong>Note:</strong> This flow is blurry intentionally because of
            the nature of my contract.
          </p>
        </CaseStudyDetailContainer>
        {/* </FreteriumUserFlowChartWrapper> */}

        <CaseStudyDetailContainer as="section">
          <h2>Visual design iteration.</h2>
          <p>
            The visual design was meticulously crafted with the primary goal of
            creating a delightful and engaging experience for users. The
            high-fidelity screens were instrumental in providing a realistic
            representation of the product, facilitating valuable stakeholder
            feedback, and enabling interactive usability testing.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2> Usability testing</h2>
          <p>
            I carefully outline the scenarios and tasks that users will perform
            during the usability test. i also provide clear instructions on how
            to access the Figma prototype to the selected participant.
          </p>
          <p>
            while i observes and takes notes on participant interactions, paying
            close attention to pain points, confusion, or unexpected behaviours.
          </p>

          {/* <FreteriumParticipantGroup> */}
          <div>
            <h3>14 Participants</h3>
            <FreteriumParticipants />
          </div>
          <div>
            <h3>Duration</h3>
            <p>
              <MdAlarm /> 40 minutes per session
            </p>
          </div>
          {/* </FreteriumParticipantGroup> */}

          <div>
            <h3>Average Metrics Recorded</h3>
            <ul>
              <li>
                <AiFillCheckCircle /> Success Rate : 76%
              </li>
              <li>
                <RiAlarmFill />
                Time to complete: 3.20 minutes
              </li>
              <li>
                <AiFillHeart />
                Participant's subjective satisfaction : 85%
              </li>
            </ul>
          </div>
        </CaseStudyDetailContainer>

        <QuoteBox
          className="mt-xl"
          quote="From every UX and UI feature we've presented to him, he has masterfully translated our vision into stunning, user-friendly designs. Our clients consistently rave about the captivating aesthetics and intuitive functionality of our Optimization page. His remarkable talent as a UI and UX designer has transformed our product vision into a tangible reality, leaving us in awe of his remarkable skills.”"
          citeName="Réda MANSOURI"
          citeRole="Head of product @Freterium"
        />
      </CaseStudyDetail>

      <CaseStudyDetailFooter item={caseStudyItems[0].cards[1]} />
    </Fragment>
  );
};
