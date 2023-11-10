// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import { CaseStudyHero, QuoteBox } from "../../../components";
import {
  CaseStudyDetail,
  Container as CaseStudyDetailContainer,
} from "../../../assets/styles/common.styles";

export const BongaloCaseStudy = () => {
  const { CASE_STUDIES_HERO_ITEMS: caseStudiesHeroItems } = useStaticData();

  return (
    <Fragment>
      <header>
        <CaseStudyHero {...caseStudiesHeroItems.bongalo} />
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
            <b className="bg-collaborators__name">Jr Nosouh Tonteh</b> Product
            Manager, <b className="bg-collaborators__name">Nsikan Etukudoh </b>
            Product designer,
            <b className="bg-collaborators__name"> David Atebisun</b> Frontend
            engineer,
            <b className="bg-collaborators__name"> Nelson Bassey</b> Lead
            engineer,
            <b className="bg-collaborators__name"> Minuifuong Nghombombong </b>
            CEO
          </p>
        </CaseStudyDetailContainer>

        <CaseStudyDetailContainer as="section">
          <h2>Research</h2>
          <p className="bg-research__content">
            This initial phase was about more than just understanding the
            current state of affairs; it was about building empathy with our
            users and forging a foundation upon which we could construct a
            superior experience. Armed with this knowledge, we set out to
            redefine Bongalo's product, with a commitment to addressing pain
            points and enhancing the journey for hosts and guests alike.
          </p>

          <p className="bg-research__content">
            Our research methodology was rooted in a comprehensive and iterative
            approach that combined qualitative and quantitative methods. We
            aimed to gather insights from both hosts and guests, ensuring a
            holistic understanding of the user experience. The following steps
            outline our research process:
          </p>

          <ol>
            <li className="is-extra-bold list-item-title">
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

            <li className="is-extra-bold list-item-title">
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

            <li className="is-extra-bold list-item-title">
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
              <strong>Step-by-Step Guidance:</strong> The wizard method broke
              down the listing process into manageable steps, providing hosts
              with clear guidance.
            </li>

            <li className="ml-md mb-sm">
              <strong>Progress Visualization:</strong>A progress bar displayed
              real-time progress, helping hosts track their advancement through
              the listing process.
            </li>

            <li className="ml-md mb-sm">
              <strong>Intuitive Flow:</strong> The flow was logically sequenced,
              starting with basic property details and progressing to specific
              information and photos.
            </li>

            <li className="ml-md mb-sm">
              <strong>Interactive Assistance:</strong>Interactive tooltips and
              information icons offered instant context and helpful tips,
              reducing the need for external guidance.
            </li>

            <li className="ml-md mb-sm">
              <strong>In-Line Validation:</strong>
              Real-time validation minimized errors, enabling hosts to correct
              issues on the spot.
            </li>

            <li className="ml-md mb-sm">
              <strong> Preview at Every Step:</strong> Hosts could preview their
              listing at each stage, visualizing how it would appear to
              potential guests.
            </li>

            <li className="ml-md">
              <strong>Mobile Responsiveness:</strong>
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
              <strong className="is-extra-bold">
                Bounce Rate Improvement:
              </strong>{" "}
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
              <strong className="is-extra-bold">Conversion Rate Boost:</strong>{" "}
              Booking and listing conversion rates saw substantial increases,
              rising from <span className="is-danger is-extra-bold">12%</span>{" "}
              to{" "}
              <span className="is-success is-extra-bold is-text-md">26%</span>{" "}
              and <span className="is-danger is-extra-bold">8%</span> to{" "}
              <span className="is-success is-extra-bold is-text-md">19%</span>,
              respectively.
            </li>
            <li className="mb-sm ml-md">
              <strong className="is-extra-bold">
                Increased User Engagement:
              </strong>{" "}
              The average session duration increased by
              <span className="is-success is-extra-bold is-text-md">
                {" "}
                40%
              </span>{" "}
              post-redesign, showcasing heightened user interest and
              interaction.
            </li>
            <li className="mb-sm ml-md">
              <strong className="is-extra-bold">
                Elevated User Satisfaction:
              </strong>{" "}
              User satisfaction ratings surged from
              <span className="is-danger is-extra-bold"> 3.8</span> to{" "}
              <span className="is-success is-extra-bold is-text-md">4.6</span>{" "}
              (on a scale of 1-5) after the redesign.
            </li>
            <li className="mb-sm ml-md">
              <strong className="is-extra-bold">Mobile Traffic Growth:</strong>{" "}
              Mobile traffic increased by{" "}
              <span className="is-success is-extra-bold is-text-md">35%</span>{" "}
              post-redesign, demonstrating a more responsive and user-friendly
              mobile experience.
            </li>
            <li className="mb-md ml-md">
              <strong className="is-extra-bold">
                Listing Process Enhancement:
              </strong>{" "}
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
    </Fragment>
  );
};
