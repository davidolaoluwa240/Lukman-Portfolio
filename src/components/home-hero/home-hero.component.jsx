// Modules
import React from "react";

// Components
import OpenTag from "../../assets/images/open-tag.svg?react";

// Styles
import {
  HomeHeroTag,
  HomeHeroContainer,
  HomeHeroHeading,
} from "./home-hero.styles";

export const HomeHero = () => {
  return (
    <HomeHeroContainer>
      <HomeHeroTag>
        <OpenTag />
        Open for new opportunities
      </HomeHeroTag>

      <HomeHeroHeading>
        I'm Lukman based in Nigerian <br />
        <span className="is-lower">
          a senior designer & No-code enthusiast, designing Product’s that
          Simplify & Enhance Everyday Life
        </span>
      </HomeHeroHeading>

      <p>
        I bring over 5 years of expertise in driving the launch of data-driven
        B2B and B2C experiences. I create polished, delightful digital
        experiences that drive results and bring joy to users. I thrive on
        solving complex UX challenges and excel in blending creativity with
        analytical thinking.
      </p>
    </HomeHeroContainer>
  );
};
