// Data
import { CASE_STUDY_ITEMS as caseStudyItems } from "../../../components/case-study-card-base/case-study-card-base.component";

// Components
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdAlarm } from "react-icons/md";
import { AiFillCheckCircle, AiFillHeart } from "react-icons/ai";
import { RiAlarmFill } from "react-icons/ri";
import { CaseStudyDetailHero } from "../../../components/case-study-detail-hero/case-study-detail-hero.component";
import { CaseStudyDetailFooter } from "../../../components/case-study-detail-footer/case-study-detail-footer.component";
import { QuoteBox } from "../../../components/quote-box/quote-box.component";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";

// Images
import FreteriumAffinityDiagram from "../../../assets/images/freterium-affinity-diagram.svg?react";
import FreteriumUserFlow from "../../../assets/images/freterium-user-flow.svg?react";
import FreteriumParticipants from "../../../assets/images/freterium-participants.svg?react";
import FreteriumAppcues from "../../../assets/images/freterium-appcues.svg?react";
import FreteriumLogisticScreen1 from "../../../assets/images/freterium-logistic-screen1.svg?react";
import FreteriumLogisticScreen2 from "../../../assets/images/freterium-logistic-screen2.svg?react";
import FreteriumLogisticScreen3 from "../../../assets/images/freterium-logistic-screen3.svg?react";
import FreteriumLogisticScreen4 from "../../../assets/images/freterium-logistic-screen4.svg?react";
import FreteriumLogisticScreen5 from "../../../assets/images/freterium-logistic-screen5.svg?react";
import FreteriumLogisticScreen6 from "../../../assets/images/freterium-logistic-screen6.svg?react";
import FreteriumLogisticScreen7 from "../../../assets/images/freterium-logistic-screen7.svg?react";
import FreteriumLogisticScreen8 from "../../../assets/images/freterium-logistic-screen8.svg?react";
import FreteriumLogisticScreen9 from "../../../assets/images/freterium-logistic-screen9.svg?react";
import FreteriumLogisticScreen10 from "../../../assets/images/freterium-logistic-screen10.svg?react";
import FreteriumLogisticScreen11 from "../../../assets/images/freterium-logistic-screen11.svg?react";
import FreteriumLogisticScreen12 from "../../../assets/images/freterium-logistic-screen12.svg?react";
import FreteriumLogisticScreen13 from "../../../assets/images/freterium-logistic-screen13.svg?react";
import FreteriumLogisticScreen14 from "../../../assets/images/freterium-logistic-screen14.svg?react";
import FreteriumLogisticScreen15 from "../../../assets/images/freterium-logistic-screen15.svg?react";
import FreteriumLogisticScreen16 from "../../../assets/images/freterium-logistic-screen16.svg?react";
import FreteriumLogisticScreen17 from "../../../assets/images/freterium-logistic-screen17.svg?react";
import FreteriumLogisticScreen18 from "../../../assets/images/freterium-logistic-screen18.svg?react";
import FreteriumLogisticScreen19 from "../../../assets/images/freterium-logistic-screen19.svg?react";
import CaseStudyHeroFreterium from "../../../assets/images/case-study-hero-freterium.svg?react";

// Styles
import "swiper/css";
import {
  FreteriumUserFlowChartWrapper,
  FreteriumParticipantGroup,
  FreteriumAvgMetrics,
} from "./freterium-case-study.styles";

// Static Data
const freteriumHeroItem = {
  title:
    "Revamping Onboarding: A User-Centric UX Approach to Elevate the First User Experience",
  expertise: "UX design, Research & Workshop",
  platforms: "Responsive Web App",
  role: "Senior UX Designer",
  img: CaseStudyHeroFreterium,
  year: "2022—2023",
  to: "https://www.freterium.com/",
};

const FreteriumCaseStudy = () => {
  return (
    <Fragment>
      <header>
        <CaseStudyDetailHero {...freteriumHeroItem} />
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
              rel="noreferrer"
            >
              Réda MANSOURI
            </a>{" "}
            Head of product,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/redasakhi/"
              target="_blank"
              rel="noreferrer"
            >
              Reda SAKHI
            </a>{" "}
            Product Owner,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/vicd129/"
              target="_blank"
              rel="noreferrer"
            >
              Viktor Demydov
            </a>{" "}
            UX/UI Designer,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/ghita-dassouli-077878152/"
              target="_blank"
              rel="noreferrer"
            >
              Ghita Dassouli
            </a>{" "}
            Business Analyst,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/almahdi-guedira-5b9b236b/"
              target="_blank"
              rel="noreferrer"
            >
              Almahdi Guedira
            </a>{" "}
            Head of Customer Success,{" "}
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/dkourilov/"
              target="_blank"
              rel="noreferrer"
            >
              Denis Kurilov
            </a>{" "}
            Tech Lead
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Research</h2>
          <p>
            "I have chosen the{" "}
            <span className="is-extra-bold">
              user interview research method
            </span>{" "}
            for several key reasons:
          </p>

          <ol>
            <li className="ml-md mb-sm">
              In-Depth Understanding: User interviews provide deep insights into
              user experiences and challenges, allowing you to uncover nuanced
              issues and solutions.
            </li>
            <li className="ml-md mb-sm">
              User-Centric Insights: They prioritize the user's perspective,
              ensuring research and solutions are rooted in real user
              experiences and preferences, leading to more effective product
              improvements.
            </li>
            <li className="ml-md mb-l">
              Quick and Timely Feedback: User interviews can be conducted
              swiftly, making them ideal for obtaining rapid insights and
              facilitating agile development based on real user feedback.
            </li>
          </ol>

          <h3 className="is-extra-bold is-color-primary mb-md heading-underline">
            Interview Structure
          </h3>
          <ul className="list-style-none">
            <li className="mb-md">
              <span className="is-extra-bold">Selection of Participants:</span>{" "}
              I along side Ghitta identify a diverse group of participants,
              including both new and existing users. Including logistics
              managers, fleet operators, and other relevant roles within
              logistics companies.
            </li>
            <li className="mb-md">
              <span className="is-extra-bold">Preparation:</span> Before
              conducting interviews, I create a list of open-ended questions
              tailored to Freterium's product. Questions aim to uncover
              participants' experiences, pain points, and expectations related
              to onboarding and initial product usage. Some sample questions
              include:
              <div className="rect-underline-left">
                <p className="is-italic is-text-sm is-regular">
                  "Can you walk me through your experience when you first
                  started using Freterium's logistics platform?"
                </p>
                <p className="is-italic is-text-sm is-regular">
                  "What specific challenges or roadblocks did you encounter
                  during the onboarding process for our product in your
                  logistics operations?"
                </p>
                <p className="is-italic is-text-sm is-regular">
                  "Were there any features or functionalities of Freterium's
                  platform that you found particularly confusing or difficult to
                  use?"
                </p>
                <p className="is-italic is-text-sm is-regular">
                  "Looking back, what could have made your initial experience
                  with Freterium's product better in the context of your
                  logistics operations?"
                </p>
              </div>
            </li>
            <li className="mb-md">
              <span className="is-extra-bold">Interview Sessions:</span> I
              conduct one-on-one interviews with participants virtually. Ensure
              that interviews are recorded, with participants' consent, to
              capture detailed responses accurately and to share with the team.
            </li>

            <li>
              <span className="is-block is-extra-bold mb-sm">
                Data Analysis:
              </span>{" "}
              After conducting the interviews, i then analyze the collected data
              systematically. placing recurring themes, pain points, and common
              experiences mentioned by participants. Paying attention to any
              variations in feedback based on user roles or company size, as
              these nuances can inform tailored solutions. These actions taken
              so i can carry my team along while creating affinity mapping, made
              sure my team understand what we are about to do i share this
              article with them to study{" "}
              <a
                className="is-underline"
                href="https://www.usertesting.com/blog/affinity-mapping#:~:text=What%20is%20affinity%20mapping%3F,and%20group%20it%20by%20category."
              >
                “https://www.usertesting.com/blog/affinity-mapping#:~:text=What%20is%20affinity%20mapping%3F,and%20group%20it%20by%20category.”
              </a>
            </li>
          </ul>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2 style={{ marginBottom: "6.7rem" }}>
            Emerging Patterns with affinity diagram.
          </h2>
          <FreteriumAffinityDiagram aria-label="Affinity Diagram" />
          <p className="mt-md is-text-sm">
            <strong className="is-extra-bold is-color-primary">Note:</strong>{" "}
            This affinity diagram is blurry intentionally because of the nature
            of my contract.
          </p>
        </CaseStudyDetailContainer>

        <FreteriumUserFlowChartWrapper className="mt-xl">
          <CaseStudyDetailContainer>
            <h2> Worked on a flow with the product and tech team</h2>
            <p className="mb-l">
              I took a holistic approach by considering the onboarding process
              in the context of the entire system. The goal was to address all
              issues comprehensively, with the aim of delivering a satisfying
              user experience that enables new users to quickly perceive the
              platform's value, from their initial interactions to the creation
              of their first transport order (TO). I shared this perspective
              with the team to encourage a collective effort in reimagining the
              user flow in a way that prioritizes user-centric solutions and
              aligns with our overarching goals for improvement.
            </p>
            <FreteriumUserFlow aria-label="User flow chart diagram" />
            <p className="mt-md is-color-primary is-text-sm">
              <strong className="is-extra-bold">Note:</strong> This flow is
              blurry intentionally because of the nature of my contract.
            </p>
          </CaseStudyDetailContainer>
        </FreteriumUserFlowChartWrapper>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Visual design iteration.</h2>
          <p>
            The visual design was meticulously crafted with the primary goal of
            creating a delightful and engaging experience for users. The
            high-fidelity screens were instrumental in providing a realistic
            representation of the product, facilitating valuable stakeholder
            feedback, and enabling interactive usability testing.
          </p>
        </CaseStudyDetailContainer>

        <FreteriumUserFlowChartWrapper
          style={{ padding: "4rem 0 10rem", backgroundImage: "none" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer
            className="mb-md"
            style={{ maxWidth: "796px" }}
          >
            <h2>
              Take a look at the New experience of listing properties on Bongalo
            </h2>
            <span className="case-study-note-box">
              NB: swipe right to view more mockups
            </span>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1320px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={220}
              style={{ height: "620px" }}
            >
              <SwiperSlide>
                <FreteriumLogisticScreen1 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen2 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen3 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen4 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen5 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen6 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen7 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen8 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen9 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen10 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen11 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen12 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen13 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen14 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen15 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen16 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen17 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen18 />
              </SwiperSlide>
              <SwiperSlide>
                <FreteriumLogisticScreen19 />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </FreteriumUserFlowChartWrapper>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2> Usability testing</h2>
          <p>
            I carefully outline the scenarios and tasks that users will perform
            during the usability test. i also provide clear instructions on how
            to access the Figma prototype to the selected participant.
          </p>
          <p className="mb-l">
            while i observes and takes notes on participant interactions, paying
            close attention to pain points, confusion, or unexpected behaviours.
          </p>

          <FreteriumParticipantGroup>
            <div>
              <h3 className="is-regular" style={{ marginBottom: "1.3rem" }}>
                14 Participants
              </h3>
              <FreteriumParticipants />
            </div>
            <div>
              <h3 className="is-regular" style={{ marginBottom: "1.3rem" }}>
                Duration
              </h3>
              <div className="participant-duration-group">
                <MdAlarm />
                <p className="is-regular">40 minutes per session</p>
              </div>
            </div>
          </FreteriumParticipantGroup>

          <FreteriumAvgMetrics className="mt-l">
            <h3 className="is-regular" style={{ marginBottom: "1.3rem" }}>
              Average Metrics Recorded
            </h3>
            <ul className="list-style-none avg-metrics-list">
              <li>
                <AiFillCheckCircle />{" "}
                <p>
                  Success Rate:{" "}
                  <span className="is-extra-bold is-color-primary"> 76%</span>
                </p>
              </li>
              <li>
                <RiAlarmFill />
                <p>
                  Time to complete:{" "}
                  <span className="is-extra-bold"> 3.20 </span> minutes
                </p>
              </li>
              <li>
                <AiFillHeart />
                <p>
                  Participant's subjective satisfaction:{" "}
                  <span className="is-extra-bold"> 85% </span>
                </p>
              </li>
            </ul>
          </FreteriumAvgMetrics>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Results</h2>
          <ul>
            <li className="ml-md mb-sm">
              Participants found the new proposed designs in the Figma prototype
              to be visually appealing and more intuitive compared to the
              previous version.
            </li>
            <li className="ml-md mb-sm">
              Navigation within the prototype was smooth, and users quickly
              located key features and functions.
            </li>
            <li className="ml-md mb-sm">
              Users reported a 38% reduction in task completion times,
              indicating improved efficiency in performing essential actions.
            </li>
            <li className="ml-md mb-sm">
              Minor issues were identified with the color contrast, which will
              be addressed to enhance accessibility.
            </li>
            <li className="ml-md mb-sm">
              Users expressed a desire for additional tooltips and on-screen
              guidance, suggesting a potential area for improvement.
            </li>
            <li className="ml-md mb-sm">
              Overall, the usability test results validate the effectiveness of
              the new designs in enhancing the user experience, with a few minor
              adjustments recommended for further refinement.
            </li>
          </ul>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Faced with internal challenges</h2>
          <p>
            Management's urgency to save time while still focusing on critical
            product areas, I found myself in a high-pressure situation. The
            usability test results were promising, but management was looking
            for a quicker solution. To address this, I initiated a meeting with
            the Head of Product, the Product Owner, and the Tech Lead to
            brainstorm possible compromises.
          </p>
          <p>
            During our discussion, I proposed a few ideas. One approach was to
            use videos as a means to guide users through the onboarding process.
            Additionally, I suggested the use of tooltips to provide users with
            contextual guidance. However, I acknowledged that developing
            tooltips might still consume valuable time.
          </p>
          <p>
            To expedite the process, I recommended leveraging a tool like
            Appcues. This platform could potentially save us time in
            implementing user guidance features. To ensure a quick and effective
            implementation, I delved into Appcues to gain a deeper understanding
            of how to leverage its capabilities to achieve rapid results.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Using Appcues</h2>
          <p className="is-color-primary mb-l">
            <span className="is-block is-extra-md">
              Writing user story and notes that will be written in tooltip
            </span>
            <a
              href="https://docs.google.com/document/d/1NtzKfuH0nJ0nfkSkzvWDveAkZ1Z4T-53/edit?usp=sharing&ouid=109556280509711929285&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              https://docs.google.com/document/d/1NtzKfuH0nJ0nfkSkzvWDveAkZ1Z4T-53/edit?usp=sharing&ouid=109556280509711929285&rtpof=true&sd=true
            </a>
          </p>
          <div className="is-text-center">
            <FreteriumAppcues />
          </div>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>In Conclusion</h2>
          <p>
            Our decision to adopt Appcues and implement tooltips alongside the
            Net Promoter Score (NPS) feature proved to be a valuable step in our
            product improvement journey. While the results didn't quite reach
            the 70% target we had initially hoped for, the approach was
            significantly faster and more cost-effective in driving traction
            toward our business objectives, especially in the context of Product
            Led Growth.
          </p>
          <p>
            This project ignited a fire within me, strengthening my leadership
            and collaboration skills. It was a profound learning experience,
            highlighting the various constraints and challenges that can
            influence business progress. Additionally, I acquired a wealth of
            knowledge about leveraging different tools to compensate for project
            delivery, leading to an immense and enriching learning curve.
          </p>
        </CaseStudyDetailContainer>

        <QuoteBox
          className="mt-xl is-bg-accent-100"
          quote="From every UX and UI feature we've presented to him, he has masterfully translated our vision into stunning, user-friendly designs. Our clients consistently rave about the captivating aesthetics and intuitive functionality of our Optimization page. His remarkable talent as a UI and UX designer has transformed our product vision into a tangible reality, leaving us in awe of his remarkable skills.”"
          citeName="Réda MANSOURI"
          citeRole="Head of product @Freterium"
        />
      </CaseStudyDetail>

      <CaseStudyDetailFooter item={caseStudyItems[0].cards[1]} />
    </Fragment>
  );
};

export default FreteriumCaseStudy;
