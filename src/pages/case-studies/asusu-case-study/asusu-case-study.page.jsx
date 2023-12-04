// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CaseStudyDetailHero,
  CaseStudyDetailFooter,
  QuoteBox,
} from "../../../components";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
  UserPersonasCard,
  UserPersonasList,
} from "../../../assets/styles/common.styles";
import { FreteriumUserFlowChartWrapper as AsusuUserFlowChartWrapper } from "../freterium-case-study/freterium-case-study.styles";
import AsusuUserFlow from "../../../assets/images/asusu-user-flow.svg?react";
import AsusuDesign1 from "../../../assets/images/asusu-design-1.svg?react";
import AsusuDesign2 from "../../../assets/images/asusu-design-2.svg?react";
import AsusuResearchField from "../../../assets/images/asusu-research-field.svg?react";
import AsusuPolishedDesignOther1 from "../../../assets/images/asusu-polished-design-other1.svg?react";
import AsusuPolishedDesignOther2 from "../../../assets/images/asusu-polished-design-other2.svg?react";
import AsusuPolishedDesignOther3 from "../../../assets/images/asusu-polished-design-other3.svg?react";
import AsusuPolishedDesignOther4 from "../../../assets/images/asusu-polished-design-other4.svg?react";
import AsusuPolishedDesignOther5 from "../../../assets/images/asusu-polished-design-other5.svg?react";
import AsusuPolishedDesignOther6 from "../../../assets/images/asusu-polished-design-other6.svg?react";
import AsusuPolishedDesignOther7 from "../../../assets/images/asusu-polished-design-other7.svg?react";
import AsusuPolishedDesignOther8 from "../../../assets/images/asusu-polished-design-other8.svg?react";
import AsusuPolishedDesignOther9 from "../../../assets/images/asusu-polished-design-other9.svg?react";
import AsusuPolishedDesignOther10 from "../../../assets/images/asusu-polished-design-other10.svg?react";
import AsusuPolishedDesignOther11 from "../../../assets/images/asusu-polished-design-other11.svg?react";
import AsusuPolishedDesignOther12 from "../../../assets/images/asusu-polished-design-other12.svg?react";
import AsusuPolishedDesignOther13 from "../../../assets/images/asusu-polished-design-other13.svg?react";
import AsusuPolishedDesignOther14 from "../../../assets/images/asusu-polished-design-other14.svg?react";
import AsusuPolishedDesignOther15 from "../../../assets/images/asusu-polished-design-other14.svg?react";
import AsusuPolishedDesign1 from "../../../assets/images/asusu-polished-design1.svg?react";
import AsusuPolishedDesign2 from "../../../assets/images/asusu-polished-design2.svg?react";
import AsusuPolishedDesign3 from "../../../assets/images/asusu-polished-design3.svg?react";
import AsusuPolishedDesign4 from "../../../assets/images/asusu-polished-design4.svg?react";
import AsusuPolishedDesign5 from "../../../assets/images/asusu-polished-design5.svg?react";
import AsusuPolishedDesign6 from "../../../assets/images/asusu-polished-design6.svg?react";
import AsusuPolishedDesign7 from "../../../assets/images/asusu-polished-design7.svg?react";
import AsusuPolishedDesign8 from "../../../assets/images/asusu-polished-design8.svg?react";
import AsusuPolishedDesign9 from "../../../assets/images/asusu-polished-design9.svg?react";
import AsusuPolishedDesign10 from "../../../assets/images/asusu-polished-design10.svg?react";
import AsusuPolishedDesign11 from "../../../assets/images/asusu-polished-design11.svg?react";

// Styles
import "swiper/css";

export const AsusuCaseStudy = () => {
  const {
    CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems,
    CASE_STUDY_ITEMS: caseStudyItems,
  } = useStaticData();

  return (
    <Fragment>
      <CaseStudyDetailHero {...caseStudyDetailHeroItems.asusu} />

      <CaseStudyDetail>
        <CaseStudyDetailContainer as="section">
          <h2>Introduction</h2>
          <p>
            I had the privilege of working on a transformative project aimed at
            revolutionizing the digital banking experience for credit unions,
            specifically Savings and Credit Cooperative Societies (SACCOs). The
            project's primary objective was to enhance operational efficiency at
            the cooperative staff level through the implementation of
            proprietary Backend-as-a-Service (BaaS) software. Additionally, we
            aimed to provide end clients with a modern, user-friendly mobile
            banking application that emulates the simplicity and convenience of
            neobank-style platforms.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>The problems</h2>
          <p>
            Credit unions, including SACCOs, have historically been reliant on
            manual processes and outdated technology for their banking
            operations. This not only hindered their ability to serve members
            effectively but also posed significant security and scalability
            challenges. To address these issues, our client sought to develop a
            digital banking platform that would streamline operations, enhance
            member experiences, and position SACCOs as competitive players in
            the financial services industry.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Design Goals</h2>
          <ol className="ml-md">
            <li className="mb-sm">
              Efficiency Enhancement: Streamline and automate the operational
              processes of credit unions and SACCOs to reduce administrative
              overhead.
            </li>
            <li className="mb-sm">
              User-Centric: Develop a user-friendly mobile banking app that
              caters to the end clients (members of credit unions and SACCOs).
            </li>
            <li>
              Seamless Integration: Ensure the proprietary backend-as-a-service
              (BaaS) software integrates smoothly with existing credit union
              systems.
            </li>
          </ol>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Collaborators</h2>
          <p className="is-regular">
            <a
              className="is-extra-bold is-color-primary"
              href="https://www.linkedin.com/in/bardeson-lucky-687ab834/"
              target="_blank"
              rel="noreferrer"
            >
              BARDESON LUCKY
            </a>{" "}
            Lead Engineer,{" "}
            <a
              className="is-extra-bold is-color-primary"
              href="https://www.linkedin.com/in/mubarak-aminu/"
              target="_blank"
              rel="noreferrer"
            >
              Mubarak Muhammad Aminu
            </a>{" "}
            Backend engineer{" "}
            <a
              className="is-extra-bold is-color-primary"
              href="https://www.linkedin.com/in/bitrus-amlai/"
              target="_blank"
              rel="noreferrer"
            >
              Amlai (Istifanus) Bitrus
            </a>{" "}
            COO/Business analyst,{" "}
            <a
              className="is-extra-bold is-color-primary"
              href="https://www.linkedin.com/in/yzakari/"
              target="_blank"
              rel="noreferrer"
            >
              Yusuf Walter Zakari
            </a>{" "}
            CEO
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Discovery Phase</h2>

          <h3 className="is-extra-bold">User Research</h3>
          <p>
            To understand the needs of credit unions, SACCOs, and their members,
            we conducted extensive user research. This included interviews,
            surveys, and on-site observations.
          </p>
          <p>Key Insights:</p>

          <ul className="ml-md mb-l">
            <li>
              Credit union staff desired a simplified way to manage member
              accounts, loans, and deposits.
            </li>
            <li>
              Members wanted a secure and intuitive mobile app for accessing
              their accounts, making transactions, and applying for loans.
            </li>
            <li>
              The existing software and systems were outdated, causing frequent
              errors and inefficiencies.
            </li>
          </ul>

          <h3 className="is-extra-bold">Stakeholder Interviews</h3>
          <p>
            The stakeholder interviews conducted during the research phase of
            our digital banking platform project were a cornerstone of our
            journey. They allowed us to delve deep into the world of Credit
            Unions, SACCOs, and their members, revealing invaluable insights,
            pain points, and aspirations.
          </p>

          <h3 className="is-extra-bold">Extensive Field Research</h3>
          <p>
            To ensure the digital banking platform was tailored precisely to the
            needs of the local cooperatives, I conducted extensive field
            research in various regions, including Zamfara State, Kano State,
            Abuja, and Lagos State. This on-the-ground research involved
            engaging with cooperative stakeholders, including managers, staff
            members, and members themselves. These in-depth interviews and
            interactions were instrumental in uncovering the unique challenges
            and aspirations of each region, ensuring that the final product was
            not only user-friendly
          </p>

          <h3 className="is-extra-bold">Engaging with Key Stakeholders</h3>
          <p>
            Our interviews encompassed a diverse range of participants, ensuring
            that we gained a holistic understanding of the Credit Union
            ecosystem. These participants included:
          </p>

          <ol style={{ marginLeft: "1.6rem" }}>
            <li className="is-extra-md">
              Credit Union Managers
              <p>
                These individuals held pivotal roles in overseeing the
                operations and strategies of their Credit Unions. Their
                perspectives provided valuable insights into the broader
                challenges and aspirations of the institutions.
              </p>
              <h4>Key Managerial Insights:</h4>
              <ul className="ml-md">
                <li>
                  Technology Obsolescence: Managers often expressed their
                  frustration with outdated systems and software, which hindered
                  operational efficiency and posed security risks.
                </li>
                <li>
                  Desire for Modernization: They emphasized the urgent need for
                  streamlined processes, enhanced member services, and a digital
                  transformation to remain competitive in the financial sector.
                </li>
              </ul>
            </li>
            <li className="is-extra-md">
              Credit Union Staff Members
              <p>
                The frontline staff members played a vital role in delivering
                services to members. Their experiences and daily interactions
                were essential in uncovering operational pain points.
              </p>
              <h4>Staff Member Insights:</h4>
              <ul className="ml-md">
                <li>
                  Overwhelmed by Manual Processes: Staff members frequently
                  cited the burden of manual paperwork and time-consuming
                  administrative tasks. These processes not only delayed
                  services but also led to errors.
                </li>
                <li>
                  Yearning for Efficiency: They expressed a strong desire for
                  technology-driven solutions that would alleviate their
                  workload and enable them to provide faster, more accurate
                  member services.
                </li>
              </ul>
            </li>
            <li className="is-extra-md">
              Credit Union Members
              <p>
                The most critical perspective in our stakeholder interviews came
                from the members themselves, as they were the end-users of the
                banking services provided by Credit Unions.
              </p>
              <h4>Member Insights:</h4>
              <ul className="ml-md">
                <li>
                  Long Queues and Wait Times: Members shared their frustrations
                  with long queues at physical branches and prolonged waiting
                  times for basic transactions.
                </li>
                <li>
                  Demand for Modernization: They desired a contemporary banking
                  experience with the convenience of mobile banking, including
                  features such as mobile check deposits, online transfers, and
                  digital account management.
                </li>
                <li>
                  Trust in Cooperative Values: While seeking modernization,
                  members also emphasized the importance of retaining the trust
                  and cooperative values that Credit Unions represented.
                </li>
              </ul>
            </li>
          </ol>
        </CaseStudyDetailContainer>

        <section
          style={{ padding: "2.4rem 6.4rem 6.4rem" }}
          className="is-bg-white mt-xl"
        >
          <CaseStudyDetailContainer as="h2">
            User personas
          </CaseStudyDetailContainer>
          <UserPersonasList className="mt-md">
            <UserPersonasCard>
              <h3 className="case-study-detail-subheading is-color-primary-7 is-font-primary">
                Credit Union Manager
              </h3>
              <h4 className="is-extra-bold">Background:</h4>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">Name: David Turner</li>
                <li className="is-text-sm is-regular">Age: 42</li>
                <li className="is-text-sm is-regular">
                  Role: Credit Union Manager
                </li>
                <li className="is-text-sm is-regular">
                  Experience: Over 10 years in the banking industry, including 5
                  years managing a Credit Union.
                </li>
                <li className="is-text-sm is-regular">
                  Challenges: Struggling with outdated systems, facing increased
                  competition, and the need to improve operational efficiency.
                </li>
              </ul>

              <h5 className="is-extra-bold is-text-sm">
                Goals and Aspirations:
              </h5>

              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Modernize Credit Union operations.
                </li>
                <li className="is-text-sm is-regular">
                  Enhance member services.
                </li>
                <li className="is-text-sm is-regular">
                  Implement technology-driven solutions.
                </li>
                <li className="is-text-sm is-regular">
                  Ensure the security of member data.
                </li>
              </ul>

              <h5 className="is-extra-bold is-text-sm">Pain Points:</h5>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Frustration with legacy systems.
                </li>
                <li className="is-text-sm is-regular">
                  Fear of falling behind in the digital era.
                </li>
                <li className="is-text-sm is-regular">
                  Pressure to maintain trust while modernizing.
                </li>
              </ul>
            </UserPersonasCard>

            <UserPersonasCard className="is-bg-accent-300">
              <h3 className="case-study-detail-subheading is-font-primary is-color-primary">
                Credit Union Staff Member
              </h3>
              <h4 className="is-extra-bold is-color-primary">Background:</h4>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">Name: Sarah Rodriguez</li>
                <li className="is-text-sm is-regular">Age: 28</li>
                <li className="is-text-sm is-regular">
                  Role: Member Services Representative
                </li>
                <li className="is-text-sm is-regular">
                  Experience: 5 years in a Credit Union, responsible for
                  processing member transactions and inquiries.
                </li>
                <li className="is-text-sm is-regular">
                  Challenges: Burdened by manual paperwork, long queues, and a
                  desire for greater efficiency.
                </li>
              </ul>

              <h5 className="is-color-primary is-extra-bold">
                Goals and Aspirations:
              </h5>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Provide exceptional member service.
                </li>
                <li className="is-text-sm is-regular">
                  Streamline daily tasks.
                </li>
                <li className="is-text-sm is-regular">
                  Reduce errors in transactions.
                </li>
                <li className="is-text-sm is-regular">
                  Improve work-life balance.
                </li>
              </ul>

              <h5 className="is-color-primary is-extra-bold">Pain Points:</h5>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Overwhelmed by paperwork and repetitive tasks.
                </li>
                <li className="is-text-sm is-regular">
                  Struggling with long queues and member dissatisfaction.
                </li>
                <li className="is-text-sm is-regular">
                  Eagerness to embrace technology to simplify work.
                </li>
              </ul>
            </UserPersonasCard>

            <UserPersonasCard className="is-bg-body-color">
              <h3 className="case-study-detail-subheading is-font-primary is-color-primary">
                Credit Union Member
              </h3>
              <h4 className="is-extra-bold is-color-primary">Background:</h4>
              <ul className="ml-md">
                <li className="is-text-sm is-regular">Name: Emily Baker</li>
                <li className="is-text-sm is-regular">Age: 35</li>
                <li className="is-text-sm is-regular">
                  Occupation: School Teacher
                </li>
                <li className="is-text-sm is-regular">
                  Experience: A member of her local Credit Union for 7 years.
                </li>
                <li className="is-text-sm is-regular">
                  Challenges: Frustrated with long wait times, limited access to
                  services, and the need for modern banking solutions.
                </li>
              </ul>

              <h5 className="is-extra-bold">Goals and Aspirations:</h5>

              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Efficiently manage her finances.
                </li>
                <li className="is-text-sm is-regular">
                  Minimize time spent on banking transactions.
                </li>
                <li className="is-text-sm is-regular">
                  Have access to advanced banking features.
                </li>
                <li className="is-text-sm is-regular">
                  Trust in the cooperative values of her Credit Union.
                </li>
              </ul>

              <h5 className="is-extra-bold">Pain Points:</h5>

              <ul className="ml-md">
                <li className="is-text-sm is-regular">
                  Time-consuming visits to the Credit Union branch.
                </li>
                <li className="is-text-sm is-regular">
                  Limited access to digital banking services.
                </li>
                <li className="is-text-sm is-regular">
                  Desire for a convenient and user-friendly mobile banking
                  experience.
                </li>
              </ul>
            </UserPersonasCard>
          </UserPersonasList>
        </section>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Customer Insights</h2>
          <p>
            From the user interviews, contextual analysis and stakeholder
            interviews I gained qualitative insights. It also helped in
            understanding user expectations, behaviors, needs, and motivations.
            We then used these Insights to ensure that all product design
            decisions do benefit the user.
          </p>

          <div className="is-flex-center mt-md">
            <div>
              <h3 className="is-text-md is-extra-bold is-color-primary">
                Staff Pain
              </h3>
              <ul className="list-style-dash" style={{ marginLeft: "1.5rem" }}>
                <li>Managing members</li>
                <li>Sharing summary transaction report</li>
                <li>Requesting top up funds</li>
              </ul>
            </div>

            <div>
              <h3 className="is-text-md is-extra-bold is-color-primary">
                Manager’s Pain
              </h3>
              <ul className="list-style-dash" style={{ marginLeft: "1.5rem" }}>
                <li>Managing top up fund requests</li>
                <li>Managing loan set up</li>
                <li>Managing Staff and staff settings</li>
              </ul>
            </div>
          </div>
        </CaseStudyDetailContainer>

        <AsusuUserFlowChartWrapper
          style={{ padding: "4.7rem 0" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer>
            <h2>Worked on a flow with the product and tech team</h2>
            <p className="mb-l">
              I took a holistic approach by considering the onboarding process
              in the context of the entire system. The goal was to address all
              issues comprehensively, with the aim of delivering a satisfying
              user experience that enables new users to quickly perceive the
              platform&apos;s value, from their initial interactions to the
              creation of their first transport order (TO). I shared this
              perspective with the team to encourage a collective effort in
              reimagining the user flow in a way that prioritizes user-centric
              solutions and aligns with our overarching goals for improvement.
            </p>
            <AsusuUserFlow aria-label="User flow chart diagram" />
            <p className="mt-md is-text-sm">
              <strong className="is-extra-bold is-color-primary">Note:</strong>{" "}
              This flow is blurry intentionally because of the nature of my
              contract.
            </p>
          </CaseStudyDetailContainer>
        </AsusuUserFlowChartWrapper>

        <AsusuUserFlowChartWrapper
          style={{ padding: "4rem 0 10rem", backgroundImage: "none" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer
            className="mb-md"
            style={{ maxWidth: "796px" }}
          >
            <h2>Polished Designs</h2>
            <p className="mt-sm mb-sm is-regular">
              This is the flow of member management{" "}
            </p>
            <span className="case-study-note-box">
              NB: swipe right to view more mockups
            </span>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1320px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={220}
              style={{ height: "773.071px" }}
            >
              <SwiperSlide>
                <AsusuPolishedDesign1 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign2 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign3 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign4 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign5 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign6 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign7 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign8 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign9 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign10 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesign11 />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </AsusuUserFlowChartWrapper>

        <AsusuUserFlowChartWrapper
          style={{ padding: "4rem 0 10rem" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer
            className="mb-md"
            style={{ maxWidth: "796px" }}
          >
            <h2>Polished Designs</h2>
            <p className="mt-sm mb-sm is-regular">...Some other screens </p>
            <span className="case-study-note-box">
              NB: swipe right to view more mockups
            </span>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1320px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={220}
              style={{ height: "774.993px" }}
            >
              <SwiperSlide>
                <AsusuPolishedDesignOther1 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther2 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther3 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther4 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther5 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther6 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther7 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther8 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther9 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther10 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther11 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther12 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther13 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther14 />
              </SwiperSlide>
              <SwiperSlide>
                <AsusuPolishedDesignOther15 />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </AsusuUserFlowChartWrapper>

        <AsusuUserFlowChartWrapper
          style={{ padding: "4rem 0" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer style={{ maxWidth: "946px" }}>
            <h2>Polished Designs</h2>
            <p className="mb-l is-regular">
              Mobile application for the end users to view their balance, apply
              for loans and perform other financial activities.
            </p>
            <div
              className="is-flex-center"
              style={{ justifyContent: "flex-start" }}
            >
              <div style={{ padding: "3.2rem 0", marginRight: "15rem" }}>
                <AsusuDesign1 />
              </div>
              <div style={{ padding: "3.2rem 0" }}>
                <AsusuDesign2 />
              </div>
            </div>
          </CaseStudyDetailContainer>
        </AsusuUserFlowChartWrapper>

        <section className="mt-xl">
          <CaseStudyDetailContainer>
            <h2>Image worth a thousand words</h2>
            <p className="is-text-xsm is-regular">
              Images from field research, business sales and Product demo and
              others
            </p>
          </CaseStudyDetailContainer>

          <CaseStudyDetailContainer
            style={{ maxWidth: "1406px", padding: "0 1.5rem" }}
          >
            <AsusuResearchField
              style={{ width: "100%" }}
              aria-label="Asusu research field image"
            />
          </CaseStudyDetailContainer>
        </section>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Project Achievements and Contributions</h2>
          <ul className="list-style-none">
            <li>
              <h3 className="is-extra-bold is-color-primary">
                Research Insights Across Diverse Locations
              </h3>
              <p>
                During the project, I conducted extensive research interviews
                with cooperative stakeholders in various regions, including
                Zamfara state, Kano state, Abuja, and Ondo. This multifaceted
                approach allowed us to gain a comprehensive understanding of the
                challenges and needs faced by different cooperative societies,
                ensuring that our digital banking platform could cater to a
                diverse range of requirements.
              </p>
            </li>
            <li>
              <h3 className="is-extra-bold is-color-primary">
                Cooperative Conference Facilitation and Product Launch
              </h3>
              <p>
                One of the highlights of the project was the organization of a
                Cooperative Conference, a pivotal event that showcased our
                digital banking platform. I had the privilege of not only
                participating but also facilitating this conference, which
                brought together over 200 stakeholders from the cooperative
                sector.
              </p>
            </li>
            <li>
              <h3 className="is-extra-bold is-color-primary">
                Product Demo and Remarkable Sales Impact
              </h3>
              <p>
                During the Cooperative Conference, I conducted an engaging and
                informative product demonstration. This demonstration resonated
                with the attendees, leading to an astounding outcome – over 32
                immediate sales of our digital banking solution. The instant
                success was a testament to the relevance and efficacy of the
                platform in addressing the cooperative sector's unique needs.
              </p>
            </li>
          </ul>
        </CaseStudyDetailContainer>

        <section className="is-bg-white mt-xl" style={{ padding: "9.6rem 0" }}>
          <CaseStudyDetailContainer>
            <h2>Some Statistics in 3months</h2>
            <ul className="ml-l">
              <li>
                Onboarded <span className="is-extra-bold is-text-md">45</span>{" "}
                Credit Unions and 30 SACCOs onto the platform.
              </li>
              <li>
                Average transaction value increased by{" "}
                <span className="is-extra-bold is-text-md">10%</span> since the
                platform's launch.
              </li>
              <li>
                Members log in an average of{" "}
                <span className="is-extra-bold">5</span> times per week, with an
                average session duration of{" "}
                <span className="is-extra-bold">4</span> minutes.
              </li>
              <li>
                Reduced transaction processing time by{" "}
                <span className="is-extra-bold is-text-md">30%</span> compared
                to pre-platform operations.
              </li>
              <li>
                Credit Union staff reported a{" "}
                <span className="is-extra-bold is-text-md">20%</span> decrease
                in manual paperwork and a 15% reduction in in-branch visits.
              </li>
              <li>
                Acquired <span className="is-extra-bold is-text-md">18</span>{" "}
                new Credit Union customers in three months.
              </li>
              <li>
                Generated{" "}
                <span className="is-extra-bold is-text-md">$10,000</span> in
                revenue from new platform sales and existing user subscriptions.
              </li>
              <li>
                Member satisfaction survey yielded an{" "}
                <span className="is-extra-bold is-text-md">88%</span>{" "}
                satisfaction rate with the platform.
              </li>
              <li>
                The mobile check deposit feature is the most frequently used,
                followed by the check Loan status
              </li>
            </ul>
          </CaseStudyDetailContainer>
        </section>

        <QuoteBox
          className="mt-xl is-bg-accent-200"
          quote={`Over the years, I've had the pleasure of collaborating with Lukman on several exhilarating projects. Among the multitude of exceptional designers I've worked with in various agencies and software companies, his work consistently shines and remains at the pinnacle. The delivery of assets and communication is consistently outstanding, while his design systems exude professionalism and provide developers with a delightful experience."`}
          citeName="Bardeson Lucky"
          citeRole="CTO @ asusu"
        />
      </CaseStudyDetail>

      <CaseStudyDetailFooter item={caseStudyItems[1].cards[1]} />
    </Fragment>
  );
};
