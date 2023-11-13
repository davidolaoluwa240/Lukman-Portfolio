// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import {
  CaseStudyDetailHero,
  CaseStudyDetailFooter,
  QuoteBox,
} from "../../../components";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";

export const BongaloCaseStudy = () => {
  const {
    CASE_STUDY_DETAIL_HERO_ITEMS: caseStudyDetailHeroItems,
    CASE_STUDY_ITEMS: caseStudyItems,
  } = useStaticData();

  return (
    <Fragment>
      <header>
        <CaseStudyDetailHero {...caseStudyDetailHeroItems.bongalo} />
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
            >
              Jr Nosouh Tonteh
            </a>{" "}
            Product Manager,{" "}
            <a
              href="https://www.linkedin.com/in/nsikan-etukudoh-244483149/"
              className="is-extra-md is-color-primary"
              target="_blank"
            >
              Nsikan Etukudoh{" "}
            </a>
            Product designer,
            <a
              href="https://www.linkedin.com/in/david-atebisun-4ab786171/"
              className="is-extra-md is-color-primary"
              target="_blank"
            >
              {" "}
              David Atebisun
            </a>{" "}
            Frontend engineer,
            <a
              href="https://www.linkedin.com/in/nbassey?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABvrSGABGGPhSyHXYGWCbNdQeqE3LdZ-_sA"
              className="is-extra-md is-color-primary"
              target="_blank"
            >
              {" "}
              Nelson Bassey
            </a>{" "}
            Lead engineer,
            <a
              href="https://www.linkedin.com/in/epaphrate-minuifoung?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABYbE28BlyRs7sOj2XPL42bcgdevjU6cjA8"
              className="is-extra-md is-color-primary"
              target="_blank"
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

          <ol>
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

        <CaseStudyDetailContainer as="section">
          <h2>Ideation Workshop</h2>
          <p>
            With a deep understanding of our users, I conducted ideation
            workshops with the entire team. We brainstormed innovative solutions
            to address identified pain points and enhance the user experience.
          </p>
        </CaseStudyDetailContainer>
        <CaseStudyDetailContainer as="section">
          <h2>Visual Polish</h2>
          <p>
            Designs & Prototypes Along with final visual design, I built
            prototypes in Figma for Mobile and Desktop. These helped demonstrate
            how interactions looked and felt, and were also a resource for our
            engineers.
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
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
              (on a scale of 1-5) after the redesign.
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
