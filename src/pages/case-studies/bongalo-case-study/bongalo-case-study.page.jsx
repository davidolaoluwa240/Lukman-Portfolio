// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { CaseStudyHero } from "../../../components";
import { CaseStudyDetail } from "../../../assets/styles/common.styles";

export const BongaloCaseStudy = () => {
  const { CASE_STUDIES_HERO_ITEMS: caseStudiesHeroItems } = useStaticData();

  return (
    <CaseStudyDetail>
      <CaseStudyHero {...caseStudiesHeroItems.bongalo} />
      <article>
        <h2>Introduction</h2>
        <p>
          Bongalo, a leading vacation rental platform. Our mission was clear: to
          revamp the experience for both hosts and guests, reimagining the way
          they interacted with the platform and enhancing every aspect of their
          vacation rental journey
        </p>
      </article>

      <article>
        <h2>UX Audit</h2>
        <p>
          Before embarking on the journey of redesign, it was paramount to
          immerse ourselves in the current iteration of Bongalo's platform. To
          pave the way for innovation, we meticulously examined every facet of
          the existing user experience. Our journey began with an in-depth
          exploration, diving deep into the user interface, user flows, and the
          underlying infrastructure that shaped Bongalo's ecosystem. They proved
          to be invaluable for gathering feedback on current weaknesses in the
          product and discussing new features.
        </p>
      </article>

      <article>
        <h2>Collaborators</h2>
        <p>
          <b>Jr Nosouh Tonteh</b> Product Manager, <b>Nsikan Etukudoh</b>
          Product designer, <b>David Atebisun</b> Frontend engineer,
          <b>Nelson Bassey</b> Lead engineer, <b>Minuifuong Nghombombong</b> CEO
        </p>
      </article>

      <article>
        <h2>Research</h2>
        <p>
          This initial phase was about more than just understanding the current
          state of affairs; it was about building empathy with our users and
          forging a foundation upon which we could construct a superior
          experience. Armed with this knowledge, we set out to redefine
          Bongalo's product, with a commitment to addressing pain points and
          enhancing the journey for hosts and guests alike.
        </p>

        <p>
          Our research methodology was rooted in a comprehensive and iterative
          approach that combined qualitative and quantitative methods. We aimed
          to gather insights from both hosts and guests, ensuring a holistic
          understanding of the user experience. The following steps outline our
          research process:
        </p>

        <ol>
          <li>
            1.User Surveys:
            <ul>
              <li>
                I began by creating structured online surveys, which were
                distributed to a diverse group of Bongalo users. These surveys
                covered a wide range of topics, from initial booking inquiries
                to post-stay reviews. The data collected allowed me to identify
                common pain points and areas in need of improvement.
              </li>
            </ul>
          </li>

          <li>
            2. User Interviews:
            <ul>
              <li>
                To gain deeper insights into user behaviors and motivations, I
                conducted one-on-one interviews with a select group of hosts and
                guests. These interviews provided qualitative data and personal
                anecdotes, helping me understand the emotional aspects of the
                user experience.
              </li>
            </ul>
          </li>

          <li>
            3.Usability Testing:
            <ul>
              <li>
                I organized with both novice and experienced users. Participants
                were asked to perform common tasks on the Bongalo platform while
                providing real-time feedback. This approach revealed usability
                issues, user frustrations, and areas of confusion within the
                existing interface.
              </li>
            </ul>
          </li>
        </ol>
      </article>

      <article>
        <h2>Pain Points Discovered</h2>
        <p>
          Our research efforts unearthed several critical pain points within
          Bongalo's existing product, shedding light on the challenges that both
          hosts and guests faced. These pain points were instrumental in guiding
          our redesign efforts:
        </p>

        <ul>
          <li>
            Inconsistent User Experience: Users faced confusion due to
            inconsistent design elements and interactions across the platform.
          </li>
          <li>
            Lengthy Booking Process: The booking process was perceived as
            time-consuming and complex, discouraging user engagement.
          </li>
          <li>
            User Information Display: Users' personal information and profiles
            were poorly presented, impacting trust and transparency.
          </li>
          <li>
            Unclear Listing Process: Hosts struggled with ambiguity when listing
            their spaces, hindering their ability to showcase properties
            effectively.
          </li>
        </ul>
        <p>
          These pain points were pivotal in guiding our redesign efforts to
          enhance Bongalo's user experience for both hosts and guests.
        </p>
      </article>

      <article>
        <h2>Results</h2>
        <p>
          To measure the success of our redesign efforts and provide tangible
          evidence of the improvements, we utilized a combination of Hotjar and
          Google Analytics to gather quantitative data. Below are key insights
          gleaned from these analytics tools:
        </p>
        <p>
          here's a concise summary of the quantitative results obtained from
          analytics tools Hotjar and Google Analytics:
        </p>
        <ul>
          <li>
            Bounce Rate Improvement: Bounce rates decreased significantly from
            58% to 32% after the redesign, indicating improved engagement and
            user retention.
          </li>
          <li>
            Conversion Rate Boost: Booking and listing conversion rates saw
            substantial increases, rising from 12% to 26% and 8% to 19%,
            respectively.
          </li>
          <li>
            Increased User Engagement: The average session duration increased by
            40% post-redesign, showcasing heightened user interest and
            interaction.
          </li>
          <li>
            Elevated User Satisfaction: User satisfaction ratings surged from
            3.8 to 4.6 (on a scale of 1-5) after the redesign.
          </li>
          <li>
            Mobile Traffic Growth: Mobile traffic increased by 35%
            post-redesign, demonstrating a more responsive and user-friendly
            mobile experience.
          </li>
          <li>
            Listing Process Enhancement: Host listings increased by 50% after
            redesign, indicating greater clarity and ease in the listing
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
      </article>
    </CaseStudyDetail>
  );
};
