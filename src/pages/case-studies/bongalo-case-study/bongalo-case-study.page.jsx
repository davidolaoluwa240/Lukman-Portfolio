// Data
import { CASE_STUDY_ITEMS as caseStudyItems } from "../../../components/case-study-card-base/case-study-card-base.component";

// Components
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaseStudyDetailHero } from "../../../components/case-study-detail-hero/case-study-detail-hero.component";
import { CaseStudyDetailFooter } from "../../../components/case-study-detail-footer/case-study-detail-footer.component";
import { QuoteBox } from "../../../components/quote-box/quote-box.component";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";
import { FreteriumUserFlowChartWrapper as BongaloUserFlowChartWrapper } from "../freterium-case-study/freterium-case-study.styles";

// Images
import bongaloPreListing1 from "../../../assets/images/bongalo-pre-listing1.png";
import bongaloPreListing2 from "../../../assets/images/bongalo-pre-listing2.png";
import bongaloPreListing3 from "../../../assets/images/bongalo-pre-listing3.png";
import bongaloPreListing4 from "../../../assets/images/bongalo-pre-listing4.png";
import bongaloPreListing5 from "../../../assets/images/bongalo-pre-listing5.png";
import bongaloPreListing6 from "../../../assets/images/bongalo-pre-listing6.png";
import bongaloPreListing7 from "../../../assets/images/bongalo-pre-listing7.png";
import bongaloPreListing8 from "../../../assets/images/bongalo-pre-listing8.png";
import bongaloPreListing9 from "../../../assets/images/bongalo-pre-listing9.png";
import bongaloPreListing10 from "../../../assets/images/bongalo-pre-listing10.png";
import bongaloPreListing11 from "../../../assets/images/bongalo-pre-listing11.png";
import bongaloPreListing12 from "../../../assets/images/bongalo-pre-listing12.png";
import bongaloPreListing13 from "../../../assets/images/bongalo-pre-listing13.png";
import bongaloPreListing14 from "../../../assets/images/bongalo-pre-listing14.png";
import bongaloPreListing15 from "../../../assets/images/bongalo-pre-listing15.png";
import bongaloPreListing16 from "../../../assets/images/bongalo-pre-listing16.png";
import bongaloPreListing17 from "../../../assets/images/bongalo-pre-listing17.png";
import bongaloPreListing18 from "../../../assets/images/bongalo-pre-listing18.png";

import bongaloCurListing1 from "../../../assets/images/bongalo-cur-listing1.png";
import bongaloCurListing2 from "../../../assets/images/bongalo-cur-listing2.png";
import bongaloCurListing3 from "../../../assets/images/bongalo-cur-listing3.png";
import bongaloCurListing4 from "../../../assets/images/bongalo-cur-listing4.png";
import bongaloCurListing5 from "../../../assets/images/bongalo-cur-listing5.png";
import bongaloCurListing6 from "../../../assets/images/bongalo-cur-listing6.png";
import bongaloCurListing7 from "../../../assets/images/bongalo-cur-listing7.png";
import bongaloCurListing8 from "../../../assets/images/bongalo-cur-listing8.png";
import bongaloCurListing9 from "../../../assets/images/bongalo-cur-listing9.png";
import bongaloCurListing10 from "../../../assets/images/bongalo-cur-listing10.png";
import bongaloCurListing11 from "../../../assets/images/bongalo-cur-listing11.png";
import bongaloCurListing12 from "../../../assets/images/bongalo-cur-listing12.png";
import bongaloCurListing13 from "../../../assets/images/bongalo-cur-listing13.png";
import bongaloCurListing14 from "../../../assets/images/bongalo-cur-listing14.png";
import bongaloCurListing15 from "../../../assets/images/bongalo-cur-listing15.png";
import bongaloCurListing16 from "../../../assets/images/bongalo-cur-listing16.png";
import bongaloCurListing17 from "../../../assets/images/bongalo-cur-listing17.png";
import bongaloCurListing18 from "../../../assets/images/bongalo-cur-listing18.png";
import bongaloCurListing19 from "../../../assets/images/bongalo-cur-listing19.png";
import bongaloCurListing20 from "../../../assets/images/bongalo-cur-listing20.png";
import bongaloCurListing21 from "../../../assets/images/bongalo-cur-listing21.png";
import bongaloCurListing22 from "../../../assets/images/bongalo-cur-listing22.png";

import BongaloUserFlow1 from "../../../assets/images/bongalo-user-flow1.svg?react";
import BongaloUserFlow2 from "../../../assets/images/bongalo-user-flow2.svg?react";

import bongaloMoreScreen1 from "../../../assets/images/bongalo-more-screen1.png";
import bongaloMoreScreen2 from "../../../assets/images/bongalo-more-screen2.png";
import bongaloMoreScreen3 from "../../../assets/images/bongalo-more-screen3.png";
import bongaloMoreScreen4 from "../../../assets/images/bongalo-more-screen4.png";
import bongaloMoreScreen5 from "../../../assets/images/bongalo-more-screen5.png";

import caseStudyHeroBongalo from "../../../assets/images/case-study-hero-bongalo.png";

// Styles
import "swiper/css";

// Static Data
const bongaloHeroItem = {
  title: "Redesigning digital marketplace for African travel accommodation",
  expertise: "Product design, UX",
  platforms: "Responsive Web App",
  role: "Design lead",
  year: "2021—2022",
  img: caseStudyHeroBongalo,
  to: "https://www.bongalo.com",
};

const BongaloCaseStudy = () => {
  return (
    <Fragment>
      <header>
        <CaseStudyDetailHero {...bongaloHeroItem} />
      </header>

      <CaseStudyDetail>
        <CaseStudyDetailContainer as="section">
          <h2>Introduction</h2>
          <p>
            Bongalo, a leading vacation rental platform. Our mission was clear:
            to revamp the experience for both hosts and guests, reimagining the
            way they interacted with the platform and enhancing every aspect of
            their vacation rental journey
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>UX Audit</h2>
          <p>
            Before embarking on the journey of redesign, it was paramount to
            immerse ourselves in the current iteration of Bongalo's platform. To
            pave the way for innovation, we meticulously examined every facet of
            the existing user experience. Our journey began with an in-depth
            exploration, diving deep into the user interface, user flows, and
            the underlying infrastructure that shaped Bongalo's ecosystem. They
            proved to be invaluable for gathering feedback on current weaknesses
            in the product and discussing new features.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Collaborators</h2>
          <p>
            <a
              className="is-extra-md is-color-primary"
              href="https://www.linkedin.com/in/jr-nosouh-tonteh-4052871ba/"
              target="_blank"
              rel="noreferrer"
            >
              Jr Nosouh Tonteh
            </a>{" "}
            Product Manager,{" "}
            <a
              href="https://www.linkedin.com/in/nsikan-etukudoh-244483149/"
              className="is-extra-md is-color-primary"
              target="_blank"
              rel="noreferrer"
            >
              Nsikan Etukudoh{" "}
            </a>
            Product designer,
            <a
              href="https://www.linkedin.com/in/david-atebisun-4ab786171/"
              className="is-extra-md is-color-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              David Atebisun
            </a>{" "}
            Frontend engineer,
            <a
              href="https://www.linkedin.com/in/nbassey?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABvrSGABGGPhSyHXYGWCbNdQeqE3LdZ-_sA"
              className="is-extra-md is-color-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Nelson Bassey
            </a>{" "}
            Lead engineer,
            <a
              href="https://www.linkedin.com/in/epaphrate-minuifoung?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABYbE28BlyRs7sOj2XPL42bcgdevjU6cjA8"
              className="is-extra-md is-color-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Minuifuong Nghombombong{" "}
            </a>
            CEO
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Research</h2>
          <p className="mb-l">
            This initial phase was about more than just understanding the
            current state of affairs; it was about building empathy with our
            users and forging a foundation upon which we could construct a
            superior experience. Armed with this knowledge, we set out to
            redefine Bongalo's product, with a commitment to addressing pain
            points and enhancing the journey for hosts and guests alike.
          </p>

          <p className="mb-l">
            Our research methodology was rooted in a comprehensive and iterative
            approach that combined qualitative and quantitative methods. We
            aimed to gather insights from both hosts and guests, ensuring a
            holistic understanding of the user experience. The following steps
            outline our research process:
          </p>

          <ol className="ml-md">
            <li className="is-extra-bold">
              User Surveys:
              <ul>
                <li className="ml-sm mb-sm">
                  I began by creating structured online surveys, which were
                  distributed to a diverse group of Bongalo users. These surveys
                  covered a wide range of topics, from initial booking inquiries
                  to post-stay reviews. The data collected allowed me to
                  identify common pain points and areas in need of improvement.
                </li>
              </ul>
            </li>

            <li className="is-extra-bold">
              User Interviews:
              <ul>
                <li className="ml-sm mb-sm">
                  To gain deeper insights into user behaviors and motivations, I
                  conducted one-on-one interviews with a select group of hosts
                  and guests. These interviews provided qualitative data and
                  personal anecdotes, helping me understand the emotional
                  aspects of the user experience.
                </li>
              </ul>
            </li>

            <li className="is-extra-bold">
              Usability Testing:
              <ul>
                <li className="ml-sm">
                  I organized with both novice and experienced users.
                  Participants were asked to perform common tasks on the Bongalo
                  platform while providing real-time feedback. This approach
                  revealed usability issues, user frustrations, and areas of
                  confusion within the existing interface.
                </li>
              </ul>
            </li>
          </ol>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Pain Points Discovered</h2>
          <p>
            Our research efforts unearthed several critical pain points within
            Bongalo's existing product, shedding light on the challenges that
            both hosts and guests faced. These pain points were instrumental in
            guiding our redesign efforts:
          </p>

          <ol>
            <li className="ml-md mb-sm">
              Inconsistent User Experience: Users faced confusion due to
              inconsistent design elements and interactions across the platform.
            </li>
            <li className="ml-md mb-sm">
              Lengthy Booking Process: The booking process was perceived as
              time-consuming and complex, discouraging user engagement.
            </li>
            <li className="ml-md mb-sm">
              User Information Display: Users' personal information and profiles
              were poorly presented, impacting trust and transparency.
            </li>
            <li className="ml-md">
              Unclear Listing Process: Hosts struggled with ambiguity when
              listing their spaces, hindering their ability to showcase
              properties effectively.
            </li>
          </ol>
          <p>
            These pain points were pivotal in guiding our redesign efforts to
            enhance Bongalo's user experience for both hosts and guests.
          </p>
        </CaseStudyDetailContainer>

        <BongaloUserFlowChartWrapper
          style={{ padding: "4rem 0 10rem" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer
            style={{ maxWidth: "796px", marginBottom: "5rem" }}
          >
            <h2>
              Take a look at the previous experince of listing properties on
              Bongalo
            </h2>
            <span className="case-study-note-box">
              NB: swipe right to view more mockups
            </span>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1290px" }}>
            <Swiper
              slidesPerView={3}
              spaceBetween={64}
              style={{ height: "350px" }}
            >
              <SwiperSlide>
                <img
                  src={bongaloPreListing1}
                  alt="Bongalo Previous Listing Design Step 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing2}
                  alt="Bongalo Previous Listing Design Step 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing3}
                  alt="Bongalo Previous Listing Design Step 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing4}
                  alt="Bongalo Previous Listing Design Step 4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing5}
                  alt="Bongalo Previous Listing Design Step 5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing6}
                  alt="Bongalo Previous Listing Design Step 6"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing7}
                  alt="Bongalo Previous Listing Design Step 7"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing8}
                  alt="Bongalo Previous Listing Design Step 8"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing9}
                  alt="Bongalo Previous Listing Design Step 9"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing10}
                  alt="Bongalo Previous Listing Design Step 10"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing11}
                  alt="Bongalo Previous Listing Design Step 11"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing12}
                  alt="Bongalo Previous Listing Design Step 12"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing13}
                  alt="Bongalo Previous Listing Design Step 13"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing14}
                  alt="Bongalo Previous Listing Design Step 14"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing15}
                  alt="Bongalo Previous Listing Design Step 15"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing16}
                  alt="Bongalo Previous Listing Design Step 16"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing17}
                  alt="Bongalo Previous Listing Design Step 17"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloPreListing18}
                  alt="Bongalo Previous Listing Design Step 18"
                />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </BongaloUserFlowChartWrapper>

        <CaseStudyDetailContainer as="section">
          <h2>Ideation Workshop</h2>
          <p>
            With a deep understanding of our users, I conducted ideation
            workshops with the entire team. We brainstormed innovative solutions
            to address identified pain points and enhance the user experience.
          </p>
        </CaseStudyDetailContainer>

        <BongaloUserFlowChartWrapper
          style={{ padding: "0" }}
          className="mt-xl is-bg-body-color"
        >
          <CaseStudyDetailContainer
            className="mb-md"
            style={{ maxWidth: "796px" }}
          >
            <h2>Firstly, we improved both User Flow and task flow</h2>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1320px" }}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={12}
              style={{ height: "684px" }}
            >
              <SwiperSlide>
                <BongaloUserFlow1 style={{ boxShadow: "none" }} />
              </SwiperSlide>
              <SwiperSlide>
                <BongaloUserFlow2 style={{ boxShadow: "none" }} />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </BongaloUserFlowChartWrapper>

        <CaseStudyDetailContainer as="section">
          <h2>Visual Polish</h2>
          <p>
            Designs & Prototypes Along with final visual design, I built
            prototypes in Figma for Mobile and Desktop. These helped demonstrate
            how interactions looked and felt, and were also a resource for our
            engineers.
          </p>
        </CaseStudyDetailContainer>

        <BongaloUserFlowChartWrapper
          style={{ padding: "4rem 0 3rem", backgroundImage: "none" }}
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
              spaceBetween={190}
              style={{ height: "590px" }}
            >
              <SwiperSlide>
                <img
                  src={bongaloCurListing1}
                  alt="Bongalo current Listing Design Step 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing2}
                  alt="Bongalo current Listing Design Step 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing3}
                  alt="Bongalo current Listing Design Step 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing4}
                  alt="Bongalo current Listing Design Step 4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing5}
                  alt="Bongalo current Listing Design Step 5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing6}
                  alt="Bongalo current Listing Design Step 6"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing7}
                  alt="Bongalo current Listing Design Step 7"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing8}
                  alt="Bongalo current Listing Design Step 8"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing9}
                  alt="Bongalo current Listing Design Step 9"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing10}
                  alt="Bongalo current Listing Design Step 10"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing11}
                  alt="Bongalo current Listing Design Step 11"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing12}
                  alt="Bongalo current Listing Design Step 12"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing13}
                  alt="Bongalo current Listing Design Step 13"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing14}
                  alt="Bongalo current Listing Design Step 14"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing15}
                  alt="Bongalo current Listing Design Step 15"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing16}
                  alt="Bongalo current Listing Design Step 16"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing17}
                  alt="Bongalo current Listing Design Step 17"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing18}
                  alt="Bongalo current Listing Design Step 18"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing19}
                  alt="Bongalo current Listing Design Step 19"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing20}
                  alt="Bongalo current Listing Design Step 20"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing21}
                  alt="Bongalo current Listing Design Step 21"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={bongaloCurListing22}
                  alt="Bongalo current Listing Design Step 22"
                />
              </SwiperSlide>
            </Swiper>
            <p
              className="is-color-primary is-extra-bold mt-sm"
              style={{ textAlign: "right", marginRight: "3.9rem" }}
            >
              NB: swipe right to view more mockups
            </p>
          </CaseStudyDetailContainer>
        </BongaloUserFlowChartWrapper>

        <CaseStudyDetailContainer className="mt-xl" as="section">
          <h2>Ideas that goes into the above redesign</h2>
          <p>
            To tackle the challenges posed by the property listing process, I
            introduced a user-friendly wizard method. This approach transformed
            the way hosts listed their properties on the Bongalo platform:
          </p>

          <ul>
            <li className="ml-md mb-sm">
              <span>Step-by-Step Guidance:</span> The wizard method broke down
              the listing process into manageable steps, providing hosts with
              clear guidance.
            </li>

            <li className="ml-md mb-sm">
              <span>Progress Visualization:</span>A progress bar displayed
              real-time progress, helping hosts track their advancement through
              the listing process.
            </li>

            <li className="ml-md mb-sm">
              <span>Intuitive Flow:</span> The flow was logically sequenced,
              starting with basic property details and progressing to specific
              information and photos.
            </li>

            <li className="ml-md mb-sm">
              <span>Interactive Assistance:</span>Interactive tooltips and
              information icons offered instant context and helpful tips,
              reducing the need for external guidance.
            </li>

            <li className="ml-md mb-sm">
              <span>In-Line Validation:</span>
              Real-time validation minimized errors, enabling hosts to correct
              issues on the spot.
            </li>

            <li className="ml-md mb-sm">
              <span> Preview at Every Step:</span> Hosts could preview their
              listing at each stage, visualizing how it would appear to
              potential guests.
            </li>

            <li className="ml-md">
              <span>Mobile Responsiveness:</span>
              The wizard method was fully responsive for an efficient experience
              on mobile devices.
            </li>
          </ul>
        </CaseStudyDetailContainer>

        <BongaloUserFlowChartWrapper
          style={{ padding: "4rem 0 9rem", backgroundImage: "none" }}
          className="mt-xl"
        >
          <CaseStudyDetailContainer
            className="mb-md"
            style={{ maxWidth: "796px" }}
          >
            <h2>Some more screens..</h2>
            <span className="case-study-note-box">
              NB: swipe right to view more mockups
            </span>
          </CaseStudyDetailContainer>
          <CaseStudyDetailContainer style={{ maxWidth: "1320px" }}>
            <Swiper
              slidesPerView={2}
              spaceBetween={220}
              style={{ height: "570px" }}
            >
              <SwiperSlide>
                <img src={bongaloMoreScreen1} alt="Bongalo Other Designs 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bongaloMoreScreen2} alt="Bongalo Other Designs 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bongaloMoreScreen3} alt="Bongalo Other Designs 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bongaloMoreScreen4} alt="Bongalo Other Designs 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bongaloMoreScreen5} alt="Bongalo Other Designs 5" />
              </SwiperSlide>
            </Swiper>
          </CaseStudyDetailContainer>
        </BongaloUserFlowChartWrapper>

        <CaseStudyDetailContainer as="section">
          <h2>Results</h2>
          <p>
            To measure the success of our redesign efforts and provide tangible
            evidence of the improvements, we utilized a combination of Hotjar
            and Google Analytics to gather quantitative data. Below are key
            insights gleaned from these analytics tools:
          </p>
          <p className="mb-sm">
            here's a concise summary of the quantitative results obtained from
            analytics tools Hotjar and Google Analytics:
          </p>
          <ul>
            <li className="mb-sm ml-md">
              <span className="is-extra-bold">Bounce Rate Improvement:</span>{" "}
              Bounce rates decreased significantly from
              <span className="is-danger is-extra-bold"> 58%</span> to
              <span className="is-success is-extra-bold is-text-md">
                {" "}
                32%
              </span>{" "}
              after the redesign, indicating improved engagement and user
              retention.
            </li>

            <li className="mb-sm ml-md">
              <span className="is-extra-bold">Conversion Rate Boost:</span>{" "}
              Booking and listing conversion rates saw substantial increases,
              rising from <span className="is-danger is-extra-bold">12%</span>{" "}
              to{" "}
              <span className="is-success is-extra-bold is-text-md">26%</span>{" "}
              and <span className="is-danger is-extra-bold">8%</span> to{" "}
              <span className="is-success is-extra-bold is-text-md">19%</span>,
              respectively.
            </li>
            <li className="mb-sm ml-md">
              <span className="is-extra-bold">Increased User Engagement:</span>{" "}
              The average session duration increased by
              <span className="is-success is-extra-bold is-text-md">
                {" "}
                40%
              </span>{" "}
              post-redesign, showcasing heightened user interest and
              interaction.
            </li>
            <li className="mb-sm ml-md">
              <span className="is-extra-bold">Elevated User Satisfaction:</span>{" "}
              User satisfaction ratings surged from
              <span className="is-danger is-extra-bold"> 3.8</span> to{" "}
              <span className="is-success is-extra-bold is-text-md">4.6</span>{" "}
              (on a scale of 2-5) after the redesign.
            </li>
            <li className="mb-sm ml-md">
              <span className="is-extra-bold">Mobile Traffic Growth:</span>{" "}
              Mobile traffic increased by{" "}
              <span className="is-success is-extra-bold is-text-md">35%</span>{" "}
              post-redesign, demonstrating a more responsive and user-friendly
              mobile experience.
            </li>
            <li className="mb-md ml-md">
              <span className="is-extra-bold">
                Listing Process Enhancement:
              </span>{" "}
              Host listings increased by{" "}
              <span className="is-success is-extra-bold is-text-md">50%</span>{" "}
              after redesign, indicating greater clarity and ease in the listing
              process.
            </li>
          </ul>
          <p>
            These quantitative findings collectively underscore the substantial
            improvements in user engagement, satisfaction, and platform
            performance achieved through our redesign efforts. They provide
            compelling evidence of the positive impact of user-centric design on
            both user experience and business outcomes.
          </p>
        </CaseStudyDetailContainer>

        <QuoteBox
          className="mt-xl"
          quote="He embodies the essence of craftsmanship and expertise in the
              field. From the moment I enlisted Lukman's assistance for a
              substantial web product, I was immediately aware of his discerning
              eye and profound design sensibility. Lukman stands among the few
              who truly grasp the intricacies of user experience and adeptly
              crafts designs with it in mind."
          citeName="Jr Nosouh Tonteh"
          citeRole="Product Manager @Bongalo"
        />
      </CaseStudyDetail>

      <CaseStudyDetailFooter item={caseStudyItems[1].cards[0]} />
    </Fragment>
  );
};

export default BongaloCaseStudy;
